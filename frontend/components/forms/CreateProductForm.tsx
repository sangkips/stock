'use client';

import { Form } from '@/components/forms';
import useCreateProduct from '@/hooks/use-createproduct';
// import useFetchCategories from '@/hooks/use-fetchcategories';

export default function ProductForm() {
    const {
        name,
        description,
        quantity,
        category,
        isLoading,
        onChange,
        onSubmit
	} = useCreateProduct();
	
	// const { categories, isLoading: categoriesLoading, isError } = useFetchCategories();

    const config = [
    
		{
			labelText: 'Product Name',
			labelId: 'name',
			type: 'text',
			value: name,
			required: true,
		},
		{
			labelText: 'Description',
			labelId: 'description',
			type: 'text',
			value: description,
			required: false,
        },
        {
			labelText: 'Quantity',
			labelId: 'quantity',
			type: 'number',
			value: quantity,
			required: true,
		},
		{
			labelText: 'Product Category',
			labelId: 'category',
			type: 'text',
            value: category,
			required: true,
			// options: categoriesLoading || isError ? [] : Array.isArray(categories) && categories?.map(cat => ({ value: cat.id, label: cat.name })),
        },
	];
  
  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText='Add Product'
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}