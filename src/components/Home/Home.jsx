import "./Home.css";
import Tech from "../Tech";
function Home() {
  return (
    <>
      <main className="flex flex-col-reverse md:flex-row h-screen">
        <section className="md:w-3/5 w-full md:h-full h-3/5 flex flex-col justify-start md:justify-start items-center px-6 text-center">
          <div className="w-3/4 md:ml-24 md:mt-24">
            <p className="text-4xl md:text-5xl font-bold pb-4 px-10 md:px-0 md:pt-8 md:text-left my-5">
              Frontend Developer and Student
            </p>
            <p className="text-slate-600 md:text-xl text-lg md:text-left">
              Hi, I&apos;m Shaurya Jain. A passionate frontend developer based
              in Noida,India
            </p>
          </div>
          <div className="flex pt-4">
            <p>github</p>
            <p>linkedin</p>
            <p>insta</p>
          </div>
        </section>

        <section className="md:w-2/5 w-full h-2/5 flex justify-center md:justify-between items-center md:h-full">
          <img
            src="../public/IMG-20220917-WA0002.jpg"
            className="rounded-full h-[260px] w-[260px] swing md:mt-[-80px] md:ml-8"
          />
        </section>
      </main>
      <div>
        <Tech />
      </div>
    </>
  );
}

export default Home;
