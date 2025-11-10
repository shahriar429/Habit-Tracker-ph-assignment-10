import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FeaturedHabits = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/featured-habits")
      .then((res) => res.json())
      .then((data) => setHabits(data))
      .catch((err) => console.error("Error loading featured habits:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl text-center font-bold mb-6 text-primary">
        Featured Habits
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map((habit) => (
          <div
            key={habit._id}
            className="relative bg-white shadow-lg p-5 rounded-2xl border hover:shadow-xl transition-all"
          >
            {/* Created Date Top-Right */}
            <span className="absolute top-3 right-3 text-xs text-gray-500">
              {habit.createdAt
                ? new Date(habit.createdAt).toLocaleDateString()
                : "N/A"}
            </span>

            <h3 className="text-xl font-bold mb-2">{habit.title}</h3>
            <p className="text-gray-600 mb-2">{habit.description}</p>

            <p className="text-sm bg-indigo-100 text-primary inline-block px-3 py-1 rounded-full mb-4">
              {habit.category}
            </p>

            {habit.image && (
              <img
                src={habit.image}
                alt={habit.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
            )}
            <br />
            <Link
              to={`/habits/${habit._id}`}
              className="btn bg-primary text-white w-fit"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedHabits;
