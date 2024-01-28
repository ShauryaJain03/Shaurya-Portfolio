import "./Home.css";
function Home() {
  return (
    <>
      <main className="flex flex-col-reverse md:flex-row justify-start h-[calc(100vh)]">
        <section className="md:w-3/5 w-full md:h-full h-1/2 flex flex-col justify-center md:justify-center items-center px-6 text-center">
          <div className="w-3/4">
            <p className="text-4xl md:text-5xl font-bold md:text-left md:py-5 py-1">
              Frontend Developer Student
            </p>
            <p className="text-slate-600 md:text-xl text-lg md:text-left">
              Hi, I&apos;m Shaurya Jain. A passionate frontend developer based
              in Noida,India Lorem ipsum, dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>
          <div className="flex my-5">
            <p>github</p>
            <p>linkedin</p>
            <p>insta</p>
          </div>
        </section>

        <section className="md:w-2/5 w-full h-2/5 flex justify-center md:justify-between items-center md:h-full">
          <img src="public/IMG-20220917-WA0002.jpg" className="rounded-full swing" />
        </section>
      </main>
    </>
  );
}

export default Home;
