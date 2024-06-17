'use client';

import { useResetConfirmPassword } from '@/hooks';
import { Form } from '@/components/forms';

interface Props {
    uid: string;
    token: string;
    
}
export default function ResetConfirmPasswordForm({uid, token }:Props) {
    const {
        new_password,
        re_new_password,
        isLoading,
        onChange,
        onSubmit,
    } = useResetConfirmPassword(uid, token);

    const config = [
        {
			labelText: 'New password',
			labelId: 'new_password',
            type: 'password',
            onChange,
			value: new_password,
			required: true,
        },
        {
			labelText: 'Confirm password',
			labelId: 're_new_password',
            type: 'password',
            onChange,
			value: re_new_password,
			required: true,
		},
	];
  
    return (
        <Form
            config={config}
            isLoading={isLoading}
            btnText='Confirm Reset Password'
            onChange={onChange}
            onSubmit={onSubmit}
        />
  );
}