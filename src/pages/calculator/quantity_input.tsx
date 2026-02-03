import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

interface QuantityInputProps {
  value: number;
  onChange: (value: number) => void;
  label?: string;
}

export function QuantityInput({ value, onChange, label }: QuantityInputProps) {
  const [inputValue, setInputValue] = useState(String(value));

  useEffect(() => {
    setInputValue(String(value));
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const stringValue = event.target.value;
    setInputValue(stringValue);

    const newValue = parseFloat(stringValue);
    if (!isNaN(newValue) && newValue > 0) {
      onChange(newValue);
    } else if (stringValue === '' || stringValue === '0') {
      onChange(0);
    }
  };

  return (
    <TextField
      type="number"
      value={inputValue}
      onChange={handleChange}
      label={label ?? '/分钟'}
      size="small"
      sx={{
        '& input[type=number]': {
          MozAppearance: 'textfield',
        },
        '& input[type=number]::-webkit-outer-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
        '& input[type=number]::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
      }}
    />
  );
}
