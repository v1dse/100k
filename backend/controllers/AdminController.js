import ExcelJS from 'exceljs';
import Transaction from '../models/Transaction.js';

export const exportTransactions = async (req, res) => {
  const transactions = await Transaction.findAll();

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Transactions');

  worksheet.columns = [
    { header: 'ID', key: 'id' },
    { header: 'UserID', key: 'userId' },
    { header: 'Amount', key: 'amount' },
    { header: 'Date', key: 'createdAt' },
  ];

  transactions.forEach((t) => worksheet.addRow(t));

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename=transactions.xlsx');

  await workbook.xlsx.write(res);
  res.end();
};