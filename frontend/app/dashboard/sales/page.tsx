"use client";

import { Spinner } from "@/components/common";
import Link from "next/link";
import { useRetrieveSalesQuery } from "@/app/redux/features/authApiSlice";

interface Sale {
    id: number;
    quantity: string;
    price: string;
    product: {
        id: number;
        name: string;
    };
    total_amount: number

}
export default function SalesList() {
    const { data: sales, isLoading, isFetching } = useRetrieveSalesQuery();

    if (isLoading || isFetching) {
        return (
            <div className='flex justify-center my-8'>
                <Spinner lg />
            </div>
        );
    }

    const renderCustomerRow = (sale: Sale) => (
        <tr key={sale.id} className="border-t">
            <td className="border px-4 py-2">{sale.product.name}</td>
            <td className="border px-4 py-2">{sale.quantity}</td>
            <td className="border px-4 py-2">{sale.price}</td>
            <td className="border px-4 py-2">{sale.total_amount}</td>
            <td className="border px-4 py-2">
                <Link
                    href={`/dashboard/sales/${sale.id}`}
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
                <h2 className="text-xl">Sales Orders</h2>
                <Link
                    href="/dashboard/sales/add"
                    className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 text-white font-semibold shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
                >
                    Make a Sale
                </Link>
            </header>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">Product</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Product Quantity</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Total Amaount</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(sales) && sales.map(renderCustomerRow)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}