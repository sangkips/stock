'use client';

import { Form } from '@/components/forms';
import useCreateCategory from '@/hooks/use-createcategory';

export default function CategoryForm() {
    const {
        name,
        description,
        isLoading,
        onChange,
        onSubmit
    } = useCreateCategory();

    const config = [
    
		{
			labelText: 'Name',
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
	];
  
  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText='Add category'
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}