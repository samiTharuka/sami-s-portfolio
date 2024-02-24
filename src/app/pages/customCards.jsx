const card = [
  { name: "first", content: "this is first card", color: "#94a3b8" },
  { name: "second", content: "this is second card", color: "#facc15" },
  { name: "third", content: "this is third card", color: "#0e7490" },
];

function customCards() {
  return (
    <div className="h-screen">
      {card.map((item, i) => {
        return (
          <div
            className="text-white font-clash text-8xl h-screen w-full flex flex-col sticky top-0 bg-sky-900"
            key={i}
          >
            <p className="text-8xl text-white sticky top-20"> {item.name}</p>
            <p className="text-9xl text-red-300"> {item.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default customCards;
