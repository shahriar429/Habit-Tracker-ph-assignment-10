import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const HabitDetails = () => {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch habit details
  useEffect(() => {
    fetch(`http://localhost:3000/habits/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHabit(data);
        setLoading(false);
      });
  }, [id]);

  // === Calculate 30-day progress ===
  const getProgress = () => {
    if (!habit?.completionHistory) return 0;

    const last30 = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      last30.push(d.toISOString().split("T")[0]);
    }

    const completedDays = habit.completionHistory.filter((d) =>
      last30.includes(d)
    );

    return Math.round((completedDays.length / 30) * 100);
  };

  // === Calculate daily streak ===
  const getStreak = () => {
    if (!habit?.completionHistory || habit.completionHistory.length === 0)
      return 0;

    const dates = habit.completionHistory
      .map((d) => new Date(d))
      .sort((a, b) => b - a);

    let streak = 0;
    let checkDate = new Date(); // today

    for (let date of dates) {
      const dateStr = date.toISOString().split("T")[0];
      const checkStr = checkDate.toISOString().split("T")[0];

      if (dateStr === checkStr) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else if (dateStr < checkStr) {
        break;
      }
    }

    return streak;
  };

  // === Mark Complete Handler ===
  const handleMarkComplete = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/habits/complete/${id}`,
        {
          method: "PATCH",
        }
      );

      const data = await res.json();

      if (res.ok) {
        // Update UI instantly
        setHabit((prev) => ({
          ...prev,
          completionHistory: [
            ...(prev.completionHistory || []),
            new Date().toISOString().split("T")[0],
          ],
        }));
        toast.success("Habit marked as complete!");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 shadow rounded mt-10">
      {/* Habit Image */}
      {habit.image && (
        <img
          src={habit.image}
          alt="habit"
          className="w-full h-60 object-cover rounded mb-5"
        />
      )}

      {/* Habit Title */}
      <h2 className="text-3xl font-bold mb-2">{habit.title}</h2>

      {/* Category */}
      <p className="text-gray-700 mb-2">
        <strong>Category:</strong> {habit.category}
      </p>

      {/* Description */}
      <p className="mb-4">
        <strong>Description:</strong> {habit.description}
      </p>

      {/* Creator Info */}
      <div className="mb-4 p-4 bg-gray-100 rounded">
        <p><strong>Created By:</strong> {habit.user_name || "Unknown"}</p>
        <p><strong>Email:</strong> {habit.user_email || "N/A"}</p>
        <p>
          <strong>Created Date:</strong>{" "}
          {habit.createdAt
            ? new Date(habit.createdAt).toLocaleDateString()
            : "N/A"}
        </p>
      </div>

      {/* Streak */}
      <p className="mb-3 text-lg font-semibold">🔥 Streak: {getStreak()} days</p>

      {/* Progress Bar */}
      <div className="mb-5">
        <p className="mb-1 font-medium">Last 30 Days Progress</p>
        <div className="w-full bg-gray-300 rounded h-4">
          <div
            className="bg-green-600 h-4 rounded"
            style={{ width: `${getProgress()}%` }}
          ></div>
        </div>
        <p>{getProgress()}% completed</p>
      </div>

      {/* Mark Complete Button */}
      <button
        onClick={handleMarkComplete}
        className="bg-blue-600 text-white px-6 py-2 rounded mt-4"
      >
        Mark Complete
      </button>

      <ToastContainer />
    </div>
  );
};
 
export default HabitDetails;
