import { useState } from 'react';

export function usePasswordToggle(fields = []) {
  const initialState = fields.reduce((acc, field) => {
    acc[field] = false;
    return acc;
  }, {});

  const [showPasswords, setShowPasswords] = useState(initialState);

  const togglePasswordVisibility = field => {
    setShowPasswords(prevState => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return { showPasswords, togglePasswordVisibility };
}
