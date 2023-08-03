export const loginController = (req, res) => {
  res.send("Login successful");
  try {
  } catch (error) {
    res.status(500).json({ response: error?.message });
  }
};
