import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import type { IconType } from "react-icons";

export const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];


type FooterLinks = {
    href: string;
    icon: IconType
}

export const socialLinks: FooterLinks[] = [
  { href: "https://discord.com/", icon: FaDiscord },
  { href: "https://twitter.com/borngreatik23", icon: FaTwitter },
  { href: "https://youtube.com", icon: FaYoutube },
  { href: "https://medium.com/cechiago66397", icon: FaMedium },
];