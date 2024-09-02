import clsx from "clsx";
import ButtonSvg from "../assets/svg/ButtonSvg";
interface Props {
  className?: string;
  href?: string;
  children: React.ReactNode;
  px?: string;
  white?: boolean;
  onClick?: () => void;
}
const Button = ({
  className,
  href,
  children,
  px,
  white = false,
  onClick,
  ...rest
}: Props) => {
  return href ? (
    <a
      className={clsx(
        "button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1",
        px || "px-7",
        white ? "text-n-8" : "text-n-1",
        className
      )}
      href={href}
      onClick={onClick}
      {...rest}
    >
      <span className="relative z-10">{children}</span>
      {ButtonSvg(white)}
    </a>
  ) : (
    <button
      className={clsx(
        "button relative infline-flex items-center justify-center h-11 transition-colors hover:text-color-1",
        px || "px-7",
        white ? "text-n-8" : "text-n-1",
        className
      )}
      {...rest}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {ButtonSvg(white)}
    </button>
  );
};

export default Button;
