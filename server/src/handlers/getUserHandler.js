const { User } = require('../db')

const getUserHandler = async (email, password) => {
    // Utiliza email y password en la consulta
    const users = await User.findAll({ where: { email: email, password: password } });
    return users;
};


module.exports = getUserHandler;