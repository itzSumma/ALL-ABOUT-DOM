/*
 *You are building a personal finance dashboard. You have an array of transaction objects. Each transaction has a description, an amount, and a type ("income" or "expense"). Group these transactions so the user can see their total earnings and total spending separately. 
 */
InPut:const transactions = [
  { description: "Salary", amount: 5000, type: "income" },
  { description: "Grocery", amount: 200, type: "expense" },
  { description: "Freelance Project", amount: 1200, type: "income" },
  { description: "Rent", amount: 1000, type: "expense" },
  { description: "Internet Bill", amount: 50, type: "expense" }
];
//**ANS*/
const transactions = [
  { description: "Salary", amount: 5000, type: "income" },
  { description: "Grocery", amount: 200, type: "expense" },
  { description: "Freelance Project", amount: 1200, type: "income" },
  { description: "Rent", amount: 1000, type: "expense" },
  { description: "Internet Bill", amount: 50, type: "expense" }
];

const groupedTransactions = transactions.reduce((acc, transaction) => {
  const type = transaction.type;

  // Step 1: If the "income" or "expense" key doesn't exist, create it
  if (!acc[type]) {
    acc[type] = [];
  }

  // Step 2: Push the current transaction into the correct array
  acc[type].push(transaction);

  return acc;
}, {});

console.log(groupedTransactions);


/*
 * You are working on an E-commerce admin panel. You have an array of order objects. Each order has an orderId and a createdAt date string. Your task is to group these orders so the admin can see how many orders were placed on each specific date.
 */
Input :const orders = [
  { orderId: "ORD001", createdAt: "2026-05-10" },
  { orderId: "ORD002", createdAt: "2026-05-11" },
  { orderId: "ORD003", createdAt: "2026-05-10" },
  { orderId: "ORD004", createdAt: "2026-05-12" },
  { orderId: "ORD005", createdAt: "2026-05-11" }
];
//**ANS*/
const orders = [
  { orderId: "ORD001", createdAt: "2026-05-10" },
  { orderId: "ORD002", createdAt: "2026-05-11" },
  { orderId: "ORD003", createdAt: "2026-05-10" },
  { orderId: "ORD004", createdAt: "2026-05-12" },
  { orderId: "ORD005", createdAt: "2026-05-11" }
];

const groupedOrders = orders.reduce((acc, order) => {
  const date = order.createdAt;

  if (!acc[date]) {
    acc[date] = [];
  }
  acc[date].push(order);
  return acc;
}, {});

console.log(groupedOrders);


/*
 *You have an array of sales transactions. Each transaction has a category and a revenue amount. Your task is to return an object where each key is a category, and the value is the total sum of revenue for that category. 
 */

 Input:const sales = [
  { category: "Electronics", revenue: 500 },
  { category: "Clothing", revenue: 100 },
  { category: "Electronics", revenue: 300 },
  { category: "Food", revenue: 50 },
  { category: "Clothing", revenue: 200 }
];
//**ANS*/
const sales = [
  { category: "Electronics", revenue: 500 },
  { category: "Clothing", revenue: 100 },
  { category: "Electronics", revenue: 300 },
  { category: "Food", revenue: 50 },
  { category: "Clothing", revenue: 200 }
];

const totalRevenueByCategory = sales.reduce((acc, sale) => {
  const category = sale.category;

  // 1. If the category is not in our object yet, set it to 0
  if (!acc[category]) {
    acc[category] = 0;
  }

  // 2. Add the current revenue to that category's total
  acc[category] += sale.revenue;

  return acc;
}, {});

console.log(totalRevenueByCategory);