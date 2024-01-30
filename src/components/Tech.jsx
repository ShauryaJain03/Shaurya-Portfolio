function Tech() {
    return (
      <div className="w-4/5 flex flex-col justify-center md:flex-row md:items-center md:justify-evenly items-center md:py-8 md:pb-2">
        <p className="text-2xl text-[#3399CC] font-semibold mb-5 px-5">
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
        <img src="https://skillicons.dev/icons?i=firebase,mysql,mongodb,redux,nodejs&perline=6&theme=light" />
      </div>
    );
}

export default Tech
