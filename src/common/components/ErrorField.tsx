import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { ErrorFieldVariants } from "../animateVariants/ErrorField";

export interface IErrorFieldProps {
  message?: string;
}

export function ErrorField(props: IErrorFieldProps) {
  const { message } = props;
  return (
    <div className="min-h-[28px]">
      <AnimatePresence>
        {message && (
          <motion.p
            variants={ErrorFieldVariants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            className="text-sm pt-2 text-red-800"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
