import { ReactNode } from "react";

type ButtonProps = {
  type?: "button" | "submit";
  title?: string;
  icon_start?: ReactNode | string;
  icon_end?: ReactNode | string;
  variant?: string;
  full?: boolean;
  onClick?: () => void;
};

const Button = ({
  type,
  title,
  icon_start,
  icon_end,
  variant,
  full,
  onClick,
}: ButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "btn_dark":
        return "border-black bg-black text-white px-6 py-3 hover:bg-black/80";
      case "btn_dark_outline":
        return "border-black bg-white text-black px-6 py-3 hover:bg-gray-100";
      case "btn_blue_outline":
        return "border-blue-500 bg-white text-blue-500 px-6 py-3 hover:bg-blue-50";
      case "btn_green_outline":
        return "border-green-500 bg-white text-green-500 px-6 py-3 hover:bg-green-50";
      case "btn_purple_outline":
        return "border-purple-500 bg-white text-purple-500 px-6 py-3 hover:bg-purple-50";
      case "btn_orange_outline":
        return "border-orange-500 bg-white text-orange-500 px-6 py-3 hover:bg-orange-50";
      default:
        return "border-black bg-white text-black px-6 py-3 hover:bg-gray-100";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-3 rounded-full border transition-all duration-300 ${getVariantClasses()} ${full ? "w-full" : ""}`}
    >
      {icon_start && icon_start}
      <span className="text-sm font-medium cursor-pointer whitespace-nowrap">
        {title}
      </span>
      {icon_end && icon_end}
    </button>
  );
};

export default Button;
