import Tech from "./Tech/Tech";

function About() {
  return (
    <div
      className=" flex flex-col items-center justify-around min-w-[360px] max-w-[1267px] box-border m-auto overflow-hidden md:my-20 my-10"
      id="about"
    >
      <p className="text-3xl mt-16 md:mb-8 font-bold text-porttext font-heading">
        About Me
      </p>
      <div className="py-2 lg:flex lg:flex-row w-full px-16 md:justify-center md:items-center flex flex-col justify-center items-center my-8 gap-8">
        <img src="" className="px-6" height={300} width={400} />
        <p className=" py-6 lg:text-xl text-center lg:text-left font-body w-full text-porttext text-lg">
          Student at IIIT Allahabad and a Full Stack web developer, I
          <span>&apos;</span>ve spent the past few years immersing myself in the
          dynamic world of technology. From collaborating on diverse projects to
          delving into the intricacies of web development and machine learning,
          I bring a unique blend of academic insight and hands-on experience to
          the table.
          <br />
          Whether in the realm of coding or collaborative problem-solving, I am
          eager to contribute my skills and creativity to the ever-evolving
          landscape of technology.
        </p>
      </div>
      <Tech />
    </div>
  );
}

export default About;
