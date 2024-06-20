import { CategoryForm } from "@/components/forms";
import Link from "next/link";

export default function Page() {



	return (
		<div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Category</h2>
            </div>
            <div className="overflow-x-auto">
                <CategoryForm />
            </div>
        </div>
  );
}
