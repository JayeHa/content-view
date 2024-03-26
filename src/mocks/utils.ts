export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const applyDelay = async (page: number) => {
  const FIRST_DELAY = 900;
  const DELAY = 400;
  await delay(page === 0 ? FIRST_DELAY : DELAY);
};
