import Image from "next/image";
function About() {
  return (
    <section className="h-screen w-full flex items-center">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <Image
            width={1000}
            height={1000}
            alt="about"
            className="w-full object-cover"
            src="/aboutImg.png"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 my-8 p-6">
          <span className="text-4xl md:text-6xl font-bold">
            About me<span className="text-primary">.</span>
          </span>
          <div className="py-6">
            <p className="text-lg leading-6 font-lancelot lg:text-3xl">
              I'm a product designer with a passion for creating products that
              not only look good but also solve real problems. When I'm not
              sketching ideas on paper, you can find me binge-watching a Netflix
              series or playing video games. My design philosophy is simple:
              make it visually appealing, functional, and bring a smile to
              people's faces. I'm the designer you want on your team if you want
              to make people say 'I need that in my life!'.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
