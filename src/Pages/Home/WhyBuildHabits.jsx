import { motion } from "framer-motion";
import { CheckCircle, Brain, TrendingUp, Smile } from "lucide-react";

const cards = [
  {
    icon: <Brain size={40} />,
    title: "Better Focus",
    text: "Daily habits sharpen your concentration and mental clarity."
  },
  {
    icon: <Smile size={40} />,
    title: "Reduced Stress",
    text: "Good habits create a balanced and stress-free lifestyle."
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Constant Growth",
    text: "Small improvements every day lead to big success."
  },
  {
    icon: <CheckCircle size={40} />,
    title: "Achieve Goals",
    text: "Habits turn long-term goals into daily steps."
  }
];

const WhyBuildHabits = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">
        Why Build Habits?
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-5">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            className="p-6 bg-base-100 rounded-xl shadow-md border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="text-primary mb-4 flex justify-center">{c.icon}</div>
            <h3 className="text-xl font-semibold text-center">{c.title}</h3>
            <p className="text-center opacity-80 mt-2">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyBuildHabits;
