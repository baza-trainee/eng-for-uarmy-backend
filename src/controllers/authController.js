const { Admin } = require('../models/admin');
const HttpError = require('../helpers/HttpError');
const sendEmail = require('../helpers/sendEmail');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const signup = async (req, res) => { 
  const { email, password } = req.body;
    
  const admin = await Admin.findOne({ email });
    
  if (admin) {
    throw new HttpError(409, "Email in use");
  };

  const newAdmin = await Admin.create({
    email,
    password,
  });

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

const ressetPassword = async (req, res) => { 
  const { email } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) {
    throw new HttpError(401, "Email is wrong");
  };

  const newPassword = uuidv4();

  sendEmail({
    to: email,
    subject: 'Your new password for Eng for UArmy',
    html: `
      <p>Пароль: ${newPassword}</p>
    `,
  });

  res.status(201).json({ message: 'Email sent success' });
  
  await Admin.findByIdAndUpdate(admin._id, { password: newPassword});
};

module.exports = {
  signup,
  login,
  logout,
  current,
  ressetPassword,
};