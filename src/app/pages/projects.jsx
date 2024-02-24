"use client";
import Image from "next/image";
function projects() {
  const projectPics = [
    {
      id: 1,
      number: "#01",
      src: "/sneakerpng.png",
      alt: "sneaker",
      name: "sneaker mall",
      content:
        "Mainly this is a product promotion website.This was built for targetting wearing products.",
      color: "#15803d",
    },
    {
      id: 2,
      number: "#02",
      src: "/travel.png",
      alt: "travel",
      name: "travel",
      content:
        "A perfect place for travellers.easily find the best places to visiand enjoy.",
      color: "#a16207",
    },
    {
      id: 3,
      number: "#03",
      src: "/eatDrink.png",
      alt: "food",
      name: "food and drink",
      content: "Food lovers check this out ! Yummy meals waiting for you !",
      color: "#f97316",
    },
    {
      id: 4,
      number: "#04",
      src: "/eatDrink.png",
      alt: "drink",
      name: "food",
      content: "Food lovers check this out ! Yummy meals waiting for you !",
      color: "#f97316",
    },
  ];

  return (
    <div className="h-full w-full p-6">
      <p className="text-4xl md:text-6xl font-bold">
        Projects<span className="text-primary">.</span>
      </p>
      <p className="text-lg py-4 leading-6 md:text-4xl font-lancelot">
        These are my recent projects. Check that out !
      </p>
      {projectPics.map((item, i) => {
        return (
          <div
            className="h-screen md:flex-row flex-col flex py-8 border-b-2 border-primary "
            key={i}
          >
            <div className="w-full md:w-1/3 md:mb-28">
              <p className="text-6xl md:text-9xl font-clash sticky top-24">
                {item.number}
              </p>
              <p
                className="text-4xl md:text-6xl font-clash sticky underline top-56"
                style={{ color: item.color }}
              >
                {item.name}
              </p>{" "}
              <p className="text-lg md:text-4xl sticky top-72 py-8 md:mb-24">
                {item.content}
              </p>
            </div>

            <div className="w-full md:w-2/3">
              <Image
                src={item.src}
                width={500}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default projects;
