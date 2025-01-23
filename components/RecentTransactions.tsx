import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BankTabItem } from './BankTabItem'
import BankInfo from './BankInfo'
import { Pagination } from './Pagination'

// Dummy transaction data
const DUMMY_TRANSACTIONS = [
  { id: 1, type: "Deposit from my Card", date: "28 January 2021", amount: "-$850", logo: "/icons/mycard.png" },
  { id: 2, type: "Deposit Paypal", date: "28 January 2021", amount: "+$2500", logo: "/icons/paypal.png" },
  { id: 3, type: "Jemi Wilson", date: "21 January 2021", amount: "+5,400", logo: "/icons/jemi.png" },
  { id: 4, type: "Deposit", date: "16 January 2021", amount: "$300", logo: "/icons/mycard.png" },
  { id: 5, type: "Withdrawal", date: "5 January 2021", amount: "$700", logo: "/icons/mycard.png" },
];

const RecentTransactions = ({
  accounts = [], // Default to an empty array
  appwriteItemId = "", // Default to an empty string
  page = 1, // Default to page 1
}: {
  accounts?: Account[];
  appwriteItemId?: string;
  page?: number;
}) => {
  const rowsPerPage = 3; // Show 3 transactions at a time
  const totalPages = Math.ceil(DUMMY_TRANSACTIONS.length / rowsPerPage);

  const currentTransactions = DUMMY_TRANSACTIONS.slice(0, rowsPerPage); // Always show first 3 for now

  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Recent transactions</h2>
        {/*<Link
          href={`/transaction-history/?id=${appwriteItemId}`}
          className="view-all-btn"
        >
          View all
        </Link>*/}
      </header>

      <Tabs defaultValue={appwriteItemId} className="w-full">
        {accounts.length > 0 ? (
          <>
            <TabsList className="recent-transactions-tablist">
              {accounts.map((account: Account) => (
                <TabsTrigger key={account.id} value={account.appwriteItemId}>
                  <BankTabItem account={account} appwriteItemId={appwriteItemId} />
                </TabsTrigger>
              ))}
            </TabsList>

            {accounts.map((account: Account) => (
              <TabsContent
                value={account.appwriteItemId}
                key={account.id}
                className="space-y-4"
              >
                <BankInfo account={account} appwriteItemId={appwriteItemId} type="full" />

                {/* Render transactions */}
                <ul className="transactions-list space-y-4">
                  {currentTransactions.map((transaction) => (
                    <li
                      key={transaction.id}
                      className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                    >
                      <div className="flex items-center">
                        <img
                          src={transaction.logo}
                          alt={`${transaction.type} logo`}
                          className="w-10 h-10 mr-4"
                        />
                        <div>
                          <p className="font-bold">{transaction.type}</p>
                          <p className="text-sm text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                      <p
                        className={`font-bold text-lg ${
                          transaction.amount.startsWith("+")
                            ? "text-green-500" // Green for credit
                            : "text-red-500" // Red for debit
                        }`}
                      >
                        {transaction.amount}
                      </p>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </>
        ) : (
          // If no accounts, show transactions directly
          <div className="p-4 bg-white rounded-lg shadow">
            <ul className="transactions-list space-y-4">
              {currentTransactions.map((transaction) => (
                <li
                  key={transaction.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <img
                      src={transaction.logo}
                      alt={`${transaction.type} logo`}
                      className="w-10 h-10 mr-4"
                    />
                    <div>
                      <p className="font-bold">{transaction.type}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <p
                    className={`font-bold text-lg ${
                      transaction.amount.startsWith("+")
                        ? "text-green-500" // Green for credit
                        : "text-red-500" // Red for debit
                    }`}
                  >
                    {transaction.amount}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Tabs>

    </section>
  );
};

export default RecentTransactions;
