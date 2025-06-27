const API_URL = 'http://localhost:4000';

export const fetchUsers = async () => {
  const res = await fetch(`${API_URL}/users`);
  return res.json(); // array of users
};

export const registerUser = async (user: {
  fullName: string;
  email: string;
  username: string;
  password: string;
}) => {
  const res = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return res.json();
};

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    return { success: false, error: 'Server error' };
  }
};
