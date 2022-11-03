import { Variants } from "framer-motion";

export const ErrorFieldVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: "-20%",
    transition: {
      ease: "easeInOut",
      duration: 0.1,
    },
  },
};
