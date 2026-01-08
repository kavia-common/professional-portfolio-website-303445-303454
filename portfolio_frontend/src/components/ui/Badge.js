import React from "react";

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {"neutral"|"accent"} [props.tone]
 * @param {string} [props.className]
 */
function Badge({ children, tone = "neutral", className = "" }) {
  const classes = `badge badge-${tone} ${className}`.trim();
  return <span className={classes}>{children}</span>;
}

export default Badge;
