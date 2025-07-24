import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define('User', {
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: 'user' },
  photo: { type: DataTypes.STRING, defaultValue: '' },
  adminCode: { type: DataTypes.STRING, allowNull: true }, // новое поле
}, { timestamps: true });



export default User;