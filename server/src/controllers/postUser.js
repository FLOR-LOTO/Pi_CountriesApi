const postUserHandler = require("../handlers/postUserHandler");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await postUserHandler({ email, password });
    res.status(200).json("Usuario Creado" && user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;