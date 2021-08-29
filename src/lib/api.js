const API_URL = import.meta.env.VITE_API_URL

export const questionReveal = async (q) => {
  const res = await fetch(`${API_URL}/q/${q}/reveal`);
  return await res.json();
};

export const questionUnreveal = async (q) => {
  const res = await fetch(`${API_URL}/q/${q}/unreveal`);
  return await res.json();
};

export const questionOpen = async (q) => {
  const res = await fetch(`${API_URL}/q/${q}/open`);
  return await res.json();
};

export const setToken = async (token) => {
  const res = await fetch(`${API_URL}/set-token`, {
    method: 'POST',
    body: JSON.stringify({ token }),
    credentials: "include",
  });
  return { status: "ok" };
};

export const fetchBoard = async () => {
  const res = await fetch(`${API_URL}/board`, {
    method: 'POST',
    credentials: "include",
  });
  return await res.json();
};

export const loadBoard = async (board) => {
  const res = await fetch(`${API_URL}/load-board`, {
    method: 'POST',
    credentials: "include",
    body: JSON.stringify({ board }),
  });
  return await res.json();
};

export default {
  questionReveal,
  questionUnreveal,
  questionOpen,
  setToken,
  fetchBoard,
  loadBoard,
};
