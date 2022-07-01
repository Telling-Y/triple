export const easeOutExpo = (progress: number): number => {
  return progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
}
