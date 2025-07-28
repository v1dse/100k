const user = await User.findByPk(req.user.id);

if (user.referredBy) {
  const referrer = await User.findOne({ where: { referralCode: user.referredBy } });

  if (referrer) {
    referrer.balance += 200;
    await referrer.save();
  }
}