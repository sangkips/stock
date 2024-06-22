import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCreateProductMutation } from "@/app/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useCreateProduct() {
    const router = useRouter();
    const [createProduct, { isLoading }] =  useCreateProductMutation();
  
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        quantity: '',
        category: '',
    });
  
    // destructure the values 
    const { name, description, quantity, category } = formData;
  
    // handle change on events
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
    
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      createProduct({ name, description, quantity, category })
        .unwrap()
        .then(() => {
          toast.success('product created successfully')
          router.push('/dashboard/product')
        })
        .catch(() => {
          toast.error('Fail to create product')
        })
    }
    return {
        name,
        description,
        quantity,
        category,
        isLoading,
        onChange,
        onSubmit
    }
}
