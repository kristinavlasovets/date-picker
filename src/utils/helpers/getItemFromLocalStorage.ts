export const getItemFromLocalStorage = (key: string): unknown => {
  return JSON.parse(localStorage.getItem(key)!);
};
