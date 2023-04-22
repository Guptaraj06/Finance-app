import mongoose from 'mongoose';
import { loadType } from 'mongoose-currency';

loadType(mongoose);

const daySchema = new mongoose.Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);
const month = new mongoose.Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    operationalExpenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);
const KPISchema = new mongoose.Schema(
  {
    totalProfit: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    totalRevenue: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    totalExpenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Currency,
        currency: 'USD',
        get: (v) => v / 100,
      },
    },
    monthlyData: [month],
    dailyData: [daySchema],
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

const KPI = mongoose.model('KPI', KPISchema);

export default KPI;
