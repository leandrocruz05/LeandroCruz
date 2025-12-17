import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  LucideIcon,
} from "lucide-react";

export default function SocialLinks() {
  const links: { icon: LucideIcon; href: string; type: string }[] = [
    {
      icon: Mail,
      href: "mailto:leandrocruz2000@gmail.com",
      type: "Email",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/leandrocruz05/",
      type: "Linkedin",
    },
    {
      icon: Github,
      href: "https://github.com/leandrocruz05",
      type: "Github",
    },
    {
      icon: MessageCircle,
      href: "https://api.whatsapp.com/send?phone=541167425262&text=Hola%20Leandro!%20Nos%20contactamos%20por%20tu%20curriculum!",
      type: "Whatsapp",
    },
  ];

  return (
    <div className="mr-auto mt-2 flex w-full flex-wrap items-center gap-12">
      {links.map((link) => {
        return (
          <a
            target="_blank"
            key={link.type}
            href={link.href}
            title={link.type}
            className="hover:text-black dark:hover:text-white text-zinc-500 dark:text-zinc-400 transition-colors duration-300"
          >
            <link.icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
