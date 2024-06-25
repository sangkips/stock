import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useResetPasswordConfirmMutation } from "@/app/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useResetConfirmPassword(uid: string, token: string) {
    const router = useRouter();
    const [resetPasswordConfirm, { isLoading }] = useResetPasswordConfirmMutation();
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: '',
    });

    // destructure the values 
    const { new_password, re_new_password } = formData;

    // handle change on events
  
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      }
    
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      resetPasswordConfirm({uid, token, new_password, re_new_password})
        .unwrap()
        .then(() => {
            toast.success('Password reset successfully, please login with new password')
            router.push('/auth/login')
          
        })
        .catch(() => {
          toast.error('Password reset confirmation failed')
        })
    }
    return {
        new_password,
        re_new_password,
        isLoading,
        onChange,
        onSubmit
    }
}
