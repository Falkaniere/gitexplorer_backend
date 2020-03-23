import Repos from '../models/Repos';

class ReposController {
  async store(req, res) {
    const reposExists = await Repos.findOne({
      where: { name: req.body.name },
    });

    if (reposExists) {
      return res.status(400).json({ message: 'Repositorio já cadastrado' });
    }

    const { name } = await Repos.create(req.body);

    return res.json({
      name,
    });
  }
}

export default new ReposController();
