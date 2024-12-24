import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HEADER_PUBLIC_LINKS, PRIVATE_ROUTES } from "@/constants";
import { useGetUser } from "@/hooks";
import { LanguageDropdown } from "../language-dropdown";
import { useTranslation } from "react-i18next";
import { FiUser } from "react-icons/fi";
import { MdLogin } from "react-icons/md";
import { Account } from "../account";

export const Header = () => {
  const user = useGetUser();
  const { t } = useTranslation();
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full  fixed z-50 ${
        hasShadow ? "top-0 h-[70px]" : "top-4 h-[58px]"
      } left-1/2 -translate-x-1/2 transition-all duration-300`}
    >
      <header
        className={`h-full w-full container px-5 justify-between flex items-center bg-white  transition-all ${
          hasShadow
            ? "shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10)] rounded-b-[15px] "
            : "rounded-[15px]"
        } `}
      >
        <Link to="/">
          <img src="/images/logo.svg" alt="urconnected logo" />
        </Link>
        <div className="flex items-center gap-x-6">
          <div className="flex gap-x-[36px]">
            {HEADER_PUBLIC_LINKS.filter((item) =>
              user ? true : !PRIVATE_ROUTES.includes(item.path)
            ).map((item) => (
              <Link
                key={item.path}
                className="text-[#0b0b0b] link text-base font-normal font-['Inter Display']"
                to={item.path}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-x-8 ">
          <LanguageDropdown />
          {!user && (
            <div className="flex items-center gap-x-[36px]">
              <Link
                to="/sign-in"
                className="text-[#0b0b0b] flex items-center gap-x-[6px] text-base font-medium font-['Inter Display']"
              >
                <FiUser />
                {t("For Employer")}
              </Link>
              <Link
                to="/sign-in"
                className="text-[#0b0b0b] flex items-center gap-x-[6px] text-base font-medium font-['Inter Display']"
              >
                <MdLogin />
                {t("Sign in")}
              </Link>
            </div>
          )}
          {user && <Account />}
        </div>
      </header>
    </div>
  );
};
