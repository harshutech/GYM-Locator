import React from 'react';

function Dashboard() {
  return (
    <div className="flex h-screen w-full flex-col md:flex-row">
      <div className="hidden md:flex md:w-80 lg:w-96 xl:w-80 flex-col border-r bg-gray-100/40 dark:bg-gray-800/40">
        <div className="flex flex-1 flex-col overflow-y-auto">
          <a className="flex items-center h-14 px-4 text-lg font-semibold md:px-6" href="#">
            Acme Inc
          </a>
          <nav className="flex-1 py-2">
            <a className="flex items-center h-10 px-4 text-sm font-semibold" href="#">
              Dashboard
            </a>
            <a className="flex items-center h-10 px-4 text-sm font-semibold" href="#">
              Health Status
            </a>
            <a className="flex items-center h-10 px-4 text-sm font-semibold" href="#">
              Diet Plans
            </a>
            <a className="flex items-center h-10 px-4 text-sm font-semibold" href="#">
              My Gym
            </a>
            <a className="flex items-center h-10 px-4 text-sm font-semibold" href="#">
              Events &amp; Promotions
            </a>
          </nav>
        </div>
      </div>
      <div className="flex-1 flex flex-col min-h-screen bg-gray-100/50 dark:bg-gray-800/50">
        <header className="flex items-center h-14 px-4 border-b md:px-6">
          <a className="mr-2 text-lg font-semibold" href="#">
            ← Go back
          </a>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </header>
        <main className="flex-1 p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Card 1 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Body Weight (lbs)</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold">150</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">You've lost 5 lbs since last month</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Body Fat Percentage</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold">22%</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">You've lost 2% body fat since last month</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">BMI</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold">25</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Your BMI is in the healthy range</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Calories</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold">2000</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Your daily calorie intake</p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Water Consumption</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold">8 cups</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Drink 8 cups of water daily</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
