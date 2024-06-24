"use client";

import { Spinner } from "@/components/common";
import Link from "next/link";
import { useRetrievePurchaseQuery } from "@/app/redux/features/authApiSlice";

interface Purchase {
  id: number;
  quantity: string;
  price: string;
  product: {
    id: number;
    name: string;
  };
  supplier: {
    id: number;
    name: string;
  };
  total_amount: number
  
}
export default function PurchaseList() {
  const { data: purchases, isLoading, isFetching } = useRetrievePurchaseQuery();

  if (isLoading || isFetching) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}

    const renderCustomerRow = (purchase: Purchase) => (
      <tr key={purchase.id} className="border-t">
        <td className="border px-4 py-2">{purchase.product.name}</td>
        <td className="border px-4 py-2">{purchase.supplier.name}</td>
        <td className="border px-4 py-2">{purchase.quantity}</td>
        <td className="border px-4 py-2">{purchase.price}</td>
        <td className="border px-4 py-2">{purchase.total_amount}</td>
        <td className="border px-4 py-2">
            <Link
            href={`/dashboard/purchases/${purchase.id}`}
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
        <h2 className="text-xl">Purchase Orders</h2>
        <Link
          href="/dashboard/purchases/add"
          className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-white font-semibold shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
        >
          Add purchase
        </Link>
      </header>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Product</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Supplier</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Product Quantity</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Total Amaount</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Edit</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(purchases) && purchases.map(renderCustomerRow)}
          </tbody>
        </table>
      </div>
    </div>
  );
}