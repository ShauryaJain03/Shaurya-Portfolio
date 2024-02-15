import Tech from "./Tech";

function About() {
  return (
    <div
      className=" flex flex-col items-center justify-around min-w-[360px] max-w-[1267px] box-border m-auto overflow-hidden md:my-20 my-10"
      id="about"
    >
      <p className="text-3xl mt-16 md:mb-8 font-bold text-porttext font-heading">
        About Me
      </p>
      <div className="py-2 md:flex md:flex-row w-full px-20 md:justify-center md:items-center flex flex-col justify-center items-center my-8 gap-8">
        <img src="https://placehold.co/300x200" className="px-6" />
        <p className=" py-6 lg:text-xl text-center md:text-left font-body w-full text-porttext">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nulla
          explicabo unde laboriosam aliquam! Impedit maiores aspernatur culpa
          minus neque maxime soluta rerum labore? Eaque cum quam consectetur
          dolorum incidunt.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus alias
          eius accusamus dicta laboriosam, ducimus obcaecati, doloribus
          veritatis laborum
        </p>
      </div>
      <Tech />
    </div>
  );
}

export default About;
