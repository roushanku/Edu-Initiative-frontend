const register = async (userData: any) => {
    try {
      const response = await fetch("http://localhost:3002/v1/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password,
            phoneNumber: userData.phoneNumber,
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
  
  export default register;
  