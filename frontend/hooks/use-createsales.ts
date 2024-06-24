import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCreateSaleMutation, useRetrieveCustomerQuery, useRetrieveProductQuery } from "@/app/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useCreateSales() {
  const router = useRouter();
  const [createPurchase, { isLoading }] = useCreateSaleMutation();
  const { data: customers } = useRetrieveCustomerQuery();
  const { data: products } = useRetrieveProductQuery();
  
  const [formData, setFormData] = useState({
      customer: '',
      product: '',
      quantity: '',
      price: '',
  });
  

  // destructure the values 
  const { quantity, price, product, customer } = formData;

  // handle change on events

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createPurchase({ quantity, price, product, customer })
      .unwrap()
      .then(() => {
        toast.success('Sale recorded successfully')
        router.push('/dashboard')
      })
      .catch(() => {
        toast.error('Fail to create sale order')
      })
  }
  return {
    customer,
    product,
    quantity,
    price,
    products,
    customers,
    isLoading,
    onChange,
    onSubmit
  }
}
