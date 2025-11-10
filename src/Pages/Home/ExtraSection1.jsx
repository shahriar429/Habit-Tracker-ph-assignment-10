import { motion } from "framer-motion";

const ExtraSection1 = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-5 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Track Your Growth
      </h2>
      <p className="text-center text-lg text-secondary opacity-80 max-w-3xl mx-auto">
        With our habit tracking system, you can visualize your progress,
        maintain streaks, and stay committed to self-improvement.
      </p>

      <img
        src="https://m.media-amazon.com/images/I/81jJah-9UVL._AC_UF894,1000_QL80_.jpg"
        className="mx-auto mt-8 rounded-xl shadow-lg w-[70vw] h-[70vh]"
      />
    </motion.div>
  );
};

export default ExtraSection1;
