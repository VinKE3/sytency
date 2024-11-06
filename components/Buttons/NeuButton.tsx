import Link from "next/link";

interface NeuButtonProps {
  text: string;
  href: string;
}

const NeuButton = ({ text, href }: NeuButtonProps) => {
  return (
    <div className="py-2 flex items-center ">
      <Link href={href} target="_blank">
        <button
          type="button"
          className="px-6 py-2 font-medium bg-masyp text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default NeuButton;
