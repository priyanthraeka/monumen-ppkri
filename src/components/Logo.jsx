import logo from "@/assets/logo/monumen.png";
import Image from "next/image";

const Logo = ({ size }) => {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={size}
      height={size}
      className="w-auto h-auto"
    />
  );
};

export default Logo;
