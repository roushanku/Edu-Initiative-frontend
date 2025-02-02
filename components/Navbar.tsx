"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import ServicesDropDown from "./services/dropdown";
import { Github, GithubIcon, Heart, Search, Twitter } from "lucide-react";
import { Logo } from "./Icons";
import { DiscordIcon, Login01Icon, LoginMethodIcon } from "hugeicons-react";

import { User } from "lucide-react"; // User icon from Lucide

const ProfileButton = () => {
  return (
    <Link href="/profile">
      <Button
        className="flex items-center gap-2"
        color="default"
        radius="full"
        variant="bordered"
        // onClick={() => }
      >
        <User className="w-5 h-5" /> {/* Profile Icon */}
        Profile
      </Button>
    </Link>
  );
};

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <Search className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
        <ul className=" hidden sm:flex space-x-4">
          {/* Home */}
          <li>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium text-sm"
              )}
              href="/"
            >
              Home
            </NextLink>
          </li>

          {/* Services with Dropdown */}
          <li className="relative p-0 m-0">
            <ServicesDropDown />
          </li>

          {/* Become a Teacher */}
          <li>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium text-sm"
              )}
              href="/become-a-teacher"
            >
              Become a teacher
            </NextLink>
          </li>

          {/* Contact */}
          <li>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium text-sm"
              )}
              href="/contact-us"
            >
              Contact Us
            </NextLink>
          </li>

          {/* About */}
          <li>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium text-sm"
              )}
              href="/about"
            >
              About
            </NextLink>
          </li>
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          {/* <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <Twitter className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <Github className="text-default-500" />
          </Link> */}
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link href="/sign-in">
            <Button
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              startContent={<LoginMethodIcon className="" />}
              variant="flat"
            >
              Sign In
            </Button>
          </Link>
        </NavbarItem>
        <ProfileButton />
        <ThemeSwitch />
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle className="block lg:hidden" />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
