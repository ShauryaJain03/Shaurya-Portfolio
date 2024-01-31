function Tech() {
    return (
      <div className="w-4/5 flex flex-col justify-center items-center lg:pt-8">
        <p className="text-2xl text-[#3399CC] font-bold font-heading my-8">
          Technologies
        </p>
        <div className="flex flex-col justify-center items-center lg:flex-row gap-3 px-5 mt-4">
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
      </div>
    );
}

export default Tech
