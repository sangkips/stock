import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/app/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useRegister() {
    const router = useRouter();
    const [register, { isLoading }] = useRegisterMutation();
  
    const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      re_password: '',
    });
  
    // destructure the values 
    const { first_name, last_name, email, password, re_password } = formData;
  
    // handle change on events
  
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
    
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      register({ first_name, last_name, email, password, re_password })
        .unwrap()
        .then(() => {
          toast.success('Account created successfully, please activate your email address')
          router.push('/auth/login')
        })
        .catch(() => {
          toast.error('Something went wrong')
        })
    }
    return {
        first_name,
        last_name,
        email,
        password,
        re_password,
        isLoading,
        onChange,
        onSubmit
    }
}
