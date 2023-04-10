import { ChangeEvent, FC, HtmlHTMLAttributes, useMemo, useState } from "react";
import "./index.css";

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  pattern?: string;
  required?: boolean;
}

export const Input: FC<InputProps> = ({
  name,
  label,
  pattern,
  onChange,
  required = false,
  className = "",
  ...otherProps
}: InputProps) => {
  const [value, setValue] = useState<string>();
  const [error, setError] = useState(false);

  const classNameGenerated = useMemo(() => {
    let className = "input";

    if (value) {
      className = className + " filled";
    }
    if (error) {
      className = className + " error";
    }

    return className;
  }, [error, value]);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);

    if (onChange) {
      onChange(e);
    }
  };

  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setError(e.target.validity.patternMismatch);
  };

  return (
    <div className={classNameGenerated}>
      <input
        id={name}
        type="text"
        name={name}
        value={value}
        onBlur={onBlur}
        pattern={pattern}
        required={required}
        onChange={onChangeInput}
        {...otherProps}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
