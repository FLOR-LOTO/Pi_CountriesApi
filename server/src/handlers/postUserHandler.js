const { User } = require("../db");

const postUserHandler = async ({ email, password }) => {
  if (!email || !password)
    throw new Error("Faltan datos");

  const [user, created] = await User.findOrCreate({
    where: { email: email },
    defaults: { password: password },
  });

  if (!created) throw new Error("Este email ya esta registrado");

  return user;
};

module.exports = postUserHandler;