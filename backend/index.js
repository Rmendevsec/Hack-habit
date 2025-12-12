const express = require("express");
const sequelize = require("./db.config");
const User = require("./models/user");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

// Sync models
sequelize.sync({ alter: true }).then(() => {
  console.log(" All models synced.");
});

app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
