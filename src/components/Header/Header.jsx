import {
  FaInstagram,
  FaPhoneAlt,
  FaRegClock,
  FaWhatsapp,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="hidden md:block h-14 bg-[#111] text-white absolute top-0 right-0 left-0">
      <div className="flex items-center justify-between h-full px-5 container m-auto text-base">
        <ul className="flex gap-5">
          <li className="flex gap-2 items-center justify-center">
            <FaPhoneAlt size={15} />
            0813-3800-9501
          </li>
          <li>—</li>
          <li className="flex gap-2 items-center justify-center">
            <FaRegClock size={17} />
            Senin - Jumat (09:00 - 17:00)
          </li>
        </ul>
        <ul className="flex gap-5 items-center">
          <li>
            <a href="https://wa.me/6281338009501">
              <FaWhatsapp size={22} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
