import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCreatePurchaseMutation } from "@/app/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useCreatePurchase() {
    const router = useRouter();
    const [createPurchase, { isLoading }] =  useCreatePurchaseMutation();
  
    const [formData, setFormData] = useState({
        supplier: '',
        product: '',
        quantity: '',
        price: '',
    });
  
    // destructure the values 
    const { quantity, price, product, supplier } = formData;
  
    // handle change on events
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
    
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      createPurchase({ quantity, price, product, supplier })
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
        supplier,
        product,
        quantity,
        price,
        isLoading,
        onChange,
        onSubmit
    }
}
