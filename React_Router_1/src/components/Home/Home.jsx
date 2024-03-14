import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <>
      <p className="opacity-0">for position</p>
      <p className="opacity-0">for position</p>
      <Navbar />
      <main className="flex flex-col items-center gap-40 sm:gap-60">
        <section className="flex flex-col sm:flex-row items-center justify-between mt-20">
          <img
            className="w-3/4 sm:w-2/5"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="Hero_Home_Img_1"
          />

          <div className="w-fit flex max-sm:items-center flex-col gap-4 sm:gap-2">
            <h1 className="font-bold text-3xl sm:text-5xl">Download Now</h1>
            <h2 className="font-bold text-lg sm:text-3xl text-center sm:text-end">
              Lorem Ipsum
            </h2>
            <span className="w-fit self-end px-6 py-2 rounded-md gap-2 bg-[#c2410C] flex justify-center max-sm:mx-auto">
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              <button className="text-lg text-gray-200 font-bold" type="button">
                Download
              </button>
            </span>
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="flex flex-col items-center max-sm:gap-4">
            <img
              className="w-4/5 sm:w-3/5"
              src="https://i.ibb.co/2M7rtLk/Remote1.png"
              alt="Hero_Home_Img_1"
            />
            <h2 className="font-semibold text-2xl sm:text-5xl text-center">
              Lorem ipsum Yojo
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
