'use client';

import { useRegister } from '@/hooks';
import { Form } from '@/components/forms';

export default function RegisterForm() {

  const {
  first_name,
  last_name,
  email,
  password,
  re_password,
  isLoading,
  onChange,
  onSubmit,
  } = useRegister();

  const config = [
		{
			labelText: 'First name',
			labelId: 'first_name',
			type: 'text',
			value: first_name,
			required: true,
		},
		{
			labelText: 'Last name',
			labelId: 'last_name',
			type: 'text',
			value: last_name,
			required: true,
		},
		{
			labelText: 'Email address',
			labelId: 'email',
			type: 'email',
			value: email,
			required: true,
		},
		{
			labelText: 'Password',
			labelId: 'password',
			type: 'password',
			value: password,
			required: true,
		},
		{
			labelText: 'Confirm password',
			labelId: 're_password',
			type: 'password',
			value: re_password,
			required: true,
		},
	];
  
  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText='Sign up'
      onChange={onChange}
      onSubmit={onSubmit}
    />
    //   <form className="space-y-6" onSubmit={onSubmit}>
    //   <div>
    //     <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
    //       First Name
    //     </label>
    //     <div className="mt-2">
    //       <input
    //         id="first_name"
    //         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //         name="first_name"
    //         type="text"
    //         onChange={onChange}
    //         value={first_name}
    //         required
    //       />
    //     </div>
    //   </div>

    //   <div>
    //     <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
    //       Last Name
    //     </label>
    //     <div className="mt-2">
    //       <input
    //         id="last_name"
    //         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //         name="last_name"
    //         type="text"
    //         onChange={onChange}
    //         value={last_name}
    //         required
    //       />
    //     </div>
    //   </div>
    //   <div>
    //     <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
    //       Email address
    //     </label>
    //     <div className="mt-2">
    //       <input
    //         id="email"
    //         name="email"
    //         type="email"
    //         onChange={onChange}
    //         value={email}
    //         required
    //         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //       />
    //     </div>
    //   </div>

    //   <div>
    //     <div className="flex items-center justify-between">
    //       <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
    //         Password
    //       </label>
    //     </div>
    //     <div className="mt-2">
    //       <input
    //         id="password"
    //         name="password"
    //         type="password"
    //         onChange={onChange}
    //         value={password}
    //         required
    //         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //       />
    //     </div>
    //   </div>
    //   <div>
    //     <div className="flex items-center justify-between">
    //       <label htmlFor="re_password" className="block text-sm font-medium leading-6 text-gray-900">
    //         Confirm Password
    //       </label>
    //     </div>
    //     <div className="mt-2">
    //       <input
    //         id="re_password"
    //         name="re_password"
    //         type="password"
    //         onChange={onChange}
    //         value={re_password}
    //         required
    //         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //       />
    //     </div>
    //   </div>

    //   <div>
    //     <button
    //       type="submit"
    //       className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //     >
    //       {isLoading ? <Spinner sm /> : 'Signup'}
    //     </button>
    //   </div>
    // </form>
  );
}