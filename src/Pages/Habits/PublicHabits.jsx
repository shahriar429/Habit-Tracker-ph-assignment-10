import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PublicHabits = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch("https://habit-tracker-server-qpky.onrender.com/habits")
      .then((res) => res.json())
      .then((data) => setHabits(data))
      .catch((err) => console.error("Error loading public habits:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-5 text-center text-primary">
        Browse Public Habits
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {habits.map((habit) => (
          <div
            key={habit._id}
            className="relative border rounded-lg p-4 
                       shadow hover:shadow-lg transition 
                       bg-white dark:bg-gray-900 
                       border-gray-200 dark:border-gray-700"
          >
            {/* Created Date Top-Right */}
            <span
              className="absolute top-2 right-2 text-xs 
                             text-gray-600 dark:text-gray-300"
            >
              {habit.createdAt
                ? new Date(habit.createdAt).toLocaleDateString()
                : "N/A"}
            </span>

            {/* Category Badge Top-Left */}
            <span
              className="absolute top-2 left-2 text-xs 
                             bg-blue-100 dark:bg-blue-900 
                             text-blue-700 dark:text-blue-200 
                             px-2 py-1 rounded-full"
            >
              {habit.category}
            </span>

            <h3
              className="text-xl font-bold mt-5 m-2 
                           text-gray-800 dark:text-gray-100"
            >
              {habit.title}
            </h3>

            <p
              className="text-sm mb-2 
                          text-gray-700 dark:text-gray-300"
            >
              {habit.description?.slice(0, 60)}...
            </p>

            {/* Creator Name */}
            <p
              className="text-xs mb-3 
                          text-gray-500 dark:text-gray-400"
            >
              Created by: {habit.user_name || "Unknown"}
            </p>

            <Link to={`/habits/${habit._id}`}>
              <button className="bg-primary text-white px-4 py-2 w-full rounded hover:opacity-90">
                See Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicHabits;
