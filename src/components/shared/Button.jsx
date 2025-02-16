import React from 'react';

function Button({ children, variant = 'primary', icon, href, onClick, className = '' }) {
  const baseStyles = "inline-flex items-center px-8 py-3 rounded-full transition-all transform hover:scale-105";
  
  const variants = {
    primary: "bg-brown-100 text-brown-900 hover:bg-white",
    outline: "border-2 border-brown-100 text-brown-100 hover:bg-brown-100 hover:text-brown-900"
  };

  const handleClick = (e) => {
    if (href) {
      e.preventDefault();
      window.location.href = href;
    }
    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}

export default Button; 