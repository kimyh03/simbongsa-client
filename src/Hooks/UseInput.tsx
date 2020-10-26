import { useState } from "react";

export default (defaultValue: string | number) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);
  };

  return { value, onChange };
};
