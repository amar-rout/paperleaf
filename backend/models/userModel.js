import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
      validate: {
        validator: (value) => {
            return /^[a-zA-Z]{8,30}$/.test(value)
        },
        message: problem => `${problem.value} is not a valid name`
      }
    },
    firstName: {
      type: String,
      trim: true,
      required: [true, "First name is required"],
      validate: {
        validator: (value) => {
            return /^[a-zA-Z]{3,15}$/.test(value)
        },
        message: problem => `${problem.value} is not a valid name`
      }
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "Last name is required"],
      validate: {
        validator: (value) => {
            return /^[a-zA-Z]{3,15}$/.test(value)
        },
        message: problem => `${problem.value} is not a valid name`
      }
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
      validate: {
        validator: (value) => {
          return /^([\w-.]{3,})+@([\w-.]{3,15})+.([a-zA-Z]{2,3})$/.test(value)
        },
          message: problem => `${problem.value} is not valid`
      }
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phone: {
      type: Number,
      required: [true, "Phone is required"],
      unique: true,
      validate: {
        validator: (value) => {
            if (typeof value === 'null' || 'undefined' || ' ') {
                let value = 7043096106
                return /^(\d{10})$/.test(value)
            } else {
                return /^(\d{10})$/.test(value)
            }
        },
        message: problem => `${problem.value} is not valid phone number`
      }
    },
    gender: { type:String, required: true, enum:["M", "F", "O"]},
    address: [
        {
          addressType: { type:String, required:true, enum:["Home", "Office", "Other"]},
          availability:{ type:String, required: true},
          name: { type: String, required: true, unique:true },
          isDefault: { type: Boolean, required: true, default: false },
          phone:{ type: String, required: true },
          addressLine1: { type: String, required: true },
          addressLine2: { type: String, required: false },
          landmark: { type: String, required: true },
          city: { type: String, required: true },
          dist: { type: String, required: true },
          state:{ type: String, required: true },
          postalCode:{ type: String, required: true },
          country: { type: String, required: true }
        }
    ],
    isEmailVerified:{ type: Boolean, required: true, default: false },
    isPhoneVerified:{ type: Boolean, required: true, default: false },
    isActive:{ type: Boolean, required: true, default: true },
    isDeleted:{ type: Boolean, required: true, default: false },
    isAdmin: { type: Boolean, required: true, default: false },
    role: {
      type: String,
      trim: true,
      enum: ["user", "admin"],
      default: "user"
    }
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
