import React from "react";

/**
 * @typedef {"primary"|"secondary"|"ghost"} ButtonVariant
 */

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {ButtonVariant} [props.variant]
 * @param {string} [props.className]
 * @param {string} [props.href]
 * @param {boolean} [props.external]
 * @param {string} [props.type]
 * @param {boolean} [props.disabled]
 * @param {(e: any) => void} [props.onClick]
 */
function Button({
  children,
  variant = "primary",
  className = "",
  href,
  external = false,
  type = "button",
  disabled = false,
  onClick,
}) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
