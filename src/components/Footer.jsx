function Footer() {
    return (
      <div className="md:h-2/5 h-1/5 bg-[#330000] w-full flex flex-col justify-between items-center min-w-[360px]">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-white py-3">Socials</p>
          <div className="flex justify-center items-center gap-4 pb-3">
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
            <a>
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
            <a>
              <i
                className="fa-brands fa-instagram fa-2xl"
                style={{ color: "white" }}
              ></i>
            </a>
          </div>
        </div>
        <p className="text-white pb-2">
          Designed and Developed with <soan>❤️</soan> by Shaurya Jain
        </p>
      </div>
    );
}

export default Footer
