function Form() {
    return (
      <div className="w-4/5">
        <section
          id="login"
          className="p-4 flex flex-col justify-center  mx-auto"
        >
          <div className="p-6 rounded">
            <form
              id="login_form"
              action="api_login"
              method=""
              className="flex flex-col justify-center"
            >
              <label className="text-sm font-medium">Name</label>
              <input
                className="px-2 py-1.5
          mb-3 mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                type="text"
                name="username"
                placeholder="Your Name"
              />

              <label className="text-sm font-medium">Email</label>
              <input
                className="px-2 py-1.5
          mb-3 mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                type="text"
                name="username"
                placeholder="Your Email"
              />
              <label className="text-sm font-medium">Message</label>
              <textarea
                className="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                name="messages"
                placeholder="Write something"
              ></textarea>

              <button
                className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300"
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

export default Form
