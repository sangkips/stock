import ProductForm from "@/components/forms/CreateProductForm";

export default function Page() {



	return (
		<div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Product Details</h2>
            </div>
            <div className="overflow-x-auto">
                <ProductForm />
            </div>
        </div>
  );
}
