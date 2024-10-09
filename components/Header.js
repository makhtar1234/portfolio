// next img
import Image from "next/image";

// link
import Link from "next/link";

// socila
import Socials from "../components/Socials";

// Avatar
import Avatar from "../assets/Ahmad.png";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-8">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={Avatar}
              width={200}
              height={48}
              alt=""
              priority={true}
            />
          </Link>
          {/* social */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
