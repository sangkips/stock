'use client';

import { Form } from '@/components/forms';
import useCreatePurchase from '@/hooks/use-createpurchase';

export default function PurchaseForm() {

  const {
    quantity,
    price,
    product,
    supplier,
    suppliers,
    products,
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
      type: 'select',
      value: product,
      required: true,
      options: Array.isArray(products) ? products.map(prod => ({ value: prod.id.toString(), label: prod.name })) : [],
    },
    {
			labelText: 'Supplier',
			labelId: 'supplier',
			type: 'select',
			value: supplier,
      required: true,
      options: Array.isArray(suppliers) ? suppliers.map(supp => ({ value: supp.id.toString(), label: supp.name })) : [],
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