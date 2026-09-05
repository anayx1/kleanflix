import Link from "next/link";

/**
 * Top Right Arrow Icon component for secondary link buttons
 */
function ArrowUpRightIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}

/**
 * Reusable Button Component for Kleanflix
 *
 * @param {Object} props
 * @param {string} [props.href] - Optional URL target. If provided, renders a Next.js Link.
 * @param {string} [props.text] - Button text (can also use children).
 * @param {React.ReactNode} [props.children] - Custom children content.
 * @param {"secondary" | "primary" | "pill-secondary" | "outline" | "ghost"} [props.variant="secondary"] - Button color variant.
 * @param {"sm" | "md" | "lg"} [props.size="md"] - Button size.
 * @param {boolean} [props.fullWidth=false] - Whether button takes full container width.
 * @param {boolean} [props.showArrow] - Force show or hide top-right arrow (defaults to true for secondary link).
 * @param {string} [props.className=""] - Additional custom classes.
 * @param {Function} [props.onClick] - Click handler function.
 * @param {"button" | "submit" | "reset"} [props.type="button"] - HTML button type (if not a link).
 * @param {boolean} [props.disabled=false] - Disabled state.
 */
export default function Button({
  href,
  text,
  children,
  variant = "secondary",
  size = "md",
  fullWidth = false,
  showArrow,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  target,
  rel,
  ...props
}) {
  const isLinkVariant = variant === "secondary";

  // Should we show arrow icon? Default to true for 'secondary' text link style.
  const hasArrow = showArrow !== undefined ? showArrow : isLinkVariant;

  // Base layout styles
  const baseStyles = isLinkVariant
    ? "inline-flex items-center group font-bold uppercase text-secondary hover:text-[#d96610] transition-colors duration-200 cursor-pointer select-none focus:outline-none"
    : "inline-flex items-center justify-center rounded-full font-bold uppercase  transition-all duration-200 ease-in-out cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98]";

  // Variant color definitions
  const variants = {
    // Secondary: Text-only link style in orange (#F47A1F) with diagonal top-right arrow
    secondary: "bg-transparent p-0 leading-tight",
    // Primary: Solid Blue Pill (#1E6BB8)
    primary:
      "bg-primary text-white hover:bg-[#185899] focus:ring-primary/50 shadow-md hover:shadow-lg",
    // Solid Orange Pill (#F47A1F)
    "pill-secondary":
      "bg-secondary text-white hover:bg-[#e06912] focus:ring-secondary/50 shadow-md hover:shadow-lg font-medium leading-tight",
    // Outline style
    outline:
      "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white focus:ring-secondary/50",
    // Ghost style
    ghost:
      "text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-300",
  };

  // Size variations
  const sizes = isLinkVariant
    ? {
      sm: "text-sm gap-1.5",
      md: "text-base sm:text-lg gap-2.5",
      lg: "text-lg sm:text-xl gap-3",
    }
    : {
      sm: "px-5 py-2 text-xs",
      md: "px-8 py-3 text-sm sm:text-base",
      lg: "px-10 py-4 text-base sm:text-lg",
    };

  const arrowIconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5 sm:w-6 sm:h-6",
    lg: "w-6 h-6 sm:w-7 sm:h-7",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none active:scale-100 shadow-none"
    : "";

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  const combinedClasses = `
    ${baseStyles}
    ${variants[variant] || variants.secondary}
    ${sizes[size] || sizes.md}
    ${widthStyle}
    ${disabledStyles}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  const content = (
    <>
      <span>{text || children}</span>
      {hasArrow && (
        <ArrowUpRightIcon
          className={`${arrowIconSizes[size] || arrowIconSizes.md} ${isLinkVariant ? "text-secondary" : "text-current"} transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
        />
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
