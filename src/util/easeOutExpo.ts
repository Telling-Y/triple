export const easeOutExpo = (time: number): number => {
  return time === 1 ? 1 : 1 - Math.pow(2, -10 * time)
}
