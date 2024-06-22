'use client';

import { Form } from '@/components/forms';
import useCreatePurchase from '@/hooks/use-createpurchase';

export default function PurchaseForm() {
    const {
        quantity,
        price,
        product,
        supplier,
        isLoading,
        onChange,
        onSubmit
    } = useCreatePurchase();

    const config = [
        {
			labelText: 'Product Quantity',
			labelId: 'quantity',
			type: 'number',
			value: quantity,
			required: true,
		},
		{
			labelText: 'Price',
			labelId: 'price',
			type: 'number',
            value: price,
			required: true,
        },
        {
			labelText: 'Product',
			labelId: 'product',
			type: 'text',
			value: product,
			required: true,
        },
        {
			labelText: 'Supplier',
			labelId: 'supplier',
			type: 'text',
			value: supplier,
			required: true,
		},
	];
  
  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText='Add Purchase Order'
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}