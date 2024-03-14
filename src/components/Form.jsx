import { useRef } from "react";
import emailjs from '@emailjs/browser';


function Form() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mqjdzol', 'template_j45rjdg', form.current, {
        publicKey: 'uuJ__sNyh0GKZ-zba',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="w-4/5 md:w-2/5">
      <section
        id="login"
        className="p-4 flex flex-col justify-center  mx-auto "
      >
        <div className="p-6 rounded">
          <form
            id="login_form"
            ref={form} 
            onSubmit={sendEmail}
            className="flex flex-col justify-center text-porttext"
          >
            <label className="text-sm font-medium">Name</label>
            <input
              className="px-2 py-1.5
          mb-3 mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400"
              type="text"
              name="username"
              placeholder="Your Name"
            />

            <label className="text-sm font-medium">Email</label>
            <input
              className="px-2 py-1.5
          mb-3 mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400"
              type="text"
              name="username"
              placeholder="Your Email"
            />
            <label className="text-sm font-medium">Message</label>
            <textarea
              className="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-porttext
          focus:ring-1
          focus:ring-porttext
          focus:invalid:border-porttext focus:invalid:ring-porttext"
              name="messages"
              placeholder="Write something"
            ></textarea>

            <button
              className="px-4 py-1.5 rounded-xl shadow-lg border-porttext border-2 font-medium text-porttext block transition duration-300 w-full hover:bg-porttext hover:text-white"
              type="submit"
            >
              <span id="login_process_state" className="hidden">
                Sending :)
              </span>
              <span id="login_default_state">
                Submit<span id="subtotal"></span>
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
