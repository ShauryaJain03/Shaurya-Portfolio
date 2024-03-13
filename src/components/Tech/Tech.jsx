function Tech() {
  return (
    <div className="w-4/5 flex flex-col justify-center items-center lg:pt-8">
      <p className="text-3xl text-porttext font-bold font-heading my-8">
        Skills
      </p>
      <div className="flex flex-col justify-center items-center xl:flex-row gap-3 md:gap-8 px-5 mt-4">
        <img
          src="https://skillicons.dev/icons?i=html,css,js,ts,py,cpp&perline=6&theme=light"
          className="mb-3"
        />

        <img
          src="https://skillicons.dev/icons?i=bootstrap,tailwind,react,nextjs,redux,docker&perline=6&theme=light"
          className="mb-3"
        />
        <img
          src="https://skillicons.dev/icons?i=nodejs,express,mysql,mongodb,postman,firebase&perline=6&theme=light"
          className="mb-3"
        />
      </div>
    </div>
  );
}

export default Tech;
