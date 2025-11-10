import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const FeaturedHabits = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch("https://your-server-url.com/habits/public")
      .then((res) => res.json())
      .then((data) => setHabits(data.slice(0, 6)));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        Featured Habits
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {habits.map((h) => (
          <motion.div
            key={h._id}
            className="card bg-base-200 shadow-lg border border-base-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <figure>
              <img
                src={h.image || "https://i.ibb.co/h9k1tB0/default.jpg"}
                className="h-48 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="text-xl font-bold">{h.title}</h2>
              <p className="text-sm opacity-80">{h.description.slice(0, 70)}...</p>

              <p className="text-sm mt-2">
                <b>Category:</b> {h.category}
              </p>

              <p className="text-sm">
                <b>Creator:</b> {h.user_name}
              </p>

              <div className="card-actions mt-3">
                <Link
                  to={`/habits/${h._id}`}
                  className="btn btn-primary btn-sm w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default FeaturedHabits;
