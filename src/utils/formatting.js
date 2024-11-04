export const formatPrice = (price) => {
    const numericPrice = typeof price === "string" 
      ? parseFloat(price.replace(/[^0-9.]/g, ""))
      : price;
  
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(numericPrice);
  };
  