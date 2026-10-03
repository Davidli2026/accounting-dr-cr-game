// 题库与游戏逻辑分离：需要增删科目时编辑本文件即可。
// change: increase（增加）或 decrease（减少）；answer: DR 或 CR。
// 每个科目均有增加和减少两种题型，每轮随机抽取 20 题。
const accountTypes = [
  ['Motor vehicle(Cost)', 'asset'],
  ['Property(Cost)', 'asset'],
  ['Land (cost)', 'asset'],
  ['Fixtures and fittings (Cost)', 'asset'],
  ['Computer (Cost)', 'asset'],
  ['Inventory (Closing)', 'asset'],
  ['Trade receivables', 'asset'],
  ['Other receivables', 'asset'],
  ['Cash', 'asset'],
  ['Bank', 'asset'],
  ['Bank loan', 'liability'],
  ['Bank overdraft', 'liability'],
  ['Trade payables', 'liability'],
  ['Other payables', 'liability'],
  ['Provision for legal claim', 'liability'],
  ['Drawings (Cash)', 'drawings'],
  ['Drawings (Inventory)', 'drawings'],
  ['Capital', 'equity'],
  ['Credit sales', 'revenue'],
  ['Cash sales', 'revenue'],
  ['Rent receivable', 'revenue'],
  ['Commission received', 'revenue'],
  ['Interest received', 'revenue'],
  ['Purchases', 'expense'],
  ['Power and water', 'expense'],
  ['Wages and salary', 'expense'],
  ['Rent and Rates', 'expense'],
  ['Rent payable', 'liability'],
  ['Bank loan interest', 'expense'],
  ['Bank charge', 'expense'],
  ['Motor vehicle running expenses', 'expense'],
  ['Delivery vehicle expenses', 'expense'],
  ['General expenses', 'expense'],
  ['Sundry expenses', 'expense'],
  ['Advertising', 'expense'],
  ['Premises running costs', 'expense'],
  ['Selling expenses', 'expense'],
  ['Credit card expenses', 'expense'],
  ['Insurance premium', 'expense'],
  ['Depreciation', 'expense'],
  ['Commission allowed', 'expense'],
  ['Irrecoverable debts', 'expense'],
  ['Bad debts', 'expense'],
  ['Carriage out', 'expense'],
  ['Carriage in', 'expense'],
  ['Administration expenses', 'expense']
];

window.QUESTION_BANK = accountTypes.flatMap(([account, type]) => {
  const normalBalance = ['asset', 'drawings', 'expense'].includes(type) ? 'DR' : 'CR';
  return [
    { account, change: 'increase', answer: normalBalance },
    { account, change: 'decrease', answer: normalBalance === 'DR' ? 'CR' : 'DR' }
  ];
});
