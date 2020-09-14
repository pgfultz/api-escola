class HomeController {
  index(req, res) {
    res.json({ message: 'Olá mundo!' });
  }
}

export default new HomeController();
