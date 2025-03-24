const  DbService = require('../databases/dbusers.js');
const AuthService = require('../services/authServices.js');
const dbService = new DbService();

module.exports = {

  /**
   * Get All data
   * @param {*} req
   * @param {*} res
   * */

  postLogin: async (req, res) => {
    let { password, email } = req.body;
    try {
        const user = await dbService.findUser(email, password);
        if (!user) {
          return res.status(401).json({ message: "Credenciales inválidas" });
        }
        // Generar token usando AuthService
        const token = AuthService.generateToken(user);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  },
  post: async (req, res) => {
      try {
        const { name, email, password } = req.body;
        const newUser = await dbService.saveUser({ name, email, password });
        // Generar JWT para el usuario registrado
        const token = AuthService.generateToken(newUser.user);

        res.status(201).json({ user: newUser.user, token });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
}
