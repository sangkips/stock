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
  const { data: customers } = useRetrieveCustomerQuery();

  // if (isLoading || isFetching) {
	// 	return (
	// 		<div className='flex justify-center my-8'>
	// 			<Spinner lg />
	// 		</div>
	// 	);
	// }

  const renderCustomerRow = (customer: Customer) => (
    <tr key={customer.id} className="border-t">
      <td className="py-2 px-4 border-b">{customer.first_name}</td>
      <td className="py-2 px-4 border-b">{customer.last_name}</td>
      <td className="py-2 px-4 border-b">{customer.middle_name ?? ''}</td>
      <td className="py-2 px-4 border-b">{customer.phone || ''}</td>
      <td className="py-2 px-4 border-b">{customer.address || ' '}</td>
      <td className="py-2 px-4 border-b">
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
          className="text-sm text-gray-500 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Customer
        </Link>
      </header>
      <table className="table w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">Middle Name</th>
            <th className="py-2 px-4 border-b">Phone Number</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Edit</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(customers) && customers?.map(renderCustomerRow)}
        </tbody>
      </table>
    </div>
  );
}