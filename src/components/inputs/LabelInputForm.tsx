interface LabelInputFormProps {
  label: string;
  extraClass?: string;
  htmlFor: string;
}

export const LabelInputForm = ({ label, htmlFor = '', extraClass = '' }: LabelInputFormProps) => (
  <label className={`block  ${extraClass}`} htmlFor={htmlFor}>
    {label}
  </label>
);
