import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCreateCustomerMutation } from "@/app/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useCreateCustomer() {
    const router = useRouter();
    const [createCustomer, { isLoading }] =  useCreateCustomerMutation();
  
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        middle_name: '',
        phone: '',
        address: '',
    });
  
    // destructure the values 
    const { first_name, last_name, middle_name, phone, address } = formData;
  
    // handle change on events
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
    
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      createCustomer({ first_name, last_name, middle_name, phone, address })
        .unwrap()
        .then(() => {
          toast.success('customer created successfully')
          router.push('/dashboard/')
        })
        .catch(() => {
          toast.error('Fail to create customer')
        })
    }
    return {
        first_name,
        last_name,
        middle_name,
        phone,
        address,
        isLoading,
        onChange,
        onSubmit
    }
}
