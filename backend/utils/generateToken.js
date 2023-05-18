import jwt from 'jsonwebtoken';

// export function generateTokenResetPassword(id) {
//   return jwt.sign({ id }, process.env.JWT_TOKEN, { expiresIn: '10m' });
// }

export default function generateToken(id, resetToken) {
  if (resetToken === undefined || resetToken === null || resetToken === "") {
    return jwt.sign({ id }, process.env.JWT_TOKEN, { expiresIn: '1d' }); 
  } else {
    return jwt.sign({ id }, process.env.JWT_TOKEN, { expiresIn: '10m' }); 
  }
}