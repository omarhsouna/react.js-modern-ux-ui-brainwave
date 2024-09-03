import clsx from "clsx";
import { loading } from "../assets";
interface Props {
  className?: string;
}
const Generating = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        "flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base",
        className
      )}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      AI is generating
    </div>
  );
};

export default Generating;
