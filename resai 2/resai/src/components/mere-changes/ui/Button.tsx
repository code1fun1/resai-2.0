import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'focus:ring-blue-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-blue-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonClasses> {
  text?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  fill_background_color?: string;
  border_border_radius?: string;
  border_border?: string;
  layout_width?: string;
  padding?: string;
  position?: string;
  margin?: string;
}

const Button: React.FC<ButtonProps> = ({
  // Required parameters with defaults
  text = "Hover to see what changes with us",
  text_font_size = "20",
  text_font_family = "Satoshi",
  text_font_weight = "400",
  text_line_height = "27px",
  text_text_align = "center",
  text_color = "#03030d",
  fill_background_color = "#dabf67",
  border_border_radius = "24px",
  
  // Optional parameters
  border_border,
  layout_width,
  padding,
  position,
  margin,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children = null,
  onClick,
  type = "button",
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidBorder = border_border && typeof border_border === 'string' && border_border?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
    hasValidBorder ? `border-[${border_border}]` : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const buttonStyles: React.CSSProperties = {
    fontSize: text_font_size ? `${text_font_size}px` : '20px',
    fontFamily: text_font_family || 'Satoshi',
    fontWeight: text_font_weight || '400',
    lineHeight: text_line_height || '27px',
    textAlign: (text_text_align as any) || 'center',
    color: text_color || '#03030d',
    backgroundColor: fill_background_color || '#dabf67',
    borderRadius: border_border_radius || '24px',
  };

  // Safe click handler
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={buttonStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;
