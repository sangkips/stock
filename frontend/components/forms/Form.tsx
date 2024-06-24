import { ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/forms";
import { Spinner } from '@/components/common';

interface Config {
    labelText: string;
    labelId: string;
    type: string;
    value: string;
    required?: boolean;
    options?: {
        value: string,
        label: string;
    }[];
    link?: {
		linkText: string;
		linkUrl: string;
	};
}
interface Props{
    config: Config[];
    isLoading: boolean;
	btnText: string;
    onChange: (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function Form({
    config,
    isLoading,
    btnText,
    onChange,
    onSubmit
}: Props) {
    return (
        <form className="space-y-6" onSubmit={onSubmit}>
            {config.map(input => (
				<Input
					key={input.labelId}
					labelId={input.labelId}
					type={input.type}
					onChange={onChange}
                    value={input.value}
                    options={input.options}
                    link={input.link}
					required={input.required}
				>
					{input.labelText}
				</Input>
            ))}
            <div>
				<button
					type='submit'
					className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					disabled={isLoading}
				>
					{isLoading ? <Spinner sm /> : `${btnText}`}
				</button>
			</div>
        </form>
    )
}