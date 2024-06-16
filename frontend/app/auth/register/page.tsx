'use client';

import Link from "next/link";
import { RegisterForm } from '@/components/forms';
import Spinner from "@/components/common/Spinner";
import { useRegister } from "@/hooks";

export default function Page() {
  const {
    first_name,
    last_name,
    email,
    password,
    re_password,
    isLoading,
    onChange,
    onSubmit
  } = useRegister();

    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <RegisterForm />
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register for an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="mt-10 text-center text-sm text-gray-500">
            Have an account?{' '}
            <Link
              href="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              login
            </Link>
          </p>
        </div>
      </div>
    )
  }