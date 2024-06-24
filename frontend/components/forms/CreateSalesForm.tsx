'use client';

import { Form } from '@/components/forms';
import useCreateSales from '@/hooks/use-createsales';

export default function SalesForm() {

    const {
        quantity,
        price,
        product,
        customer,
        customers,
        products,
        isLoading,
        onChange,
        onSubmit
    } = useCreateSales();

    const config = [
        {
            labelText: 'Product',
            labelId: 'product',
            type: 'select',
            value: product,
            required: true,
            options: Array.isArray(products) ? products.map(prod => ({ value: prod.id.toString(), label: prod.name })) : [],
        },
        
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

            labelText: 'Customer',
            labelId: 'customer',
            type: 'select',
            value: customer,
            required: false,
            options: Array.isArray(customers) ? customers.map(cust => ({ value: cust.id.toString(), label: cust.name })) : [],
        },
    ];

    return (
        <Form
            config={config}
            isLoading={isLoading}
            btnText='Add Sales Order'
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
}