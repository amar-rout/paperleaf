import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('admin@123', 10),
    gender:"Male",
    phone:"1545658954",
    lname:"admin",
    fname:"admin",
    isAdmin: true,
  },
  {
    name: 'User',
    email: 'user@gmail.com',
    password: bcrypt.hashSync('user@123', 10),
    gender:"Male",
    phone:"1545658956",
    lname:"admin",
    fname:"admin",
  },
  {
    name: 'Dummy',
    email: 'dummy@gmail.com',
    password: bcrypt.hashSync('dummy@123', 10),
    gender:"Male",
    phone:"1545658957",
    lname:"admin",
    fname:"admin",
  },
];

export default users;
