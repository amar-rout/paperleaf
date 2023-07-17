import asyncHandler from 'express-async-handler';
import UserModel from '../models/userModel.js';
import TokenModel from '../models/tokenModel.js';
import generateToken from '../utils/generateToken.js';
import sanitize from '../utils/sanitize.js';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';

// @desc Auth user and get token
// @route POST /api/users/login
// @access Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      fname: user.fname,
      mname: user.mname,
      lname: user.lname,
      name: user.name,
      email: user.email,
      image: user.image,
      dob: user.dob,
      phone: user.phone,
      gender: user.gender,
      address: user.address,
      isAdmin: user.isAdmin,
      token: generateToken(user.id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid password or email');
  }
});

// @desc Get all users
// @route GET /api/users/all
// @access Private
export const getAllUsers = asyncHandler(async (req, res) => {

  const users = await UserModel.find({});
  if (users) {
      res.json(users);
  } else {
      res.status(404);
      throw new Error('Users not found');
  }
});


export const updateUserPassword = asyncHandler(async (req, res) => {
  const { currPassword, newPassword } = req.body;
  if (req.user && req.user !== 'undefined') {
    const user = await UserModel.findById(req.user.id);
    const passwordCompare = await bcrypt.compare(currPassword, user.password);
    if (passwordCompare) {
      user.password = sanitize(newPassword);
      const updateUser = await user.save();
      const updatedUser = {
        _id: updateUser._id,
        fname: updateUser.fname,
        mname: updateUser.mname,
        lname: updateUser.lname,
        name: updateUser.name,
        email: updateUser.email,
        image: updateUser.image,
        phone: updateUser.phone,
        dob: updateUser.dob,
        gender: updateUser.gender,
        address: updateUser.address,
        isAdmin: updateUser.isAdmin,
        token: generateToken(user.id),
      };
      res.status(201).json(updatedUser);
    } else {
      res.status(401);
      throw new Error('Invalid password');
    }
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});


export const requestPasswordReset = asyncHandler(async (req, res) => {
  // if (req.user && req.user !== 'undefined') {
  let email = req.body.email;
  const user = await UserModel.findOne({ email: email });
  // const user = await UserModel.findById(req.user.id);
  // console.log("User :" + user);
  let token = await TokenModel.findOne({ userId: user._id });

  if (token && token !== null) {
    await token.remove();
  }

  let resetToken = await generateToken(user._id, "resetToken");

  const createdToken = await TokenModel.create({
    userId: user._id,
    token: resetToken,
    createdAt: Date.now()
  });

  // console.log("Created Token :" + createdToken);

  const link = `${process.env.CLIENT_URL}/passwordReset?email=${user.email}&resetToken=${resetToken}`;
  const link2 = `/passwordReset?email=${user.email}&resetToken=${resetToken}`;

  const salutation = `Hi User,<br/><br/>`;
  const linkText = `Please <a href="${link}">click here</a> to reset your password.<br/><br/>`;
  const signature = `Best Regards,<br/><b>PaperLeaf<b/>`;

  const mailBody = salutation + linkText + signature
  // console.log("Mail: " + mailBody);
  // console.log("Mail ID: " + process.env.EMAIL_ID);

  // var transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     auth: {
  //         type: 'OAuth2',
  //         user: EMAIL_ID,
  //         pass: EMAIL_PASSWORD,
  //         clientId: CLIENT_ID,
  //         clientSecret: CLIENT_SECRET,
  //         refreshToken: REFRESH_TOKEN
  //     }
  // });

  // const transporter = nodemailer.createTransport({
  //     host: 'localhost',
  //     port: 1025,
  //     auth: {
  //         user: 'project.1',
  //         pass: 'secret.1'
  //     }
  // });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.APP_PASSWORD
    }
  });

  var mailOptions = {
    from: process.env.EMAIL_ID,
    to: email,
    subject: 'Paperleaf - Password reset link',
    html: mailBody
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (!error) {
      console.log('Email sent: ' + info.response)
      return res.json({
        message: "We have sent an email with link to reset the password",
        status: 200,
        link: link2
      })
    } else {
      // console.log(error);
    }
  });

  // } else {
  //   res.status(404);
  //   throw new Error('User not found');
  // }
});

export const resetPassword = asyncHandler(async (req, res) => {
  const { email, resetToken } = req.query;
  const { newPassword, confPassword } = req.body;

  const user = await UserModel.findOne({ email: email });
  let userToken = await TokenModel.findOne({ userId: user._id });

  if (!user) {
    const err = new Error();
    err.name = "Authentication Error"
    err.status = 401
    err.message = "Invalid or expired password reset token"
    throw err
  }

  const isValid = resetToken === userToken.token;
  if (!isValid) {
    const error = new Error();
    error.name = "Authentication Error";
    error.status = 401;
    error.message = "Invalid or expired password reset token";
    throw error;
  }
  if (newPassword && confPassword && newPassword === confPassword) {
    user.password = sanitize(newPassword);
  }
  // console.log(user);
  const updateUser = await user.save();
  // console.log(updateUser);

  // const updateUser = await UserModel.updateOne(
  //   { _id: user._id },
  //   { $set: { password: sanitize(newPassword) } },
  //   { new: true }
  // )
  if (updateUser) {
    await userToken.deleteOne();
    res.status(201).json({
      message: "Password reset successful.",
    })
  }
});

// @desc Auth user and get token
// @route POST /api/users/login
// @access Public
export const validateToken = asyncHandler(async (req, res) => {
  // const { email, password } = req.body;

  // const user = await UserModel.findOne({ email });
  if (req.user && req.user !== 'undefined') {
    // console.log(req.user);
    const user = await UserModel.findById(req.user.id);
    // console.log(user);
    if (user) {
      res.status(201).json({
        _id: user._id,
        fname: user.fname,
        mname: user.mname,
        lname: user.lname,
        name: user.name,
        image: user.image,
        email: user.email,
        dob: user.dob,
        phone: user.phone,
        gender: user.gender,
        address: user.address,
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
  // console.log(req.body);
  const user = await UserModel.findById(sanitize(req.user.id));
  // console.log(user);
  let error = false;
  if (req.body.phone !== "") {
    let userByPhone = await UserModel.findOne({ phone: sanitize(req.body.phone) });
    // console.log("User By phone: " + userByPhone);
    if (userByPhone) {
      res.status(409);
      throw new Error('Provided phone already in use.');
    }
  }
  if (req.body.email !== "") {
    let userByEmail = await UserModel.findOne({ email: sanitize(req.body.email) });
    // console.log(userByEmail);
    if (userByEmail) {
      res.status(409);
      throw new Error('Provided email already in use.');
    }
  }
  if (user) {
    user.fname = sanitize(req.body.fname) || user.fname;
    user.mname = sanitize(req.body.mname) || user.mname;
    user.lname = sanitize(req.body.lname) || user.lname;
    user.name = sanitize(req.body.name) || user.name;
    user.email = sanitize(req.body.email) || user.email;
    user.phone = sanitize(req.body.phone) || user.phone;
    user.gender = sanitize(req.body.gender) || user.gender;
    user.image = sanitize(req.body.image) || user.image;
    user.dob = req.body.dob ? sanitize(new Date(req.body.dob)) : new Date(user.dob);
    if (req.body.password) {
      user.password = sanitize(req.body.password);
    }
    const updatedUser = await user.save();
    // console.log(updatedUser);
    res.json({
      _id: updatedUser._id,
      fname: updatedUser.fname,
      mname: updatedUser.mname,
      lname: updatedUser.lname,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      gender: updatedUser.gender,
      dob: updatedUser.dob,
      image: updatedUser.image,
      address: updatedUser.address,
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
  const { fname, mname, lname, name, image, email, phone, gender, password } = req.body;

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
    image: sanitize(image),
    email: sanitize(email),
    phone: sanitize(phone),
    // dob: sanitize(new Date(dob)),
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
      image: user.image,
      email: user.email,
      dob: user.dob,
      phone: user.phone,
      gender: user.gender,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

export const addAddress = asyncHandler(async (req, res) => {
  const { addrType, addrName, personName, altPhone, landmark, addrLineOne, addrLineTwo, city, state, country, pincode, isDeliveryAddr } = req.body;
  const user = await UserModel.findById(sanitize(req.user.id));
  if (user) {
    const length = user.address.length;
    if (isDeliveryAddr) {
      // const deliveryIndex = user.address.findIndex((address) => { isDeliveryAddr === true });
      const deliveryIndex = user.address.map((address) => address.isDeliveryAddr).indexOf(true);
      // console.log(deliveryIndex);

      if (deliveryIndex >= 0) {
        user.address[deliveryIndex] = {
          addrType: user.address[deliveryIndex].addrType,
          addrName: user.address[deliveryIndex].addrName,
          personName: user.address[deliveryIndex].personName,
          altPhone: user.address[deliveryIndex].altPhone,
          landmark: user.address[deliveryIndex].landmark,
          addrLineOne: user.address[deliveryIndex].addrLineOne,
          addrLineTwo: user.address[deliveryIndex].addrLineTwo,
          city: user.address[deliveryIndex].city,
          state: user.address[deliveryIndex].state,
          country: user.address[deliveryIndex].country,
          pincode: user.address[deliveryIndex].pincode,
          isDeliveryAddr: sanitize(false),
        };
      }
    }
    user.address[length] = {
      addrType: sanitize(addrType),
      addrName: sanitize(addrName),
      personName: sanitize(personName),
      altPhone: sanitize(altPhone),
      landmark: sanitize(landmark),
      addrLineOne: sanitize(addrLineOne),
      addrLineTwo: sanitize(addrLineTwo),
      city: sanitize(city),
      state: sanitize(state),
      country: sanitize(country),
      pincode: sanitize(pincode),
      isDeliveryAddr: sanitize(isDeliveryAddr),
    };
    // console.log(user);
    const updatedUser = await user.save();
    // console.log(updatedUser);
    res.json({
      _id: updatedUser._id,
      fname: updatedUser.fname,
      mname: updatedUser.mname,
      lname: updatedUser.lname,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      gender: updatedUser.gender,
      dob: updatedUser.dob,
      image: updatedUser.image,
      address: updatedUser.address,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  }
  else {
    res.status(404);
    throw new Error('User not found');
  }
});

export const deleteAddressById = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(sanitize(req.user.id));
  const addressId = req.params.id ? req.params.id : null;
  if (user) {
    var myquery = { _id: user._id };
    // const deleteAddress = await UserModel.findOneAndUpdate(myquery, { $pull: { address: addressId } }, (err, data) => {
    //   if (error) {
    //     res.status(500).json("Error in deleting records");
    //   } else {
    //     res.json({
    //       _id: deleteAddress._id,
    //       fname: deleteAddress.fname,
    //       mname: deleteAddress.mname,
    //       lname: deleteAddress.lname,
    //       name: deleteAddress.name,
    //       email: deleteAddress.email,
    //       phone: deleteAddress.phone,
    //       gender: deleteAddress.gender,
    //       dob: deleteAddress.dob,
    //       image: deleteAddress.image,
    //       address: deleteAddress.address,
    //       isAdmin: deleteAddress.isAdmin,
    //       token: generateToken(deleteAddress._id),
    //     });
    //   }
    // });
    const deleteAddress = await UserModel.findByIdAndUpdate({ "_id" : user._id }, { $pull: { "address" : {"_id" : addressId} } }, { new: false });
    // console.log("Delete addr : " + deleteAddress);
    let addressDeleted = {
      _id: deleteAddress._id,
      fname: deleteAddress.fname,
      mname: deleteAddress.mname,
      lname: deleteAddress.lname,
      name: deleteAddress.name,
      email: deleteAddress.email,
      phone: deleteAddress.phone,
      gender: deleteAddress.gender,
      dob: deleteAddress.dob,
      image: deleteAddress.image,
      address: deleteAddress.address,
      isAdmin: deleteAddress.isAdmin,
      token: generateToken(deleteAddress._id),
    };
    // console.log("address deleted : " + addressDeleted.address);
    res.json(addressDeleted);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export const editAddress = asyncHandler(async (req, res) => {
  const { addrType, addrName, personName, altPhone, landmark, addrLineOne, addrLineTwo, city, state, country, pincode, isDeliveryAddr } = req.body;
  const user = await UserModel.findById(sanitize(req.user.id));
  const addressId = req.params.id ? req.params.id : null;
  if (user) {
    // const length = user.address.length;
    const currentAddressIndex = user.address.map((address) => address._id).indexOf(addressId);
    if (currentAddressIndex >= 0) {
      if (isDeliveryAddr) {
        // const deliveryIndex = user.address.findIndex((address) => { isDeliveryAddr === true });
        const deliveryIndex = user.address.map((address) => address.isDeliveryAddr).indexOf(true);
        // console.log(deliveryIndex);

        if (deliveryIndex >= 0) {
          user.address[deliveryIndex] = {
            addrType: user.address[deliveryIndex].addrType,
            addrName: user.address[deliveryIndex].addrName,
            personName: user.address[deliveryIndex].personName,
            altPhone: user.address[deliveryIndex].altPhone,
            landmark: user.address[deliveryIndex].landmark,
            addrLineOne: user.address[deliveryIndex].addrLineOne,
            addrLineTwo: user.address[deliveryIndex].addrLineTwo,
            city: user.address[deliveryIndex].city,
            state: user.address[deliveryIndex].state,
            country: user.address[deliveryIndex].country,
            pincode: user.address[deliveryIndex].pincode,
            isDeliveryAddr: sanitize(false),
          };
        }
      }
      user.address[currentAddressIndex] = {
        addrType: sanitize(addrType),
        addrName: sanitize(addrName),
        personName: sanitize(personName),
        altPhone: sanitize(altPhone),
        landmark: sanitize(landmark),
        addrLineOne: sanitize(addrLineOne),
        addrLineTwo: sanitize(addrLineTwo),
        city: sanitize(city),
        state: sanitize(state),
        country: sanitize(country),
        pincode: sanitize(pincode),
        isDeliveryAddr: sanitize(isDeliveryAddr),
      };

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
        dob: updatedUser.dob,
        image: updatedUser.image,
        address: updatedUser.address,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),
      });
    } else {
      res.status(404);
      throw new Error('User address not found');
    }

  }
  else {
    res.status(404);
    throw new Error('User not found');
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
