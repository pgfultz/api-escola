import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['Erro ao consultar usuário'] });
      }

      const users = await User.findByPk(id);
      return res.json(users);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;

      if (!id) {
        return res.status(400).json({ errors: ['Erro ao consultar usuário'] });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({ errors: ['Usuário não existe'] });
      }

      const newUser = await user.update({
        nome,
        email,
      });

      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['Erro ao consultar usuário'] });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({ errors: ['Usuário não existe'] });
      }

      await user.destroy();

      return res.json(user);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
