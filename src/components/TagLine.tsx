import clsx from "clsx";
import brackets from "../assets/svg/Brackets";
interface Props {
  className?: string;
  children: React.ReactNode;
}
const TagLine = ({ className, children }: Props) => {
  return (
    <div className={clsx("tagline flex items-center", className)}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
