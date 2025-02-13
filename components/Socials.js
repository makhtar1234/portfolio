// link
import Link from "next/link";

// iocn
import {
  RiInstagramLine,
  RiYoutubeLine,
  RiFacebookBoxLine,
  RiDribbbleLine,
  RiPinterestLine,
  RiBehanceLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-3 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>
    </div>
  );
};

export default Socials;
