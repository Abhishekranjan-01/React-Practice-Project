import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col sm:flex-row gap-8 sm:gap-4 justify-center mt-20 sm:mt-60 max-sm:px-4">
        <section className="flex flex-col gap-4 text-gray-600 bg-gray-100 rounded-md px-6 py-8 font-semibold">
          <h1 className="font-extrabold text-3xl sm:text-4xl text-center text-gray-800">
            Get In Touch :
          </h1>
          <h2 className="text-center text-lg sm:text-xl font-semibold">
            Fill in the form to start a conversation
          </h2>
          <div className="flex justify-center w-fit gap-4">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <address>
              <span className="sm:w-1/2">
                Acme Inc, Street,State, Postal Code
              </span>
            </address>
          </div>
          <div className="flex justify-center w-fit gap-4">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <a href="tel:+441234567890">+44 1234567890</a>
          </div>
          <div className="flex justify-center w-fit gap-4">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <a href="mailto:info@acme.org">info@acme.org</a>
          </div>
        </section>
        <form
          className="flex flex-col gap-4 text-lg font-semibold w-full sm:w-1/4 self-center"
          action=""
        >
          <input
            type="text"
            placeholder="Full Name"
            className="px-2 py-2 sm:py-3 border border-gray-400 text-base rounded-md"
          />
          <input
            type="text"
            placeholder="Email"
            className="px-2 py-2 sm:py-3 border border-gray-400 text-base rounded-md"
          />
          <input
            type="text"
            placeholder="Telephone Number"
            className="px-2 py-2 sm:py-3 border border-gray-400 text-base rounded-md"
          />
          <button
            className="bg-orange-700 px-4 py-1 sm:py-2 font-semibold rounded-md text-gray-200 w-fit"
            type="submit"
          >
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
