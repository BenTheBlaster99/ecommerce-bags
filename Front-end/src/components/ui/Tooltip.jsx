import React, { useState } from "react";
import { cn } from "../../lib/utils";

const TooltipProvider = ({ children }) => {
  return <>{children}</>;
};

const Tooltip = ({ children, content, side = "top", align = "center" }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
            {
              "bottom-full mb-2": side === "top",
              "top-full mt-2": side === "bottom",
              "right-full mr-2": side === "left",
              "left-full ml-2": side === "right",
              "left-1/2 -translate-x-1/2":
                align === "center" && (side === "top" || side === "bottom"),
              "top-1/2 -translate-y-1/2":
                align === "center" && (side === "left" || side === "right"),
              "left-0":
                align === "start" && (side === "top" || side === "bottom"),
              "top-0":
                align === "start" && (side === "left" || side === "right"),
              "right-0":
                align === "end" && (side === "top" || side === "bottom"),
              "bottom-0":
                align === "end" && (side === "left" || side === "right"),
            }
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};

const TooltipTrigger = ({ children, ...props }) => {
  return React.cloneElement(children, props);
};

const TooltipContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
