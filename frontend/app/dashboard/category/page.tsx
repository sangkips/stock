"use client";

import { Spinner } from "@/components/common";
import Link from "next/link";
import { useRetrieveCategoryQuery } from "@/app/redux/features/authApiSlice";

interface Category {
    id: number;
    name: string;
    description: string;
}
export default function CustomerList() {
  const { data: categories, isLoading, isFetching } = useRetrieveCategoryQuery();

  if (isLoading || isFetching) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}

  const renderCustomerRow = (category: Category) => (
    <tr key={category.id} className="border-t">
      <td className="border border-gray-300 px-4 py-2 text-left">{category.name}</td>
      <td className="border border-gray-300 px-4 py-2 text-left">{category.description  ?? ''}</td>
      <td className="border border-gray-300 px-4 py-2 text-left">
        <Link
          href={`/dashboard/category/${category.id}`}
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
        <h2 className="text-xl">Product Categories</h2>
        <Link
          href="/dashboard/category/add"
          className="text-sm text-gray-500 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Category
        </Link>
      </header>
      <table className="table w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Edit</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(categories) && categories?.map(renderCustomerRow)}
        </tbody>
      </table>
    </div>
  );
}