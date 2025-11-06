import AddNewRecord from '@/components/AddNewRecord';
import AIInsights from '@/components/AIInsights';
import ExpenseStats from '@/components/ExpenseStats';
import Guest from '@/components/Guest';
import RecordChart from '@/components/RecordChart';
import RecordHistory from '@/components/RecordHistory';
import CurrencyConverter from '@/components/CurrencyConverter';

import EmailNotification from '@/components/EmailNotification';
import BillSplitter from '@/components/BillSplitter';
import FinancialGoals from '@/components/FinancialGoals';
import FraudDetection from '@/components/FraudDetection';
import BudgetAdvisor from '@/components/BudgetAdvisor';

import { currentUser } from '@clerk/nextjs/server';

export default async function HomePage() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }

  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans min-h-screen transition-colors duration-300">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">

        {/* Grid: Left & Right columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Add New Expense */}
            <AddNewRecord />

            {/* Financial Goals */}
            <FinancialGoals />

            {/* Bill Splitter */}
            <BillSplitter />

            {/* Budget Advisor */}
            <BudgetAdvisor />
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            <RecordChart />
            <ExpenseStats />

            {/* Fraud Detection */}
            <FraudDetection />
          </div>
        </div>

        {/* Full-width sections below */}
        <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
          <AIInsights />
          <RecordHistory />

          {/* Currency Converter */}
          <section>
            <CurrencyConverter />
          </section>

          {/* Email Notifications */}
          <section>
            <EmailNotification />
          </section>
        </div>
      </div>
    </main>
  );
}
