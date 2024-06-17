'use client';

import { useLogin, useRegister } from '@/hooks';
import { Form } from '@/components/forms';

export default function LoginForm() {
    const {
        email,
        password,
        isLoading,
        onChange,
        onSubmit,
    } = useLogin();

  const config = [
		{
			labelText: 'Email address',
			labelId: 'email',
			type: 'email',
			value: email,
			required: true,
		},
		{
			labelText: 'Password',
			labelId: 'password',
			type: 'password',
			value: password,
			required: true,
		},
	];
  
  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText='Login'
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}