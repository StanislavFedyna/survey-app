import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface AnimationContainerProps {
  uniqueKey: string;
  children: React.ReactNode;
}

export const AnimationContainer = ({
  uniqueKey,
  children,
}: AnimationContainerProps) => (
  <AnimatePresence>
    <motion.div
      key={uniqueKey}
      initial={{ opacity: 0, scale: 1, y: '100%' }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
