import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useResetPasswordMutation } from "@/app/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useResetPassword() {
    const router = useRouter();
    const [resetPassword, { isLoading }] = useResetPasswordMutation();
    const [email, setEmail] = useState('');

    // handle change on events
  
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
    
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      resetPassword(email)
        .unwrap()
        .then(() => {
          toast.success('Check your email for a link to reset your password')
          
        })
        .catch(() => {
          toast.error('Reset password failed')
        })
    }
    return {
        email,
        isLoading,
        onChange,
        onSubmit
    }
}
