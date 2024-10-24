import Select from "react-select";
import { useEffect, useRef } from "react";
import { FormikTouched } from "formik";
import { LabelInputForm } from "./LabelInputForm";

export interface optionFormat {
	readonly value: string;
	readonly label: string;
	readonly color?: string;
	readonly isFixed?: boolean;
	readonly isDisabled?: boolean;
}

interface InputSelectProps {
	options: readonly optionFormat[];
	extraClass?: string;
	containerExtraClass?: string;
	text?: string;
	name: string;
	placeholder?: string;
	id?: string;
	error?: string;
	isMulti?: boolean;
	onChange: any;
	disabled?: boolean;
	defaultValue?: object;
	clearValue?: boolean;
	marginTopContainer?: boolean;
	requiredText?: boolean;
	value?: any;
	touched?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
}

export const InputSelect = ({
	options,
	text,
	name,
	/* id, */
	extraClass,
	placeholder,
	containerExtraClass,
	error,
	isMulti,
	onChange,
	defaultValue,
	disabled,
	clearValue = false,
	marginTopContainer = true,
	requiredText,
	touched,
	...rest
}: InputSelectProps) => {
	const colors = {
		text: "#FFFF",
		background: "#2b2e4c",
		"option-background": "#484874",
		"option-selected": "#1e1e2f",
		option: {
			color: (isDisabled: any) => (isDisabled ? "red" : "white"),
			background: (isDisabled: any) => isDisabled && "#3c3c3c",
			cursor: (isDisabled: any) => isDisabled && "not-allowed",
		},
	};

	const getMultiLabelBackground = (color: string) => {
		switch (color) {
			case "primary":
				return "!bg-light-primary";
				break;
			case "secondary":
				return "!bg-light-secondary";
				break;
			case "danger":
				return "!bg-light-error";

				break;
			case "warning":
				return "!bg-light-warning";

				break;
			case "success":
				return "!bg-light-success";

				break;
			default:
				return "!bg-light-gray";

				break;
		}
	};
	const selectInputRef = useRef<any>();
	const onClear = () => {
		if (selectInputRef != undefined) {
			selectInputRef?.current?.clearValue();
		}
	};

	useEffect(() => {
		if (clearValue === true) {
			onClear();
		}
	}, [clearValue]);

	const multiValueStyles = ({ data }: any) => {
		return `${getMultiLabelBackground(data.color)}  rounded items-center rounded-md`;
	};
	const multiValueLabelStyles = "capitalize";
	const multiValueRemoveStyles = `!px-1 text-white hover:bg-red-50 hover:text-red-800  !rounded-full`;

	return (
		<div
			className={`${marginTopContainer ? "mt-4" : "mt-0"} w-full ${containerExtraClass}`}
		>
			<div className="flex items-center rounded">
				{text && (
					<LabelInputForm
						label={text}
						htmlFor={name}
						extraClass="font-semibold text-sm text-light-text"
					/>
				)}
				{requiredText && (
					<span className="ml-1 font-medium text-red-500">* </span>
				)}
			</div>
			<Select
				ref={selectInputRef}
				styles={{
					input: (baseStyles: any) => ({
						...baseStyles,
						color: colors.text,
					}),
					control: (baseStyles: any /* , state */) => ({
						...baseStyles,
						background: colors.background,
						minHeight: 40,
						// border: 'none',
						// borderColor: error && 'red',
						// boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
						borderRadius: "5px",
					}),
					menu: (baseStyles: any /* state */) => ({
						...baseStyles,
						background: colors.background,
						color: "black", // color text menu open
						zIndex: "1000",
					}),
					option: (baseStyles: any, { isDisabled }: any) => ({
						...baseStyles,
						color: colors.option.color(isDisabled ?? ""),
						background: colors.option.background(isDisabled ?? ""),
						cursor: colors.option.cursor(isDisabled),
						":hover": {
							background: colors["option-background"],
						},
						textTransform: "capitalize",
					}),
					multiValue: (baseStyles: any) => ({
						...baseStyles,
						borderRadius: "5px",
					}),
					multiValueRemove: (baseStyles: any) => ({
						...baseStyles,
					}),
					singleValue: (baseStyles: any) => ({
						...baseStyles,
						color: colors.text,
					}),
				}}
				options={options}
				isClearable={true}
				isSearchable={true}
				placeholder={placeholder || text}
				className={`w-full mt-2 ${extraClass}`}
				isMulti={isMulti}
				onChange={onChange}
				backspaceRemovesValue={true}
				defaultValue={defaultValue}
				isDisabled={disabled}
				theme={(theme: any) => ({
					...theme,
					colors: {
						...theme.colors,
						primary25: colors["option-background"],
						primary: colors["option-selected"],
						neutral20: colors["option-background"],
						neutral60: colors["option-selected"], // icons colors
						neutral80: "white", // color text input
						// neutral30
						// neutral40
						// neutral50
						// neutral60
						// neutral70
						// neutral80
						// neutral90
					},
				})}
				classNames={{
					multiValue: (baseStyles: any) => multiValueStyles(baseStyles),
					multiValueLabel: () => multiValueLabelStyles,
					multiValueRemove: () => multiValueRemoveStyles,
					control: () =>
						`!border !border-purple-300 dark:border-none ${disabled && "!bg-gray-200"}`,
				}}
				{...rest}
			/>
			{error && touched && (
				<span className="text-sm text-red-500">{error}</span>
			)}
		</div>
	);
};

/* 

const colourOptions: readonly ColourOption[] = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

<InputSelect
          name="test"
          options={colourOptions}
          error={errors.test}
          id="test"
          text="Colores"
          containerExtraClass="px-20"
          defaultValue={colourOptions[0]}
          onChange={(value: { value: any }) => {
            setFieldValue('test', value ? value.value : '');
          }}
        />

*/
