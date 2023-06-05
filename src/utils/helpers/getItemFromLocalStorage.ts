export const getItemFromLocalStorage = (key: string): unknown =>
  JSON.parse(localStorage.getItem(key)!);
