import "./Home.css";
function Home() {
  return (
    <>
      <main className="flex flex-col-reverse md:flex-row justify-start h-[calc(100vh)] min-w-[360px]">
        <section className="md:w-3/5 w-full md:h-full h-1/2 flex flex-col justify-start md:justify-center items-center px-6 text-center">
          <div className="w-3/4">
            <p className="text-4xl md:text-5xl font-bold md:text-left md:py-5 pt-8 pb-4 text-portbrown">
              Frontend Developer Student
            </p>
            <p className="text-portbrown md:text-xl text-lg md:text-left">
              Hi, I&apos;m{" "}
              <p className="inline-block text-portblue font-bold">Shaurya Jain</p>. A
              passionate frontend developer based in Noida,India Lorem ipsum,
              dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 py-2 mt-4 mx-auto">
            <a
              href="https://www.linkedin.com/in/shaurya--jain/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
            <a
              href="https://github.com/ShauryaJain03"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <a
              href="mailto:jainshaurya.sj@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-envelope fa-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/_jaini_shaurya/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram fa-xl"></i>
            </a>
          </div>
        </section>

        <section className="md:w-2/5 w-full h-2/5 flex justify-center md:justify-center items-center md:h-full">
          <img
            src="public/IMG-20220917-WA0002.jpg"
            className="rounded-full swing"
          />
        </section>
      </main>
    </>
  );
}

export default Home;
