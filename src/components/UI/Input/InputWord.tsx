import { StyleInput, ErrorMassage } from "./Input.style";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
  isError?: boolean;
}

export const Input = ({
  type,
  placeholder,
  errorText,
  isError,
  ...props
}: IInput) => {
  return (
    <div>
      <StyleInput
        $isError={isError}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {isError && <ErrorMassage>{errorText}</ErrorMassage>}
    </div>
  );
};
