import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function About() {
  return (
    <>
      <p className="opacity-0">for position</p>
      <p className="opacity-0">for position</p>
      <Navbar />
      <main className="flex flex-col sm:flex-row justify-evenly text-center mt-10 sm:mt-20">
        <img
          className="w-4/5 sm:w-1/3 max-sm:mx-auto"
          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
          alt="About_Hero_Image"
        />
        <div className="flex flex-col justify-center gap-5 sm:w-1/2">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
            React development is carried out by passionate developers
          </h1>
          <p className="text-gray-600 max-sm:px-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
            voluptatem accusantium nemo perspiciatis delectus atque autem!
            Voluptatum tenetur beatae unde aperiam, repellat expedita
            consequatur! Officiis id consequatur atque doloremque!
          </p>
          <p className="text-gray-600 max-sm:px-4">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
