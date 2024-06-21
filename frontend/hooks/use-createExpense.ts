import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCreateExpenseMutation } from "@/app/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useCreateExpense() {
    const router = useRouter();
    const [createExpense, { isLoading }] =  useCreateExpenseMutation();
  
    const [formData, setFormData] = useState({
        expense_type: '',
        description: '',
        amount: '',
        phone: '',
        address: '',
    });
  
    // destructure the values 
    const { expense_type, description, amount} = formData;
  
    // handle change on events
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
    
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      createExpense({ expense_type, description, amount})
        .unwrap()
        .then(() => {
          toast.success('Expense captured successfully')
          router.push('/dashboard/expense')
        })
        .catch(() => {
          toast.error('Fail to create expense')
        })
    }
    return {
        expense_type,
        description,
        amount,
        isLoading,
        onChange,
        onSubmit
    }
}
