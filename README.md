Financial Dashboard
A responsive financial dashboard application that provides users with an overview of their financial activities. The dashboard includes features like card details, recent transactions, charts for activity and expense statistics, and a settings page for user profile management.

Features
Dashboard Page
My Cards Section: Displays multiple cards with card details (masked card number, balance, and cardholder name).
Recent Transactions: Shows recent transactions with icons, descriptions, dates, and amounts (positive and negative).
Weekly Activity Chart: A bar chart displaying daily deposits and withdrawals for the week.
Expense Statistics: A pie chart showing expense distribution by categories (e.g., Entertainment, Bills, Investments).
Quick Transfer: List of frequent transfer contacts with profile pictures and transfer amounts.
Balance History Chart: A line chart displaying the balance trend over recent months.
Settings Page
Edit Profile: Users can edit personal information like name, username, email, password, and addresses.
Preferences: Users can manage application preferences.
Security: Section for security-related settings (e.g., password change, two-factor authentication).


Technologies Used
React.js: Frontend framework.
Chart.js: For rendering dynamic and interactive charts.
TailwindCSS: For styling.
Dummy Data: Using mock data in place of live integrations with APIs like Plaid and Dwolla.
Features and Improvements
Responsive Design: Fully responsive and mobile-friendly.
Form Validation: Ensures valid user input on the settings page.
Interactive UI: Hover effects, clickable buttons, and smooth transitions.
Assumptions
The project uses mock data for demonstration purposes. While Plaid and Dwolla APIs are integrated, actual data is not fetched.
Deployment
The application is live and can be accessed here.

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/yogitasingla93/banking.git
cd banking
```

**Installation**

Install the project dependencies using npm:

```bash
npm install

```bash
npm run dev
```

Open [http://localhost:3000/dashboard](http://localhost:3000/dashboard),  [http://localhost:3000/settings](http://localhost:3000/settings) in your browser to view the project.
