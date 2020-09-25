import moment from "moment";

const clients = {
  1: {
    id: 1,
    name: "Blaise Bakundukize",
    account: "123456",
    avatarURL: "",
  },
  2: {
    id: 2,
    name: "Blaise Bakundukize",
    account: "123048",
    avatarURL: "",
  },
  3: {
    id: 3,
    name: "Blaise Bakundukize",
    account: "123987",
    avatarURL: "",
  },
  4: {
    id: 4,
    name: "Blaise Bakundukize",
    account: "123908",
    avatarURL: "",
  },
  5: {
    id: 5,
    name: "Blaise Bakundukize",
    account: "123886",
    avatarURL: "",
  },
};

const accounts = {
  123456: {
    account: "123456",
    balance: "$200",
    client: 5,
  },
  123048: {
    account: "123048",
    balance: "$200",
    client: 5,
  },
  123987: {
    account: "123987",
    balance: "$200",
    client: 5,
  },
  123908: {
    account: "123908",
    balance: "$200",
    client: 5,
  },
  123886: {
    account: "123886",
    balance: "$200",
    client: 5,
  },
};

const recentTransactions = {
  transfers: [
    {
      id: 1,
      accountFrom: "123048",
      accountTo: "123456",
      amount: "$30",
      time: moment().format("lll"),
    },
    {
      id: 2,
      accountFrom: "123886",
      accountTo: "123987",
      amount: "$40",
      time: moment().format("lll"),
    },
    {
      id: 3,
      accountFrom: "123048",
      accountTo: "123886",
      amount: "$100",
      time: moment().format("lll"),
    },
    {
      id: 4,
      accountFrom: "123908",
      accountTo: "123987",
      amount: "$10",
      time: moment().format("lll"),
    },
    {
      id: 5,
      accountFrom: "123456",
      accountTo: "123987",
      amount: "$200",
      time: moment().format("lll"),
    },
  ],
  withdrawsAndDeposits: [
    {
      id: 1,
      account: "123048",
      description: "Withdraw",
      amount: "$30",
      time: moment().format("lll"),
    },
    {
      id: 2,
      account: "123886",
      description: "Deposit",
      amount: "$40",
      time: moment().format("lll"),
    },
    {
      id: 3,
      account: "123048",
      description: "Withdraw",
      amount: "$100",
      time: moment().format("lll"),
    },
    {
      id: 4,
      account: "123908",
      description: "Withdraw",
      amount: "$10",
      time: moment().format("lll"),
    },
    {
      id: 5,
      account: "123456",
      description: "Deposit",
      amount: "$200",
      time: moment().format("lll"),
    },
  ],
};

const clientMovements = {
  today: {
    today: 450,
    last: 800,
  },
  month: {
    thisMonth: "4k",
    last: "6k",
  },
  new: {
    clients: 23,
    last: 45,
  },
  totalClients: "100k",
};

const dailyTransactionsSummary = {
  transactions: {
    today: 2000,
    last: 3150,
  },
  hourly: {
    "00-06am": 135,
    "06-12am": 850,
    "12-18pm": 920,
    "18-00pm": 95,
  },
  types: {
    payments: 450,
    withdraws: 200,
    transfers: 1250,
    deposits: 100,
  },
};

export function _getClients() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...clients }), 1000);
  });
}

export function _getAccounts() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...accounts }), 1000);
  });
}

export function _getRecentTransactions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...recentTransactions }), 500);
  });
}

export function _getClientMovements() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...clientMovements }), 500);
  });
}

export function _getDailyTransactionsSummary() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...dailyTransactionsSummary }), 500);
  });
}
