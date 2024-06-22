'use client';

import { Form } from '@/components/forms';
import useCreateCustomer from '@/hooks/use-createcustomer';

export default function CustomerForm() {
    const {
        first_name,
        last_name,
        middle_name,
        phone,
        address,
        isLoading,
        onChange,
        onSubmit
    } = useCreateCustomer();

    const config = [
    
		{
			labelText: 'First name',
			labelId: 'first_name',
			type: 'text',
			value: first_name,
			required: true,
		},
		{
			labelText: 'Last name',
			labelId: 'last_name',
			type: 'text',
			value: last_name,
			required: true,
        },
        {
			labelText: 'Middle name',
			labelId: 'middle_name',
			type: 'text',
			value: middle_name,
			required: false,
		},
		{
			labelText: 'Phone Number',
			labelId: 'phone',
			type: 'phone',
            value: phone,
			required: false,
        },
        {
			labelText: 'Address',
			labelId: 'address',
			type: 'address',
            value: address,
			required: false,
		},
	];
  
  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText='Add customer'
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}