export const saveResult = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadResult = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
