import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    fname: { type: String, required: true },
    mname: { type: String, required: false },
    lname: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: false },
    password: { type: String, required: true },
    address: [
      {
        addrType: {
          type: String,
          required: true,
          default: "Home",
          enum: ["Home", "Office", "Other"]
        },
        addrName: { type: String, required: true },
        addrLineOne: { type: String, required: true },
        addrLineTwo: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        pincode: { type: String, required: true },
        phone: { type: String, required: false },
        isDeliveryAddr: { type: Boolean, required: true, default: false }
      }
    ],
    status: {
      type: String,
      required: false,
      enum: ["active", "deactive"]
    },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
