export const checkValidData = (email,password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
      password
    );

  if (!isEmailValid) return "email ID not Valid";
  if (!isPassValid) return "Password not Valid";

  return null;
};
