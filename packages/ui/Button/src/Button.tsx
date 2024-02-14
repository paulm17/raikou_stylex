import * as React from "react";
import * as stylex from "@stylexjs/stylex";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const styles1 = stylex.create({
  base: {
    fontSize: 20,
    lineHeight: 2,
    color: "orange",
  },
  highlighted: {
    color: "rebeccapurple",
  },
});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button {...stylex.props(styles1.base)} ref={ref}>
        rrr
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button };
