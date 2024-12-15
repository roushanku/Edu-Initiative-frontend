const login = async (userData: any) => {
  try {
    const response = await fetch("http://localhost:3002/v1/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    });
    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const data = await response.json();
    return data;
  } catch (err: any) {
    return { status: false, message: err.message };
  }
};

export default login;
