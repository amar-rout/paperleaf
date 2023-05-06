import asyncHandler from 'express-async-handler';
import UserModel from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
import sanitize from '../utils/sanitize.js';

// @desc Auth user and get token
// @route POST /api/users/login
// @access Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      isAdmin: user.isAdmin,
      token: generateToken(user.id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid password or email');
  }
});


// @desc Auth user and get token
// @route POST /api/users/login
// @access Public
export const validateToken = asyncHandler(async (req, res) => {
  // const { email, password } = req.body;

  // const user = await UserModel.findOne({ email });
  if (req.user && req.user !== 'undefined') {
    console.log(req.user);
    const user = await UserModel.findById(req.user.id);
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        isAdmin: user.isAdmin,
        token: generateToken(user.id),
      });
      // res.send('Token validation successful');
    } else {
      res.status(401);
      throw new Error('Invalid token');
    }
  }
});


// @desc Update user profile
// @route PATCH /api/users/profile
// @access Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(sanitize(req.body._id));
  if (user) {
    user.fname = sanitize(req.body.fname) || user.fname;
    user.mname = sanitize(req.body.mname) || user.mname;
    user.lname = sanitize(req.body.lname) || user.lname;
    user.name = sanitize(req.body.name) || user.name;
    user.email = sanitize(req.body.email) || user.email;
    user.phone = sanitize(req.body.phone) || user.phone;
    user.gender = sanitize(req.body.gender) || user.gender;
    if (req.body.password) {
      user.password = sanitize(req.body.password);
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      fname: updatedUser.fname,
      mname: updatedUser.mname,
      lname: updatedUser.lname,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      gender: updatedUser.gender,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc Register a new user
// @route POST /api/users
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { fname, mname, lname, name, email, phone, gender, password } = req.body;

  const userExists = await UserModel.findOne({ email: sanitize(email) });
  if (userExists) {
    res.status(400);
    throw new Error('User already registered');
  }
  const user = await UserModel.create({
    fname: sanitize(fname),
    mname: sanitize(mname),
    lname: sanitize(lname),
    name: sanitize(name),
    email: sanitize(email),
    phone: sanitize(phone),
    gender: sanitize(gender),
    password: sanitize(password),
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      fname: user.fname,
      mname: user.mname,
      lname: user.lname,
      name: user.name,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc Gets all users profile
// @route GET /api/users/(:id)
// @access Private
export const getUsersAdmin = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber);
  const sId = req.params.id ? req.params.id : null;
  if (!sId) {
    const count = await UserModel.countDocuments(sId);
    const users = await UserModel.find(sId)
      .select('-password')
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    res.json({ users, page, pages: Math.ceil(count / pageSize) });
  } else {
    const user = await UserModel.findById(sId).select('-password');
    if (user) {
      res.json({ user });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  }
});
