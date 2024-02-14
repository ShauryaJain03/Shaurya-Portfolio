function Footer() {
  return (
    <div className=" bg-porttext w-full flex flex-col justify-between items-center min-w-[360px] max-w-[1333px] box-border mx-auto">
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-white py-3 font-body text-xl">Socials</p>
        <div className="flex justify-center items-center gap-4 pb-5">
          <a
            href="https://www.linkedin.com/in/shaurya--jain/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fa-brands fa-linkedin fa-2xl"
              style={{ color: "white" }}
            ></i>
          </a>
          <a
            href="https://github.com/ShauryaJain03"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fa-brands fa-github fa-2xl"
              style={{ color: "white" }}
            ></i>
          </a>
          <a>
            <i
              className="fa-brands fa-stack-overflow fa-2xl"
              style={{ color: "white" }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/_jaini_shaurya/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fa-brands fa-instagram fa-2xl"
              style={{ color: "white" }}
            ></i>
          </a>
        </div>
      </div>
      <p className="text-white pb-2 font-body">
        Designed and Developed with <span>❤️</span> by Shaurya Jain
      </p>
    </div>
  );
}

export default Footer;
