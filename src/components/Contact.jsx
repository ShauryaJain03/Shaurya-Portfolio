import Footer from "./Footer"
import Form from "./Form";

function Contact() {
    return (
      <div className="h-[calc(100vh-100px)] flex flex-col items-center gap-3">
        <div className="h-full text-center py-8 text-2xl font-bold">
          Contact
        </div>
        <p className="text-lg md:text-xl font-semibold text-stone-400 w-4/5 text-center my-8">
          I&apos;m excited to connect with you! Feel free to use the contact
          form below or reach me directly via email at{" "}
          <a href="mailto:jainshaurya.sj@gmail.com">
            <i className="fa-solid fa-envelope"></i>.
          </a>
        </p>
        <Form />
        <Footer />
      </div>
    );
}

export default Contact
