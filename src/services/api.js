export const apiFetch = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  const config = {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  // ✅ Only attach body if present
  if (options.body) {
    config.body = options.body;
  }

  const res = await fetch(
    `${process.env.REACT_APP_API_URL}${url}`,
    config
  );

  const data = await res.json();

  // 🔥 Handle global errors
  if (res.status === 401) {
    localStorage.clear();
    window.location.href = "/";
  }

  return data;
};
