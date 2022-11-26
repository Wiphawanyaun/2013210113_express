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

const data = [
  {
    id: 1,
    name: "Studio Ghibli",
    address: {
      province: "Japan",
      postcode: "880-8501",
    },
  },
  {
    id: 2,
    name: "Capcom",
    address: {
      province: "Japan",
      postcode: "540-0037",
    },
  },
  {
    id: 3,
    name: "Square Enix",
    address: {
      province: "Japan",
      postcode: "160-8430",
    },
  },
];

exports.company = (req, res, next) => {
  res.status(200).json({
    data: data,
  });
};
