import Tech from "./Tech";

function About() {
    return (
      <div className="h-screen flex flex-col items-center justify-around border-2 border-red-300">
        <p className="text-blue-600 text-2xl md:pb-4 font-bold">About Me</p>
        <div className="py-2 md:flex w-4/5 md:justify-center md:items-center justify-center items-center">
          <img src="https://placehold.co/300x200" className="px-6"/>
          <p className="px-8 py-6 lg:text-xl font-semibold text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nulla
            explicabo unde laboriosam aliquam! Impedit maiores aspernatur culpa
            minus neque maxime soluta rerum labore? Eaque cum quam consectetur
            dolorum incidunt.<br/>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, dignissimos.
          </p>
        </div>
        <Tech />
      </div>
    );
}

export default About
