import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCreatePurchaseMutation, useRetrieveSupplierQuery, useRetrieveProductQuery } from "@/app/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useCreatePurchase() {
    const router = useRouter();
  const [createPurchase, { isLoading }] = useCreatePurchaseMutation();
  const { data: suppliers } = useRetrieveSupplierQuery();
  const { data: products } = useRetrieveProductQuery();
  
    const [formData, setFormData] = useState({
        supplier: '',
        product: '',
        quantity: '',
        price: '',
    });
  
    // destructure the values 
    const { quantity, price, product, supplier } = formData;
  
    // handle change on events
  
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
    
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      createPurchase({ quantity, price, product, supplier })
        .unwrap()
        .then(() => {
          toast.success('purchase created successfully')
          router.push('/dashboard/product')
        })
        .catch(() => {
          toast.error('Fail to create urchase order')
        })
    }
    return {
      supplier,
      product,
      quantity,
      price,
      products,
      suppliers,
      isLoading,
      onChange,
      onSubmit
    }
}
