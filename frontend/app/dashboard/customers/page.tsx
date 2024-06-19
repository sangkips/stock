import CustomerForm from "@/components/forms/CreateCustomerForm";
import Link from "next/link";

export default function Page() {



	return (
		<div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Add Customer</h2>
        <p className='mt-10 text-center text-sm text-gray-500'>
          <Link
            href='/dashboard/customers/add'
            className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Add Customer
          </Link>
        </p>
      </div>
      <div className="overflow-x-auto">
        Customers
      </div>
    </div>
  );
}
