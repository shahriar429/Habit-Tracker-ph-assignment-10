import { motion } from "framer-motion";

const ExtraSection2 = () => {
  return (
    <motion.div
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">

        <motion.img
          src="https://media.istockphoto.com/id/1334885393/vector/project-goal-tracking.jpg?s=612x612&w=0&k=20&c=7shwKXX34Rc3Bpk-77FRakP48pxQxXj3ujoLvZVb78U="
          className="rounded-xl shadow-xl"
          initial={{ x: -60 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.7 }}
        />

        <motion.div
          initial={{ x: 60 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">
            Join a Growing Community
          </h2>
          <p className="text-lg opacity-80 text-secondary">
            Share your habits, learn from others, compare streaks, and stay
            motivated with a supportive habit-building community.
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ExtraSection2;
