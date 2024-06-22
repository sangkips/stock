"use client";

import { Spinner } from "@/components/common";
import Link from "next/link";
import { useRetrieveProductQuery } from "@/app/redux/features/authApiSlice";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  quantity: string;
  category: {
    id: number;
    name: string;
  };
}


export default function ProductList() {
    const { data: products, isLoading, isFetching } = useRetrieveProductQuery();


    if (isLoading || isFetching) {
            return (
                <div className='flex justify-center my-8'>
                    <Spinner lg />
                </div>
            );
    }
    

  const renderCustomerRow = (product: Product) => (
    <tr key={product.id} className="border-t">
      <td className="border px-4 py-2">{product.name}</td>
      <td className="border px-4 py-2">{product.description ?? ''}</td>
      <td className="border px-4 py-2">{product.quantity}</td>
      <td className="border px-4 py-2">{product.category.name}</td>
      <td className="border px-4 py-2">
        <Link
          href={`/dashboard/product/${product.id}`}
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
        <h2 className="text-xl">Products</h2>
        <Link
          href="/dashboard/product/add"
          className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-white font-semibold shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
        >
          Add product
        </Link>
          </header>
          
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Product Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Edit</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(products) && products.map(renderCustomerRow)}
          </tbody>
        </table>
      </div>
    </div>
  );
}