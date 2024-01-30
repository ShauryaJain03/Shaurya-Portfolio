import "./Home.css";
function Home() {
  return (
    <>
      <main className="flex flex-col-reverse md:flex-row justify-start min-w-[360px] max-w-[1267px] box-border mx-auto md:my-20 my-10">
        <section className="md:w-3/5 w-full md:h-full h-1/2 flex flex-col justify-start md:justify-center items-center px-6 text-center">
          <div className="w-3/4">
            <p className="text-4xl md:text-5xl font-heading font-bold md:text-left md:py-5 pt-8 pb-4 text-portbrown">
              Frontend Developer & Student
            </p>
            <p className="text-portbrown md:text-xl text-lg md:text-left font-body">
              Hi, I&apos;m{" "}
              <p className="inline-block text-portblue font-body font-bold">
                Shaurya Jain
              </p>
              . A passionate frontend developer based in Noida , India. 
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

        <section className="md:w-2/5 w-full h-2/5 flex justify-center md:justify-center items-center md:h-full my-5 md:my-0 ">
          <img
            src="Shaurya.jpg"
            className="rounded-full"
            height={300}
            width={300}
          />
        </section>
      </main>
    </>
  );
}

export default Home;
