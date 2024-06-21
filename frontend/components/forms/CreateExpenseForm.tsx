'use client';

import { Form } from '@/components/forms';
import useCreateExpense from '@/hooks/use-createExpense';

export default function ExpenseForm() {
    const {
        expense_type,
        description,
        amount,
        isLoading,
        onChange,
        onSubmit
    } = useCreateExpense();

    const config = [
    
		{
			labelText: 'Expense Type',
			labelId: 'expense_type',
			type: 'text',
			value: expense_type,
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
			labelText: 'Amount',
			labelId: 'amount',
			type: 'number',
			value: amount,
			required: true,
		},
	];
  
  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText='Add expense'
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}