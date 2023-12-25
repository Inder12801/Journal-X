import jwt from "jsonwebtoken";

export const generateJwtToken = (email) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};
