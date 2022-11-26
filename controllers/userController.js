exports.index = (req, res, next) => {
  res.status(200).json({
    fullname: "Wiphawan Piapramong",
  });
};

exports.bio = (req, res, next) => {
  res.status(200).json({
    fullname: "Wiphawan Piapramong",
    nickname: "Yaun",
    hobby: "playing game",
    gitusername: "Wiphawanyaun",
  });
};
