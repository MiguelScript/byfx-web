import React, { FocusEventHandler } from "react";
import { LabelInputForm } from "./LabelInputForm";
import { FormikTouched } from "formik";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

type InputTextProps = {
	id?: string;
	text?: string;
	name: string;
	containerExtraClass?: string;
	extraClass?: string;
	helperText?: string;
	placeholder?: string;
	onChange: (e: any) => void;
	// onChange: ChangeEvent<any>;
	value: string;
	error?: any;
	// touched: string | string[] | FormikTouched<any> | FormikTouched<any>[] | undefined;
	touched?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
	onBlur?: FocusEventHandler;
	disabled?: boolean;
	requiredText?: boolean;
};

export const InputPhone = ({
	text,
	id,
	name,
	placeholder,
	onChange,
	value,
	containerExtraClass,
	// extraClass,
	touched,
	error,
	// onBlur,
	requiredText,
	helperText,
}: InputTextProps) => {
	return (
		<>
			<div className={`my-1 dark:text-white ${containerExtraClass}`}>
				<div className="flex items-center mb-2">
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
				<PhoneInput
					defaultCountry="us"
					value={value}
					onChange={(phone) => onChange(phone)}
					placeholder={placeholder}
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
