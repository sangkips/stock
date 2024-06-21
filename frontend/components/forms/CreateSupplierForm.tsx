'use client';

import { Form } from '@/components/forms';
import useCreateSupplier from '@/hooks/use-createSupplier';

export default function SupplierForm() {
    const {
        name,
        phone,
        address,
        email,
        kra_pin,
        isLoading,
        onChange,
        onSubmit
    } = useCreateSupplier();

    const config = [
    
		{
			labelText: 'Company Name',
			labelId: 'name',
			type: 'text',
			value: name,
			required: true,
		},
		{
			labelText: 'Phone Number',
			labelId: 'phone',
			type: 'text',
			value: phone,
			required: true,
        },
        {
			labelText: 'Address',
			labelId: 'address',
			type: 'text',
			value: address,
			required: false,
		},
		{
			labelText: 'Kra Pin',
			labelId: 'kra_pin',
			type: 'text',
            value: kra_pin,
			required: true,
        },
        {
			labelText: 'Email',
			labelId: 'email',
			type: 'email',
            value: email,
			required: false,
		},
	];
  
  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText='Add Supplier'
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}