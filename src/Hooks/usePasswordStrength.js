export const usePasswordStrength = () => {
  const getPasswordStrengthWidth = password => {
    const maxLength = 10;
    const passwordLength = password?.length || 0;
    const strengthPercentage = (passwordLength / maxLength) * 100;
    return `${Math.min(strengthPercentage, 100)}%`;
  };

  const getPasswordStrengthColor = password => {
    const passwordStrengthRanges = [
      { length: 1, color: '#FD450B' },
      { length: 3, color: '#FF6231' },
      { length: 4, color: '#F37952' },
      { length: 5, color: '#FC675D' },
      { length: 6, color: '#F6C881' },
      { length: 7, color: '#FBEC67' },
      { length: 8, color: '#F8E32B' },
      { length: 9, color: '#CAF98F' },
      { length: 10, color: '#52E54F' },
      { length: Infinity, color: '#099E06' },
    ];

    const { color } = passwordStrengthRanges.find(
      range => password?.length <= range.length
    ) || {
      color: 'transparent',
    };
    return color;
  };

  const getPasswordStrengthText = password => {
    const passwordStrengthRanges = [
      { min: 2, max: 6, text: 'Weak Password' },
      { min: 7, max: 10, text: 'Medium Strength Password' },
      { min: 11, max: Infinity, text: 'Strong Password' },
    ];

    const { text } = passwordStrengthRanges.find(
      range => password?.length >= range.min && password?.length <= range.max
    ) || { text: '' };

    return text;
  };

  return {
    getPasswordStrengthWidth,
    getPasswordStrengthColor,
    getPasswordStrengthText,
  };
};
