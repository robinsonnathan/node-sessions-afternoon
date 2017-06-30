module.exports = (req, res, next) => {
  if (!req.session.user){
    res.session.user = {
      username: '',
      cart: [],
      total: 0
      }
  }
  next();
}
