"use client";

import { Spinner } from "@/components/common";
import Link from "next/link";
import { useRetrieveSupplierQuery } from "@/app/redux/features/authApiSlice";

interface Supplier {
    id: number;
    name: string;
    phone: string;
    address?: string;
    kra_pin: string;
    email?: string;
    
}
export default function SupplierList() {
    const { data: suppliers, isLoading, isFetching } = useRetrieveSupplierQuery();

  if (isLoading || isFetching) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}

  const rendersupplierRow = (supplier: Supplier) => (
    <tr key={supplier.id} className="border-t">
      <td className="border px-4 py-2">{supplier.name}</td>
      <td className="border px-4 py-2">{supplier.phone}</td>
      <td className="border px-4 py-2">{supplier.address ?? ''}</td>
      <td className="border px-4 py-2">{supplier.kra_pin}</td>
      <td className="border px-4 py-2">{supplier.email ?? ''}</td>
      <td className="border px-4 py-2">
        <Link
          href={`/dashboard/suppliers/${supplier.id}`}
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
        <h2 className="text-xl">suppliers</h2>
        <Link
          href="/dashboard/supplier/add"
          className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-white font-semibold shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
        >
          Add supplier
        </Link>
      </header>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Company Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Phone Number</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Address</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Kra Pin</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Edit</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(suppliers) && suppliers.map(rendersupplierRow)}
          </tbody>
        </table>
      </div>
    </div>
  );
}