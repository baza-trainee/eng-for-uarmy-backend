const { Admin } = require('../models/admin');
const HttpError = require("../helpers/HttpError");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const signup = async (req, res) => { 
  const { email, password } = req.body;
    
  const admin = await Admin.findOne({ email });
    console.log(admin);
  if (admin) {
    throw new HttpError(409, "Email in use");
  };

  const newAdmin = await Admin.create({
    email,
    password,
  });
console.log(newAdmin);
  res.status(201).json({ admin: newAdmin});
};

const login = async (req, res) => { 
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin || !await bcrypt.compare(password, admin.password)) {
    throw new HttpError(401, "Email or password is wrong");
  }

  const payload = {
    _id: admin._id,
    email: admin.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h' });
  const adminWithToken = await Admin.findByIdAndUpdate(admin._id, { token }, { new: true })
    .select({ password: 0 });
     
  res.status(201).json({ admin: adminWithToken});
};

const logout = async (req, res) => { 
  const { _id } = req.admin;

  await Admin.findByIdAndUpdate(_id, { token: null });

  res.status(204).json();
};

const current = async (req, res) => { 
  const admin = req.admin;

  res.status(200).json({ admin });
};

module.exports = {
  signup,
  login,
  logout,
  current,
}