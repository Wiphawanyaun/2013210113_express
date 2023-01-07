const Shop = require("../models/shop");

const Menu = require("../models/menu");

const config = require ('../config/index')

exports.index = async (req, res, next) => {
  const shops = await Shop.find()
    .select("name photo location")
    .sort({ _id: -1 });

  const shopWithPhotoDomain = shops.map((shop, index) => {
    return {
      id: shop._id,
      name: shop.name,
      photo: config.DOMAIN +"/images/" + shop.photo,
      loaction: shop.location,
    };
  });

  res.status(200).json({
    data: shopWithPhotoDomain,
  });
};

exports.menu = async (req, res, next) => {
  // const menu = await Menu.find()
  // .select('+name -price')
  // .sort({ _id: -1 });

  // const menu = await Menu.find()
  // .where('price').gt(200)

  const menu = await Menu.find().populate("shop");

  res.status(200).json({
    data: menu,
  });
};

exports.show = async (req, res, next) => {
  const { id } = req.params;
  const shop = await Shop.findById({
    _id: id,
  }).populate("menu");

  res.status(200).json({
    data: shop,
  });
};
