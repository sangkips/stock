import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCreateSupplierMutation } from "@/app/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useCreateSupplier() {
    const router = useRouter();
    const [createSupplier, { isLoading }] =  useCreateSupplierMutation();
    
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        kra_pin: '',
    });
   
    // destructure the values 
    const { name, address, phone, email, kra_pin } = formData;
  
    // handle change on events
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData,  [name]: value });
    }

    const supplierData = {
        ...formData,
        status: true // default value for status
    };
    
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      createSupplier(supplierData)
        .unwrap()
        .then(() => {
          toast.success('Supplier added successfully')
          router.push('/dashboard/')
        })
        .catch(() => {
          toast.error('Fail to create supplier')
        })
    }
    return {
        name,
        address,
        phone,
        email,
        kra_pin,
        isLoading,
        onChange,
        onSubmit
    }
}
