function Tech() {
    return (
      <div className="w-4/5 flex flex-col justify-center lg:flex-row lg:items-center lg:justify-evenly items-center lg:pt-8 ">
        <p className="text-2xl text-[#3399CC] font-bold font-heading my-8 px-5">
          Technologies
        </p>

        <img
          src="https://skillicons.dev/icons?i=html,css,js,ts,py&perline=5&theme=light"
          className="mb-3"
        />

        <img
          src="https://skillicons.dev/icons?i=bootstrap,tailwind,react,nextjs,docker&perline=6&theme=light"
          className="mb-3"
        />
        <img
          src="https://skillicons.dev/icons?i=firebase,mysql,mongodb,redux,nodejs&perline=6&theme=light"
          className="mb-3"
        />
      </div>
    );
}

export default Tech
