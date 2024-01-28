import Footer from "./Footer"

function Contact() {
    return (
      <div className="h-[calc(100vh-100px)] flex flex-col justify-end">
        <div className="h-full text-center py-5 text-2xl font-bold">
          Contact
        </div>

        <div className="container mx-auto">
          <form
            action=""
            method=""
            className="max-w-md mx-auto p-4 bg-slate-100 shadow-md rounded-md"
          >

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-3 py-2 border rounded-md"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-400 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
}

export default Contact
