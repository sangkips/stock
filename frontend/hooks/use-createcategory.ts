import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCreateCategoryMutation } from "@/app/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useCreateCategory() {
    const router = useRouter();
    const [createCategory, { isLoading }] =  useCreateCategoryMutation();
  
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });
  
    // destructure the values 
    const { name, description } = formData;
  
    // handle change on events
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
    
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      createCategory({ name, description })
        .unwrap()
        .then(() => {
          toast.success('category created successfully')
          router.push('/dashboard/category')
        })
        .catch(() => {
          toast.error('Fail to create category')
        })
    }
    return {
        name,
        description,
        isLoading,
        onChange,
        onSubmit
    }
}
