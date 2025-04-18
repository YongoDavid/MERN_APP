/**
 * Format a number as currency
 * @param {number} amount - The amount to format
 * @param {string} [currency='USD'] - The currency code
 * @param {string} [locale='en-US'] - The locale to use for formatting
 * @returns {string} The formatted currency string
 */
const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  if (amount === undefined || amount === null) {
    return '';
  }

  // Convert to number if it's a string
  const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

  // Check if it's a valid number
  if (isNaN(numericAmount)) {
    return '';
  }

  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericAmount);
  } catch (error) {
    console.error('Error formatting currency:', error);
    // Fallback to simple formatting
    return `$${numericAmount.toFixed(2)}`;
  }
};

export default formatCurrency; 