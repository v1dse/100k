import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { generateRandomCode } from '../utils/codeGenerator.js'; 
import dotenv from 'dotenv';

dotenv.config();

export const register = async (req, res) => {
  try {
    const { email, password, username, adminCode } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const SECRET_ADMIN_CODE = process.env.ADMIN_CODE || 'supersecret123';

    let role = 'user';
    if (adminCode && adminCode === SECRET_ADMIN_CODE) {
      role = 'admin';
    }

    const newUser = await User.create({ email, password: hashedPassword, username, role, adminCode });

    res.status(201).json({
      message: 'User created successfully',
      user: { id: newUser.id, email: newUser.email, username: newUser.username, role: newUser.role }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
const referralCode = generateRandomCode(); 

const user = await User.create({
  username,
  email,
  password: hashedPassword,
  referralCode,
  referredBy: req.body.referredBy || null,
});

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({
      token,
      user: { id: user.id, email: user.email, username: user.username, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};