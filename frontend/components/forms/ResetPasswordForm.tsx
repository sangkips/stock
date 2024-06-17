'use client';

import { useResetPassword } from '@/hooks';
import { Form } from '@/components/forms';

export default function ResetPasswordForm() {
    const {
        email,
        isLoading,
        onChange,
        onSubmit,
    } = useResetPassword();

  const config = [
		{
			labelText: 'Email address',
			labelId: 'email',
      type: 'email',
      onChange,
			value: email,
			required: true,
		},
	];
  
  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText='Reset Password'
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}