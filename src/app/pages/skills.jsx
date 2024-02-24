import Image from "next/image";
const skillIcons = [
  { src: "/React.svg", title: "react", alt: "react" },
  { src: "/JavaScript.svg", title: "js", alt: "js" },
  { src: "/css.svg", title: "html", alt: "css" },
  { src: "/Html 5.svg", title: "css", alt: "html" },
];
const designIcons = [
  { src: "/Bootstrap.svg", title: "Bootstrap", alt: "bootstrap" },
  { src: "/Figma.svg", title: "Figma", alt: "figma" },
  { src: "/framer.png", title: "Framer", alt: "framer" },
  { src: "/tailwindcss.svg", title: "Tailwind", alt: "tailwind" },
];

function skills() {
  return (
    <section className="h-screen">
      <div className="flex flex-col p-6">
        <span className="text-4xl md:text-6xl font-bold">
          Skills<span className="text-primary">.</span>
        </span>
        <div className="flex-col md:grid grid-cols-2">
          <div className="flex flex-col my-8">
            <p className="flex text-2xl font-clash justify-center mb-4">
              Programming
            </p>
            <div className="flex flex-col justify-center gap-y-2">
              {skillIcons.map((item) => {
                return (
                  <div className="flex md:px-4">
                    <div className="flex bg-[#404040] border border-[#626262] w-full items-center p-2 space-x-2 rounded-lg">
                      <Image
                        src={item.src}
                        width={50}
                        height={50}
                        alt={item.alt}
                        className="object-cover"
                      />
                      <span className="text-white-700">{item.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col my-8">
            <p className="flex text-2xl font-clash justify-center mb-4">
              Designing
            </p>
            <div className="flex flex-col justify-center gap-y-2">
              {designIcons.map((item, i) => {
                return (
                  <div className="flex md:px-4">
                    <div className="flex bg-[#404040] border border-[#626262] w-full items-center p-2 space-x-2 rounded-lg">
                      <Image
                        src={item.src}
                        width={50}
                        height={50}
                        alt={item.alt}
                      />
                      <span className="text-white-700">{item.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default skills;
