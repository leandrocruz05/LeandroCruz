"use client";

export default function HoverFooter() {
  return (
    <div>
      <div className="relative">
        <div className="rotated-text dark:text-zinc-400 text-zinc-600 opacity-80 px-5 py-1 ">
          <h2>
            {"Created by "}
            <span className="dark:text-white text-black">Leandro Cruz</span>
            {" | Analista Programador SSr "}| Copyright &copy;{" "}
            {new Date().getFullYear()}| Licensed under{" "}
            <a
              className="dark:text-white text-black"
              href="https://github.com/leandrocruz05/LeandroCruz/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
