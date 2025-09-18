import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, PieChart, BarChart3, Target, AlertCircle, CheckCircle, Clock, ArrowRight, Plus, Minus, RefreshCw, Eye, EyeOff, Info } from 'lucide-react';

const Investment = () => {
  // Mock user data - in real app, this would come from API/context
  const [user] = useState({
    name: "Priya Sharma",
    totalSpareChange: 8450,
    investmentAllocation: 40, // 40% of spare change goes to investment
    riskProfile: "moderate" // conservative, moderate, aggressive
  });

  const [portfolio, setPortfolio] = useState({
    totalValue: 25680,
    totalInvested: 22400,
    totalReturns: 3280,
    returnPercentage: 14.64,
    lastUpdated: new Date()
  });

  const [investments] = useState([
    {
      id: 1,
      name: "Nifty 50 Index Fund",
      type: "Index Fund",
      currentValue: 12340,
      invested: 10500,
      returns: 1840,
      returnPercent: 17.52,
      allocation: 48,
      risk: "Low",
      category: "Equity"
    },
    {
      id: 2,
      name: "Diversified Equity Fund",
      type: "Mutual Fund",
      currentValue: 8960,
      invested: 8200,
      returns: 760,
      returnPercent: 9.27,
      allocation: 35,
      risk: "Medium",
      category: "Equity"
    },
    {
      id: 3,
      name: "Corporate Bond Fund",
      type: "Debt Fund",
      currentValue: 4380,
      invested: 3700,
      returns: 680,
      returnPercent: 18.38,
      allocation: 17,
      risk: "Low",
      category: "Debt"
    }
  ]);

  const [recommendedFunds] = useState([
    {
      id: 4,
      name: "Technology Sector ETF",
      type: "Sector ETF",
      minInvestment: 100,
      expectedReturn: "12-15%",
      risk: "Medium",
      category: "Equity",
      reason: "Based on your transaction patterns at tech stores"
    },
    {
      id: 5,
      name: "Gold ETF",
      type: "Commodity ETF", 
      minInvestment: 500,
      expectedReturn: "8-12%",
      risk: "Low",
      category: "Commodity",
      reason: "Good for portfolio diversification"
    }
  ]);

  const [transactions] = useState([
    {
      id: 1,
      date: "2025-01-15",
      type: "Investment",
      fund: "Nifty 50 Index Fund",
      amount: 890,
      source: "Spare Change Pool"
    },
    {
      id: 2,
      date: "2025-01-10",
      type: "Investment",
      fund: "Corporate Bond Fund",
      amount: 450,
      source: "Spare Change Pool"
    },
    {
      id: 3,
      date: "2025-01-05",
      type: "Dividend",
      fund: "Diversified Equity Fund",
      amount: 120,
      source: "Dividend Credit"
    }
  ]);

  const [activeTab, setActiveTab] = useState('overview');
  const [showBalance, setShowBalance] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setPortfolio(prev => ({
        ...prev,
        lastUpdated: new Date()
      }));
      setRefreshing(false);
    }, 1000);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getRiskColor = (risk) => {
    switch(risk?.toLowerCase()) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Portfolio Value</h3>
            <button onClick={() => setShowBalance(!showBalance)}>
              {showBalance ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {showBalance ? formatCurrency(portfolio.totalValue) : '••••••'}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Total Invested</h3>
          <p className="text-2xl font-bold text-gray-900">
            {showBalance ? formatCurrency(portfolio.totalInvested) : '••••••'}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Total Returns</h3>
          <p className="text-2xl font-bold text-green-600 flex items-center">
            {showBalance ? formatCurrency(portfolio.totalReturns) : '••••••'}
            <TrendingUp size={20} className="ml-2" />
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Return %</h3>
          <p className="text-2xl font-bold text-green-600">
            {showBalance ? `+${portfolio.returnPercentage}%` : '••••'}
          </p>
        </div>
      </div>

      {/* Spare Change Investment Allocation */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Spare Change Investment</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <RefreshCw size={16} className={refreshing ? 'animate-spin' : ''} />
            <span>Last updated: {portfolio.lastUpdated.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Available Spare Change</p>
            <p className="text-xl font-bold text-blue-600">{formatCurrency(user.totalSpareChange)}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Investment Allocation</p>
            <p className="text-xl font-bold text-indigo-600">{user.investmentAllocation}%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Auto-Investment Amount</p>
            <p className="text-xl font-bold text-green-600">{formatCurrency(user.totalSpareChange * user.investmentAllocation / 100)}</p>
          </div>
        </div>
      </div>

      {/* Current Holdings */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Your Holdings</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {investments.map((investment) => (
              <div key={investment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium text-gray-900">{investment.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(investment.risk)}`}>
                      {investment.risk} Risk
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{investment.type} • {investment.allocation}% of portfolio</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{formatCurrency(investment.currentValue)}</p>
                  <p className={`text-sm flex items-center justify-end ${investment.returns >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {investment.returns >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    <span className="ml-1">+{investment.returnPercent}%</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const RecommendationsTab = () => (
    <div className="space-y-6">
      {/* Risk Profile */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Investment Profile</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Target size={32} className="mx-auto mb-2 text-blue-600" />
            <h4 className="font-medium text-gray-900">Risk Tolerance</h4>
            <p className="text-sm text-gray-600 capitalize">{user.riskProfile}</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <BarChart3 size={32} className="mx-auto mb-2 text-green-600" />
            <h4 className="font-medium text-gray-900">Investment Style</h4>
            <p className="text-sm text-gray-600">Growth Focused</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Clock size={32} className="mx-auto mb-2 text-purple-600" />
            <h4 className="font-medium text-gray-900">Time Horizon</h4>
            <p className="text-sm text-gray-600">Long Term (5+ years)</p>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900">AI-Powered Recommendations</h3>
            <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Smart</div>
          </div>
          <p className="text-sm text-gray-600 mt-1">Based on your spending patterns and investment goals</p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recommendedFunds.map((fund) => (
              <div key={fund.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{fund.name}</h4>
                    <p className="text-sm text-gray-600">{fund.type}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(fund.risk)}`}>
                    {fund.risk} Risk
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500">Min Investment</p>
                    <p className="font-medium">{formatCurrency(fund.minInvestment)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Expected Return</p>
                    <p className="font-medium text-green-600">{fund.expectedReturn}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Info size={14} className="text-blue-500" />
                  <p className="text-sm text-blue-600">{fund.reason}</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Plus size={16} />
                  Add to Portfolio
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const TransactionsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Investment Transactions</h3>
          <p className="text-sm text-gray-600">All your investment activity from spare change</p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'Investment' ? 'bg-blue-100' : 
                    transaction.type === 'Dividend' ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    {transaction.type === 'Investment' ? <TrendingUp size={20} className="text-blue-600" /> :
                     transaction.type === 'Dividend' ? <DollarSign size={20} className="text-green-600" /> :
                     <ArrowRight size={20} className="text-gray-600" />}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{transaction.fund}</h4>
                    <p className="text-sm text-gray-600">{transaction.source} • {formatDate(transaction.date)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.type === 'Dividend' ? 'text-green-600' : 'text-gray-900'
                  }`}>
                    {transaction.type === 'Dividend' ? '+' : ''}{formatCurrency(transaction.amount)}
                  </p>
                  <p className="text-sm text-gray-600 capitalize">{transaction.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="investment-dashboard-container">
      {/* Inline styles for this component */}
      <style>{`
        /* Custom CSS Variables (consistent with your project's theme) */
        :root {
            --primary: #667eea; /* Blue */
            --primary-dark: #5a67d8;
            --secondary: #764ba2; /* Purple */
            --accent: #f093fb; /* Pink */
            --success: #48bb78; /* Green */
            --warning: #ed8936; /* Orange */
            --info: #4299e1; /* Light Blue */
            --danger: #e53e3e; /* Red */
            --dark: #1a202c; /* Dark text */
            --light: #f7fafc; /* Light background */

            /* Gradients from your project idea */
            --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --gradient-accent: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            --gradient-success: linear-gradient(135deg, #48bb78 0%, #38a169 100%);

            /* Specific gradients for the investment page banner (from image) */
            --gradient-investment-banner: linear-gradient(135deg, #48bb78 0%, #4299e1 100%); /* Green to Blue */
        }

        /* Base styles for the Investment component container */
        .investment-dashboard-container {
            min-height: 100vh;
            background-color: var(--light); /* Light background for the page */
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: var(--dark);
        }

        /* Utility-like classes (explicitly defined for inline CSS) */
        .space-y-6 > * + * {
            margin-top: 1.5rem; /* Equivalent to Tailwind's space-y-6 */
        }
        .grid {
            display: grid;
        }
        .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        .md\\:grid-cols-2 {
            @media (min-width: 768px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        .lg\\:grid-cols-4 {
            @media (min-width: 1024px) {
                grid-template-columns: repeat(4, minmax(0, 1fr));
            }
        }
        .gap-4 {
            gap: 1rem; /* 16px */
        }
        .flex {
            display: flex;
        }
        .items-center {
            align-items: center;
        }
        .justify-between {
            justify-content: space-between;
        }
        .justify-center {
            justify-content: center;
        }
        .justify-end {
            justify-content: flex-end;
        }
        .text-center {
            text-align: center;
        }
        .text-right {
            text-align: right;
        }
        .flex-1 {
            flex: 1 1 0%;
        }
        .mx-auto {
            margin-left: auto;
            margin-right: auto;
        }
        .mb-1 { margin-bottom: 0.25rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
        .ml-1 { margin-left: 0.25rem; }
        .ml-2 { margin-left: 0.5rem; }
        .mt-05 { margin-top: 0.125rem; } /* For mt-0.5 */
        .mt-1 { margin-top: 0.25rem; }

        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
        .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-full { border-radius: 9999px; }

        /* Colors and Backgrounds */
        .bg-white { background-color: white; }
        .bg-gray-50 { background-color: #f9fafb; }
        .bg-gray-100 { background-color: #f3f4f6; }
        .bg-blue-50 { background-color: #eff6ff; }
        .bg-blue-100 { background-color: #dbeafe; }
        .bg-green-50 { background-color: #f0fdf4; }
        .bg-green-100 { background-color: #dcfce7; }
        .bg-purple-50 { background-color: #f5f3ff; }
        .bg-amber-50 { background-color: #fffbeb; }

        .text-white { color: white; }
        .text-gray-900 { color: #111827; }
        .text-gray-600 { color: #4b5563; }
        .text-gray-500 { color: #6b7280; }
        .text-gray-200 { color: #e5e7eb; }
        .text-blue-600 { color: #2563eb; }
        .text-blue-800 { color: #1e40af; }
        .text-blue-500 { color: #3b82f6; }
        .text-green-600 { color: var(--success); }
        .text-green-100 { color: #dcfce7; }
        .text-yellow-600 { color: #d97706; }
        .text-red-600 { color: var(--danger); }
        .text-amber-600 { color: #d97706; }
        .text-amber-700 { color: #b45309; }
        .text-amber-800 { color: #92400e; }
        .text-indigo-600 { color: #4f46e5; }
        .text-purple-600 { color: #7c3aed; }
        .text-purple-100 { color: #f5f3ff; }

        /* Font Sizes */
        .text-xs { font-size: 0.75rem; }
        .text-sm { font-size: 0.875rem; }
        .text-base { font-size: 1rem; }
        .text-lg { font-size: 1.125rem; }
        .text-xl { font-size: 1.25rem; }
        .text-2xl { font-size: 1.5rem; }

        /* Font Weights */
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .font-bold { font-weight: 700; }

        /* Borders */
        .border { border-width: 1px; border-style: solid; }
        .border-gray-200 { border-color: #e5e7eb; }
        .border-blue-200 { border-color: #bfdbfe; }
        .border-amber-200 { border-color: #fde68a; }
        .hover\\:border-blue-300:hover { border-color: #93c5fd; } /* hover:border-blue-300 */

        /* Transitions */
        .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }

        .capitalize {
            text-transform: capitalize;
        }

        /* Header Section */
        .investment-header {
            background-color: white;
            border-bottom: 1px solid #e2e8f0; /* Light gray border */
            padding: 1.5rem 1.5rem; /* Consistent padding */
        }

        .investment-header-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .investment-header h1 {
            font-size: 1.875rem; /* text-3xl */
            font-weight: 700; /* font-bold */
            color: var(--dark);
        }

        .investment-header p {
            color: #64748b; /* text-gray-600 */
            font-size: 1rem;
        }

        .refresh-button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background-color: var(--primary); /* Blue background */
            color: white;
            padding: 0.75rem 1.25rem;
            border-radius: 0.5rem; /* rounded-lg */
            font-weight: 500; /* font-medium */
            transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(102, 126, 234, 0.2); /* Subtle shadow */
        }

        .refresh-button:hover:not(:disabled) {
            background-color: var(--primary-dark);
            transform: translateY(-1px);
        }

        .refresh-button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .refresh-button .animate-spin {
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        /* Main Content Area */
        .investment-main-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1.5rem; /* py-8 px-6 */
        }

        /* Quick Stats Banner */
        .quick-stats-banner {
            background: var(--gradient-investment-banner); /* Green to Blue gradient */
            color: white;
            padding: 2rem;
            border-radius: 1rem; /* rounded-xl */
            margin-bottom: 2rem; /* mb-8 */
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); /* Soft shadow */
        }

        .quick-stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive grid */
            gap: 1rem; /* gap-4 */
        }

        .quick-stats-grid > div {
            text-align: center;
        }

        .quick-stats-grid p:first-child {
            font-size: 0.875rem; /* text-sm */
            opacity: 0.8; /* Subtle text */
            margin-bottom: 0.25rem;
        }

        .quick-stats-grid p:last-child {
            font-size: 1.5rem; /* text-2xl */
            font-weight: 700; /* font-bold */
        }

        /* Tab Navigation */
        .tab-navigation-container {
            background-color: white;
            border-radius: 1rem; /* rounded-xl */
            border: 1px solid #e2e8f0; /* border-gray-200 */
            margin-bottom: 2rem; /* mb-8 */
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); /* Lighter shadow */
        }

        .tab-navigation-header {
            border-bottom: 1px solid #e2e8f0; /* border-gray-200 */
        }

        .tab-navigation-nav {
            display: flex;
            padding: 0 1.5rem; /* px-6 */
            gap: 2rem; /* space-x-8 */
        }

        .tab-button {
            padding: 1rem 0.5rem; /* py-4 px-2 */
            border-bottom: 2px solid transparent;
            font-weight: 500; /* font-medium */
            font-size: 0.875rem; /* text-sm */
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #64748b; /* text-gray-500 */
            transition: all 0.2s ease-in-out;
            background: none;
            border-top: none;
            border-left: none;
            border-right: none;
            cursor: pointer;
        }

        .tab-button:hover {
            color: #475569; /* hover:text-gray-700 */
            border-color: #cbd5e1; /* hover:border-gray-300 */
        }

        .tab-button.active {
            border-color: #3b82f6; /* border-blue-500 */
            color: #2563eb; /* text-blue-600 */
        }

        .tab-content-padding {
            padding: 1.5rem; /* p-6 */
        }

        /* Overview Tab - Portfolio Summary */
        .portfolio-summary-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid */
            gap: 1rem; /* gap-4 */
        }

        .portfolio-summary-card {
            background-color: white;
            padding: 1.5rem; /* p-6 */
            border-radius: 0.75rem; /* rounded-xl */
            border: 1px solid #e2e8f0; /* border-gray-200 */
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); /* Subtle shadow */
        }

        .portfolio-summary-card h3 {
            font-size: 0.875rem; /* text-sm */
            font-weight: 500; /* font-medium */
            color: #475569; /* text-gray-600 */
            margin-bottom: 0.5rem;
        }

        .portfolio-summary-card p {
            font-size: 1.5rem; /* text-2xl */
            font-weight: 700; /* font-bold */
            color: var(--dark);
        }

        .portfolio-summary-card .text-green-600 {
            color: var(--success);
        }

        .portfolio-summary-card .text-red-600 {
            color: var(--danger);
        }

        .portfolio-summary-card .flex {
            display: flex;
            align-items: center;
        }

        .portfolio-summary-card button {
            background: none;
            border: none;
            cursor: pointer;
            color: #64748b;
        }

        /* Spare Change Investment Allocation */
        .spare-change-allocation {
            background: linear-gradient(to right, #eff6ff 0%, #e0e7ff 100%); /* from-blue-50 to-indigo-50 */
            padding: 1.5rem; /* p-6 */
            border-radius: 0.75rem; /* rounded-xl */
            border: 1px solid #bfdbfe; /* border-blue-200 */
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); /* Subtle shadow */
        }

        .spare-change-allocation-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem; /* mb-4 */
        }

        .spare-change-allocation-header h3 {
            font-size: 1.125rem; /* text-lg */
            font-weight: 600; /* font-semibold */
            color: var(--dark);
        }

        .spare-change-allocation-header span {
            font-size: 0.875rem; /* text-sm */
            color: #64748b; /* text-gray-600 */
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .spare-change-allocation-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem; /* gap-4 */
        }

        .spare-change-allocation-grid > div {
            text-align: center;
        }

        .spare-change-allocation-grid p:first-child {
            font-size: 0.875rem; /* text-sm */
            color: #475569; /* text-gray-600 */
            margin-bottom: 0.25rem;
        }

        .spare-change-allocation-grid p:last-child {
            font-size: 1.25rem; /* text-xl */
            font-weight: 700; /* font-bold */
        }

        .spare-change-allocation-grid .text-blue-600 {
            color: #2563eb;
        }

        .spare-change-allocation-grid .text-indigo-600 {
            color: #4f46e5;
        }

        .spare-change-allocation-grid .text-green-600 {
            color: var(--success);
        }


        /* Current Holdings */
        .current-holdings-card {
            background-color: white;
            border-radius: 1rem; /* rounded-xl */
            border: 1px solid #e2e8f0; /* border-gray-200 */
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); /* Lighter shadow */
        }

        .current-holdings-header {
            padding: 1.5rem; /* p-6 */
            border-bottom: 1px solid #e2e8f0; /* border-gray-200 */
        }

        .current-holdings-header h3 {
            font-size: 1.125rem; /* text-lg */
            font-weight: 600; /* font-semibold */
            color: var(--dark);
        }

        .current-holdings-list {
            padding: 1.5rem; /* p-6 */
        }

        .holding-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem; /* p-4 */
            background-color: #f8fafc; /* bg-gray-50 */
            border-radius: 0.5rem; /* rounded-lg */
            margin-bottom: 1rem; /* space-y-4 for parent */
        }

        .holding-item:last-child {
            margin-bottom: 0;
        }

        .holding-item h4 {
            font-weight: 500; /* font-medium */
            color: var(--dark);
            margin-bottom: 0.25rem;
        }

        .holding-item p {
            font-size: 0.875rem; /* text-sm */
            color: #475569; /* text-gray-600 */
        }

        .holding-item .risk-tag {
            padding: 0.25rem 0.5rem; /* px-2 py-1 */
            border-radius: 9999px; /* rounded-full */
            font-size: 0.75rem; /* text-xs */
            font-weight: 500; /* font-medium */
        }

        .holding-item .text-right p:first-child {
            font-weight: 600; /* font-semibold */
            color: var(--dark);
        }

        .holding-item .text-right p:last-child {
            font-size: 0.875rem; /* text-sm */
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }

        /* Recommendations Tab */
        .investment-profile-card {
            background-color: white;
            padding: 1.5rem; /* p-6 */
            border-radius: 0.75rem; /* rounded-xl */
            border: 1px solid #e2e8f0; /* border-gray-200 */
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .investment-profile-card h3 {
            font-size: 1.125rem; /* text-lg */
            font-weight: 600; /* font-semibold */
            color: var(--dark);
            margin-bottom: 1rem; /* mb-4 */
        }

        .profile-metric-card {
            text-align: center;
            padding: 1rem; /* p-4 */
            border-radius: 0.5rem; /* rounded-lg */
        }

        .profile-metric-card svg {
            margin: 0 auto 0.5rem;
        }

        .profile-metric-card h4 {
            font-weight: 500; /* font-medium */
            color: var(--dark);
        }

        .profile-metric-card p {
            font-size: 0.875rem; /* text-sm */
            color: #475569; /* text-gray-600 */
        }

        .profile-metric-card.bg-blue-50 { background-color: #eff6ff; }
        .profile-metric-card.bg-green-50 { background-color: #f0fdf4; }
        .profile-metric-card.bg-purple-50 { background-color: #f5f3ff; }
        .profile-metric-card .text-blue-600 { color: #2563eb; }
        .profile-metric-card .text-green-600 { color: var(--success); }
        .profile-metric-card .text-purple-600 { color: #7c3aed; }


        /* AI Recommendations List */
        .ai-recommendations-card {
            background-color: white;
            border-radius: 1rem; /* rounded-xl */
            border: 1px solid #e2e8f0; /* border-gray-200 */
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .ai-recommendations-header {
            padding: 1.5rem; /* p-6 */
            border-bottom: 1px solid #e2e8f0;
        }

        .ai-recommendations-header h3 {
            font-size: 1.125rem; /* text-lg */
            font-weight: 600; /* font-semibold */
            color: var(--dark);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .ai-recommendations-header .smart-tag {
            background-color: #bfdbfe; /* bg-blue-100 */
            color: #1e40af; /* text-blue-800 */
            font-size: 0.75rem; /* text-xs */
            padding: 0.25rem 0.5rem;
            border-radius: 9999px; /* rounded-full */
        }

        .ai-recommendations-header p {
            font-size: 0.875rem; /* text-sm */
            color: #64748b;
            margin-top: 0.25rem;
        }

        .recommendation-list {
            padding: 1.5rem; /* p-6 */
        }

        .recommendation-item {
            padding: 1rem; /* p-4 */
            border: 1px solid #e2e8f0; /* border-gray-200 */
            border-radius: 0.5rem; /* rounded-lg */
            transition: border-color 0.2s ease-in-out;
            margin-bottom: 1rem; /* space-y-4 for parent */
        }

        .recommendation-item:last-child {
            margin-bottom: 0;
        }

        .recommendation-item:hover {
            border-color: #93c5fd; /* hover:border-blue-300 */
        }

        .recommendation-item-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin-bottom: 0.75rem; /* mb-3 */
        }

        .recommendation-item-header h4 {
            font-weight: 500; /* font-medium */
            color: var(--dark);
        }

        .recommendation-item-header p {
            font-size: 0.875rem; /* text-sm */
            color: #475569;
        }

        .recommendation-item-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1rem; /* gap-4 */
            margin-bottom: 0.75rem; /* mb-3 */
        }

        .recommendation-item-details p:first-child {
            font-size: 0.75rem; /* text-xs */
            color: #64748b;
        }

        .recommendation-item-details p:last-child {
            font-weight: 500; /* font-medium */
        }

        .recommendation-item-details .text-green-600 {
            color: var(--success);
        }

        .recommendation-reason {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.75rem; /* mb-3 */
        }

        .recommendation-reason svg {
            color: #3b82f6; /* text-blue-500 */
        }

        .recommendation-reason p {
            font-size: 0.875rem; /* text-sm */
            color: #2563eb; /* text-blue-600 */
        }

        .add-to-portfolio-button {
            width: 100%;
            background-color: #2563eb; /* bg-blue-600 */
            color: white;
            padding: 0.75rem 1rem; /* py-2 px-4 */
            border-radius: 0.5rem; /* rounded-lg */
            transition: background-color 0.2s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            border: none;
            cursor: pointer;
            font-weight: 500;
        }

        .add-to-portfolio-button:hover {
            background-color: #1d4ed8; /* hover:bg-blue-700 */
        }

        /* Transactions Tab */
        .transactions-card {
            background-color: white;
            border-radius: 1rem;
            border: 1px solid #e2e8f0;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .transactions-header {
            padding: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
        }

        .transactions-header h3 {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--dark);
        }

        .transactions-header p {
            font-size: 0.875rem;
            color: #64748b;
            margin-top: 0.25rem;
        }

        .transaction-list {
            padding: 1.5rem;
        }

        .transaction-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
        }

        .transaction-item:last-child {
            margin-bottom: 0;
        }

        .transaction-icon-container {
            width: 2.5rem; /* w-10 */
            height: 2.5rem; /* h-10 */
            border-radius: 9999px; /* rounded-full */
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .transaction-icon-container.bg-blue-100 { background-color: #dbeafe; }
        .transaction-icon-container.bg-green-100 { background-color: #dcfce7; }
        .transaction-icon-container.bg-gray-100 { background-color: #f3f4f6; }

        .transaction-icon-container .text-blue-600 { color: #2563eb; }
        .transaction-icon-container .text-green-600 { color: var(--success); }
        .transaction-icon-container .text-gray-600 { color: #475569; }

        .transaction-details h4 {
            font-weight: 500;
            color: var(--dark);
        }

        .transaction-details p {
            font-size: 0.875rem;
            color: #64748b;
        }

        .transaction-amount p:first-child {
            font-weight: 600;
        }

        .transaction-amount p:last-child {
            font-size: 0.875rem;
            color: #64748b;
            text-transform: capitalize;
        }

        /* Risk Disclaimer */
        .risk-disclaimer {
            background-color: #fffbeb; /* bg-amber-50 */
            border: 1px solid #fde68a; /* border-amber-200 */
            border-radius: 0.5rem; /* rounded-lg */
            padding: 1rem; /* p-4 */
        }

        .risk-disclaimer-content {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem; /* gap-3 */
        }

        .risk-disclaimer-content svg {
            color: #d97706; /* text-amber-600 */
            margin-top: 0.125rem; /* mt-0.5 */
        }

        .risk-disclaimer-content h4 {
            font-weight: 500; /* font-medium */
            color: #92400e; /* text-amber-800 */
        }

        .risk-disclaimer-content p {
            font-size: 0.875rem; /* text-sm */
            color: #b45309; /* text-amber-700 */
            margin-top: 0.25rem;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .investment-header-content,
            .quick-stats-grid,
            .tab-navigation-nav,
            .portfolio-summary-grid,
            .spare-change-allocation-grid,
            .profile-metric-card,
            .recommendation-item-details,
            .transaction-item {
                grid-template-columns: 1fr; /* Stack columns on small screens */
                flex-direction: column; /* Stack items in flex containers */
                text-align: center;
            }

            .tab-navigation-nav {
                overflow-x: auto; /* Allow horizontal scrolling for tabs */
                white-space: nowrap;
                padding-bottom: 0.5rem; /* Add some padding for scrollbar */
            }

            .tab-button {
                flex-shrink: 0; /* Prevent tabs from shrinking */
            }

            .holding-item, .recommendation-item, .transaction-item {
                flex-direction: column;
                align-items: flex-start; /* Align text left */
                text-align: left;
            }

            .holding-item .text-right, .transaction-item .text-right {
                width: 100%;
                text-align: left;
                margin-top: 0.75rem;
            }

            .holding-item .text-right p:last-child, .transaction-item .text-right p:last-child {
                justify-content: flex-start;
            }
        }
      `}</style>

      {/* Wrapping the entire component in a single parent div */}
      <>
        {/* Header */}
        <div className="investment-header">
          <div className="investment-header-content">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Investment Dashboard</h1>
              <p className="text-gray-600">Grow your spare change with smart investments</p>
            </div>
            <button 
              onClick={handleRefresh}
              className="refresh-button"
              disabled={refreshing}
            >
              <RefreshCw size={16} className={refreshing ? 'animate-spin' : ''} />
              {refreshing ? 'Updating...' : 'Refresh'}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="investment-main-content">
          {/* Quick Stats Banner */}
          <div className="quick-stats-banner">
            <div className="quick-stats-grid">
              <div className="text-center">
                <p className="text-green-100">This Month's Spare Change</p>
                <p className="text-2xl font-bold">{formatCurrency(2340)}</p>
              </div>
              <div className="text-center">
                <p className="text-blue-100">Auto-Invested</p>
                <p className="text-2xl font-bold">{formatCurrency(936)}</p>
              </div>
              <div className="text-center">
                <p className="text-purple-100">Portfolio Growth</p>
                <p className="text-2xl font-bold">+{portfolio.returnPercentage}%</p>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="tab-navigation-container">
            <div className="tab-navigation-header">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'overview', label: 'Portfolio Overview', icon: PieChart },
                  { id: 'recommendations', label: 'Smart Recommendations', icon: Target },
                  { id: 'transactions', label: 'Transaction History', icon: BarChart3 }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`tab-button ${
                      activeTab === tab.id
                        ? 'active'
                        : ''
                    }`}
                  >
                    <tab.icon size={16} />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="p-6">
              {activeTab === 'overview' && <OverviewTab />}
              {activeTab === 'recommendations' && <RecommendationsTab />}
              {activeTab === 'transactions' && <TransactionsTab />}
            </div>
          </div>

          {/* Risk Disclaimer */}
          <div className="risk-disclaimer">
            <div className="risk-disclaimer-content">
              <AlertCircle size={20} className="text-amber-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-amber-800">Investment Risk Disclosure</h4>
                <p className="text-sm text-amber-700 mt-1">
                  Mutual funds and market investments are subject to market risks. Past performance 
                  does not guarantee future returns. Please read all scheme related documents carefully 
                  before investing. SpareChange is not responsible for investment decisions or losses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Investment;