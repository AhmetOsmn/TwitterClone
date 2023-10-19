import classNames from "classnames";
import PropTypes from "prop-types";
import { createElement } from "react";

const Button = ({ as, size, variant, className, children, ...props }) => {
  return createElement(
    as,
    {
      type: "button",
      className: classNames(
        "rounded-full flex justify-center items-center font-bold  transation-all",
        {
          "px-4 h-8 text-sm": size === "small",
          "px-4 h-9": size === "normal",
          "px-4 text-[17px] h-[52px] w-full": size === "large",
          "bg-[color:var(--color-primary)] hover:opacity-90 text-white": variant === "primary",
          "bg-[#eff3f4] hover:bg-[#d7dbdc] text-black": variant === "white",
          "border border-[#b4b4b4] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]": variant === "white-outline",
          [className]: true,
        }
      ),
      ...props,
    },
    children
  );
};
export default Button;

Button.propTypes = {
  props: PropTypes.object,
  as: PropTypes.any,
  size: PropTypes.oneOf(["small", "normal", "large"]),
  variant: PropTypes.oneOf(["primary", "white", "white-outline"]),
  className: PropTypes.string,
};

Button.defaultProps = {
  as: "button",
  size: "normal",
  variant: "primary",
};
