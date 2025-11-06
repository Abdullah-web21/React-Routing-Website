import { motion } from "framer-motion";

const variants = {
  left: { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  right: { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  top: { hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  bottom: { hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
};

export default function SlideInSection({ direction = "bottom", children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants[direction]}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className=" bg-transparent"
    >
      {children}
    </motion.div>
  );
}
