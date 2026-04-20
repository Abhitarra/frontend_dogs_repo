export const loginUser = async (email, password) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  return data; // ✅ always return
};

export const signupUser = async (email, password) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  return data; // ✅ always return
};

export const forgotPassword = async (email) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}auth/forgot-password`, {
    method: "POST",     
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();

  return data; // ✅ always return
};

export const resetPasswordUser = async (token, password) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}auth/reset-password`, {
    method: "POST",     
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, password }),
  });

  const data = await res.json();
  
  return data; // ✅ always return
};