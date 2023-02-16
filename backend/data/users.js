import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('admin@123', 10),
    isAdmin: true,
  },
  {
    name: 'User',
    email: 'user@gmail.com',
    password: bcrypt.hashSync('user@123', 10),
  },
  {
    name: 'Dummy',
    email: 'dummy@gmail.com',
    password: bcrypt.hashSync('dummy@123', 10),
  },
];

export default users;
