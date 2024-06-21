"use client";

import { Spinner } from "@/components/common";
import Link from "next/link";
import { useRetrieveExpenseQuery } from "@/app/redux/features/authApiSlice";

interface Expense {
  id: number;
  expense_type: string;
  description: string;
  amount: string;
  phone: string;
  address: string;
}
export default function CustomerList() {
  const { data: expenses, isLoading, isFetching } = useRetrieveExpenseQuery();

  if (isLoading || isFetching) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}

  const renderCustomerRow = (expense: Expense) => (
    <tr key={expense.id} className="border-t">
      <td className="border px-4 py-2">{expense.expense_type}</td>
      <td className="border px-4 py-2">{expense.description ?? ''}</td>
      <td className="border px-4 py-2">{expense.amount}</td>
      <td className="border px-4 py-2">
        <Link
          href={`/dashboard/expenses/${expense.id}`}
          className="text-blue-500 hover:underline"
        >
          Edit
        </Link>
      </td>
    </tr>
  );

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Expenses</h2>
        <Link
          href="/dashboard/expense/add"
          className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-white font-semibold shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
        >
          Add Expense
        </Link>
      </header>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Expense Type</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Edit</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(expenses) && expenses.map(renderCustomerRow)}
          </tbody>
        </table>
      </div>
    </div>
  );
}