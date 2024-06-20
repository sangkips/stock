"use client";

import { Spinner } from "@/components/common";
import Link from "next/link";
import { useRetrieveCustomerQuery } from "@/app/redux/features/authApiSlice";

interface Customer {
  id: number;
  first_name: string;
  last_name: string;
  middle_name?: string;
  phone: string;
  address: string;
}
export default function CustomerList() {
  const { data: customers, isLoading, isFetching } = useRetrieveCustomerQuery();

  if (isLoading || isFetching) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}

  const renderCustomerRow = (customer: Customer) => (
    <tr key={customer.id} className="border-t">
      <td className="border px-4 py-2">{customer.first_name}</td>
      <td className="border px-4 py-2">{customer.last_name}</td>
      <td className="border px-4 py-2">{customer.middle_name ?? ''}</td>
      <td className="border px-4 py-2">{customer.phone || ''}</td>
      <td className="border px-4 py-2">{customer.address || ' '}</td>
      <td className="border px-4 py-2">
        <Link
          href={`/dashboard/customers/${customer.id}`}
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
        <h2 className="text-xl">Customers</h2>
        <Link
          href="/dashboard/customers/add"
          className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-white font-semibold shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
        >
          Add Customer
        </Link>
      </header>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">First Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Last Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Middle Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Phone Number</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Address</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Edit</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(customers) && customers.map(renderCustomerRow)}
          </tbody>
        </table>
      </div>
    </div>
  );
}