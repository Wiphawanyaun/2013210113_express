const Company = require("../models/company");

exports.index = async (req, res, next) => {
  const company = await Company.find().sort({ _id: -1 });

  res.status(200).json({
    data: company,
  });
};

exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;
    const company = await Company.findOne({
      _id: id,
    });

    if (!company) {
      throw new Error("ไม่พบบริษัท");
    } else {
      res.status(200).json({
        data: company,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + error.message,
      },
    });
  }
};

exports.insert = async (req, res, next) => {
  const {
    name,
    address: { province },
  } = req.body;

  let company = new Company({
    name: name,
    address: {
      province: province,
    },
  });
  await company.save();
  res.status(200).json({
    message: "เพิ่มข้อมูลเรียบร้อยแล้ว",
  });
};

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const company = await Company.deleteOne({
      _id: id,
    });

    if (company.deleteCount === 0) {
      throw new Error("ไม่สามารถลบข้อมูลได้/ไม่พบข้อมูลบริษัท");
    } else {
      res.status(200).json({
        message: "ลบข้อมูลเรียบร้อยแล้ว",
      });
    }
  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + error.message,
      },
    });
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      address: { province },
    } = req.body;

    // const company = await Company.findById(id);
    // company.name = name;
    // company. address.province = province;
    // await company.save();

    const company = await Company.findByIdAndUpdate(id, {
      name: name,
      address: {
        province: province,
      },
    });

    // const company = await Company.updateOne(
    //   { _id: id },
    //   {
    //     name: name,
    //     address: {
    //       province: province,
    //     },
    //   }
    // );

    console.log(company);

    res.status(200).json({
      message: "แก้ไขข้อมูลเรียบร้อยแล้ว",
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + error.message,
      },
    });
  }
};
