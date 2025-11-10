import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router";

const MyHabits = () => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch User’s Habits
  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);

    fetch(`https://your-server-url.com/habits?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setHabits(data))
      .catch((err) => console.error("Error loading habits:", err))
      .finally(() => setLoading(false));
  }, [user?.email]);


  // Delete Habit
  const handleDeleteHabit = (_id) => {
    Swal.fire({
      title: "Delete Habit?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://your-server-url.com/habits/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Habit removed successfully.", "success");
              const remaining = habits.filter((h) => h._id !== _id);
              setHabits(remaining);
            }
          });
      }
    });
  };


  // Mark Habit as Complete
  const handleMarkComplete = (habit) => {
    const updated = {
      ...habit,
      current_streak: habit.current_streak + 1,
    };

    fetch(`https://your-server-url.com/habits/${habit._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updated),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Completed!", "Habit marked as complete.", "success");
        const updatedList = habits.map((h) =>
          h._id === habit._id ? updated : h
        );
        setHabits(updatedList);
      });
  };


  // Loading
  if (loading)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner text-primary w-12 h-12"></span>
      </div>
    );


  return (
    <div className="p-6">
      <h2 className="text-lg md:text-3xl font-bold mb-6 text-primary text-center">
        My Habits ({habits.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-primary text-lg">
              <th>Title</th>
              <th>Category</th>
              <th>Current Streak</th>
              <th>Created Date</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {habits.map((habit) => (
              <tr key={habit._id}>
                <td className="font-semibold">{habit.title}</td>
                <td>{habit.category}</td>
                <td>{habit.current_streak || 0}</td>
                <td>
                  {habit.createdAt
                    ? new Date(habit.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>

                <td className="flex gap-2 justify-center">

                  <Link
                    to={`/habits/update/${habit._id}`}
                    className="btn btn-outline btn-primary btn-sm"
                  >
                    Update
                  </Link>

                  <button
                    onClick={() => handleDeleteHabit(habit._id)}
                    className="btn btn-outline btn-error btn-sm"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleMarkComplete(habit)}
                    className="btn btn-outline btn-success btn-sm"
                  >
                    Mark Complete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {habits.length === 0 && (
          <p className="text-center text-gray-400 mt-5">
            No habits found. Add your first habit!
          </p>
        )}
      </div>
    </div>
  );
};

export default MyHabits;
