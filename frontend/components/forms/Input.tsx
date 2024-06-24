import { ChangeEvent } from 'react';
import Link from 'next/link';


interface Props{
    type: string;
    labelId: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    value: string;
    children: React.ReactNode;
    required?: boolean;
    options?: { value: string, label: string }[];
    link?: {
		linkText: string;
		linkUrl: string;
	};
}
export default function Input({
    labelId,
    type,
    value,
    onChange,
    children,
    required = false,
    options = [],
    link,
}: Props) {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <label htmlFor="labelId" className="block text-sm font-medium leading-6 text-gray-900">
                {children}
                </label>
                {link && (
					<div className='text-sm'>
						<Link
							className='font-semibold text-indigo-600 hover:text-indigo-500'
							href={link.linkUrl}
						>
							{link.linkText}
						</Link>
					</div>
				)}
            </div>
            
            <div className="mt-2">
                {type === 'select' ? (
                    <select
                        id={labelId}
                        name={labelId}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={onChange}
                        value={value}
                        required={required}
                    >
                        <option value="">Select category</option>
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        id={labelId}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name={labelId}
                        type={type}
                        onChange={onChange}
                        value={value}
                        required={required}
                    />
                )}
            </div>
        </div>
    )
}