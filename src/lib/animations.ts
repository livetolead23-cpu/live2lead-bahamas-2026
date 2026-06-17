// ─── Shared Framer Motion animation variants ─────────────────────────────────
// Import these in any section instead of redefining locally.
// Usage: <motion.div {...fadeUp(0.2)}> or <motion.div {...fadeLeft()}>

export const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export const fadeIn = (delay = 0) => ({
  initial:    { opacity: 0 },
  animate:    { opacity: 1 },
  transition: { duration: 0.8, delay },
});

export const fadeLeft = (delay = 0) => ({
  initial:    { opacity: 0, x: -30 },
  animate:    { opacity: 1, x: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export const fadeRight = (delay = 0) => ({
  initial:    { opacity: 0, x: 30 },
  animate:    { opacity: 1, x: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export const scaleIn = (delay = 0) => ({
  initial:    { opacity: 0, scale: 0.96 },
  animate:    { opacity: 1, scale: 1 },
  transition: { duration: 0.7, delay },
});
