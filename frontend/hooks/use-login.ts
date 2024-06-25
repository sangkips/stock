import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/app/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useLogin() {
    const router = useRouter();
    const [login, { isLoading }] = useLoginMutation();
  
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    // destructure the values 
    const { email, password } = formData;
  
    // handle change on events
  
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
    
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      login({ email, password })
        .unwrap()
        .then(() => {
          toast.success('Login successful')
          router.push('/dashboard/')
        })
        .catch(() => {
          toast.error('Fail to login')
        })
    }
    return {
        email,
        password,
        isLoading,
        onChange,
        onSubmit
    }
}
