import React, { ChangeEventHandler, FocusEventHandler } from "react";
import { LabelInputForm } from "./LabelInputForm";
import { FormikTouched } from "formik";

type InputTextProps = {
	id?: string;
	text?: string;
	type?: string;
	name: string;
	containerExtraClass?: string;
	extraClass?: string;
	helperText?: string;
	placeholder?: string;
	onChange: ChangeEventHandler;
	// onChange: ChangeEvent<any>;
	value: string;
	error?: any;
	// touched: string | string[] | FormikTouched<any> | FormikTouched<any>[] | undefined;
	touched?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
	onBlur?: FocusEventHandler;
	disabled?: boolean;
	requiredText?: boolean;
};

export const InputTextArea = ({
	text,
	id,
	name,
	placeholder,
	onChange,
	value,
	containerExtraClass,
	extraClass,
	touched,
	error,
	onBlur,
	requiredText,
	helperText,
	...rest
}: InputTextProps) => {
	return (
		<>
			<div className={`my-1 dark:text-white ${containerExtraClass}`}>
				<div className="flex items-center">
					{text && (
						<LabelInputForm
							label={text}
							htmlFor={id || name}
							extraClass="ml-4 font-normal text-sm !text-[#F3F3F3]"
						/>
					)}
					{requiredText && (
						<span className="ml-1 font-medium text-red-500">*</span>
					)}
				</div>
				<textarea
					name={name}
					id={id}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					className={`w-full p-2 dark:border-none mb-0 rounded-[10px] mt-2 placeholder:text-[#888888] dark:bg-dark-input bg-[#1B1B1B66] disabled:bg-gray-900 disabled:cursor-not-allowed ${extraClass}`}
					onBlur={onBlur}
					rows={4}
					cols={30}
					{...rest}
				/>
				<div className="flex flex-col">
					{helperText && (
						<span className="text-sm break-words">{helperText}</span>
					)}
					{touched && error && (
						<span className="text-sm text-red-500 break-words">{error}</span>
					)}
				</div>
			</div>
		</>
	);
};
