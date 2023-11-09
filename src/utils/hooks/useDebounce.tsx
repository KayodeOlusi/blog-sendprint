import React from "react";

type Props = {
  initialValue: string;
  delay: number;
};

const useDebounce = ({ delay = 1000, initialValue }: Props) => {
  const [debouncedValue, setDebouncedValue] = React.useState(initialValue);

  React.useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(initialValue);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [initialValue, delay]);

  return debouncedValue;
};

export default useDebounce;
