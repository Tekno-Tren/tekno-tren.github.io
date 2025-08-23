import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./common/Button";
import { LuUser, LuMenu } from "react-icons/lu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";

const Navbar = () => {
  return (
    <header>
      <nav className="flexBetween padding-container container relative z-30 py-5">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Tekno Tren"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-36"
          />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 flexCenter cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon_start={<LuUser size={20} />}
            variant="btn_dark"
          />
        </div>

        <div className="inline-block cursor-pointer lg:hidden">
          <Sheet>
            <SheetTrigger>
              <LuMenu size={32} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <div className="py-4">
                  <Button
                    type="button"
                    title="Login"
                    icon_start={<LuUser size={20} />}
                    variant="btn_dark_mobile"
                  />
                </div>
                <Separator className="my-4" />
                <SheetDescription className="pt-4">
                  <ul className="h-full space-y-2">
                    {NAV_LINKS.map((link) => (
                      <Link
                        href={link.href}
                        key={link.key}
                        className="regular-18 flexCenter cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
