import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Miranda',
      email: 'maria@gmail.com',
      idade: 33,
      peso: 57,
      altura: 1.60,
    });

    if (!novoAluno) {
      return res.json({ error: true, message: 'Ocorreu um erro ao cadastrar o aluno!' });
    }

    return res.json(novoAluno);
  }
}

export default new HomeController();
