import SocialLinks from "@/components/nav/social-link";
import Divider from "../ui/divider";
import ProfileImg from "./profile-image";
import ContactForm from "./contact-form";
import { File } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="font-base">
      <ProfileImg />
      <h1
        style={{ animationDelay: "400ms" }}
        className="text-4xl font-heading sm:text-5xl delay-400 animate-fade-in"
      >
        Leandro Ivan Cruz
      </h1>
      <div
        style={{ animationDelay: "500ms" }}
        className="mt-4 mb-1 animate-write"
      >
        <p className="uppercase mt-4 sm:text-2xl text-xl font-light tracking-widest animate-write text-gradient inline">
          Analista Programador SSr - Tech Lead
        </p>
        <span className="dark:text-zinc-200 text-zinc-800 font-black animate-blink">
          _
        </span>
      </div>
      <div className="text-lg sm:text-lg font-secondary">
        <Divider
          className="mb-8 animate-show delay-500 sm:w-[468px] w-[392px]"
          animated={true}
        />
        <p
          className="md:w-[540px] sm:w-[468px] animate-show"
          style={{ animationDelay: "880ms" }}
        >
          <strong>¡Hola!</strong> Apasionado por la programación y el aprendizaje continuo. 
          Cuento con experiencia en proyectos personales y de equipo, donde disfruto aportar ideas 
          y crecer junto a otros profesionales. Me especializo en desarrollo backend con SQL, PL/SQL 
          y tecnologías modernas.
          <br />
          Busco seguir desarrollándome en tecnología y enfrentar nuevos desafíos. <br />
        </p>
        <br></br>
        <p className="text-sm font-main animate-show delay-1000">
          <a
            href="/files/CV_Leandro_Cruz.pdf"
            download
            className="hover:decoration-white decoration-white text-gradient-hover hover:underline decoration-dashed underline-offset-2 cursor-pointer"
          >
            <strong>Descargar</strong> CV aquí{" "}
            <File className="inline" size={16} />
          </a>
        </p>

        <div
          className="animate-show md:mt-16 mt-6 sm:w-[468px] w-[392px]"
          style={{ animationDelay: "1500ms" }}
        >
          <Divider
            className="animate-show delay-500 sm:w-[468px] w-[392px]"
            animated={true}
            style={{ animationDirection: "both", opacity: 0.25 }}
          />
          <div className="font-main animate-show text-sm">
            <p className="mt-1 mb-4">
              <i>Get in touch!</i>
            </p>
            <SocialLinks />
          </div>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
