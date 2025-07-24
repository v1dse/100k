import 'dotenv/config';
import bcrypt from 'bcryptjs';
import User from './models/User.js';
import sequelize from './config/db.js';

const createAdmin = async () => {
  await sequelize.sync();

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
  const adminUsername = process.env.ADMIN_USERNAME || 'admin';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

  const existing = await User.findOne({ where: { email: adminEmail } });
  if (existing) {
    console.log('Админ уже существует');
    process.exit(0);
  }

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await User.create({
    email: adminEmail,
    username: adminUsername,
    password: hashedPassword,
    role: 'admin'
  });

  console.log('Админ создан!');
  process.exit(0);
};

createAdmin();