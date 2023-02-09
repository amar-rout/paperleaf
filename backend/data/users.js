import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    firstName: 'Amar',
    lastName: 'rout',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('admin@123', 10),
    phone:7043096106,
    gender:"M",
    address:[
      {
        addressType: "Home",
        availability:"6:00 AM to 9:00 PM",
        name: "Snow House",
        isDefault: true,
        phone: "7043096106",
        addressLine1: "Plot no: 1502, Snow House, CDA Sector 6",
        addressLine2: "",
        landmark: "Near DAV Public School",
        city: "Cuttack",
        dist: "Cuttack",
        state: "Odisha",
        postalCode: "753014",
        country: "India"
      },
      {
        addressType: "Office",
        availability:"9:00 AM to 5:00 PM",
        name: "Infosys Office",
        isDefault: true,
        phone: "7043096106",
        addressLine1: "Infocity, Patia",
        addressLine2: "",
        landmark: "Infocity Main Gate",
        city: "Bhubaneswar",
        dist: "Khorda",
        state: "Odisha",
        postalCode: "751024",
        country: "India"
      }
    ],
    isEmailVerified: false,
    isPhoneVerified: false,
    isActive: true,
    isDeleted: false,
    isAdmin: true,
    role: "user"
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
