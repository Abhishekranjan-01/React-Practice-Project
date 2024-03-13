import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Github() {
  const [githubData, setGithubData] = useState(false);

  useEffect(() => {
    async function getGithubData() {
      const response = await fetch(
        "https://api.github.com/users/abhishekranjan-01"
      );

      const data = await response.json();
      setGithubData({
        profilePicture: data.avatar_url,
        userId: data.login,
        followers: data.followers,
        following: data.following,
        publicRepos: data.public_repos,
        url: data.html_url,
      });
    }
    if (!githubData) {
      getGithubData();
    }

    return () => {
      //   setGithubData(false);
      console.log("Comp Died");
    };
  });
  return (
    <>
      <Navbar />
      <main className="flex justify-between sm:flex-row w-full bg-gray-700 sm:py-10 sm:px-4 sm:w-10/12 mx-auto">
        <div className="w-full">
          <img
            className="sm:w-2/4 rounded-lg"
            src={githubData.profilePicture}
            alt="Profile Picture"
          />
          <div className="w-fit text-center sm:text-2xl font-semibold text-gray-200">
            <h2>userId:</h2>
            <h2>{githubData.userId}</h2>
          </div>
        </div>

        <section className="flex flex-col justify-evenly w-full">
          <div className="flex w-1/2 justify-between sm:text-xl font-semibold text-gray-200">
            <div className="flex flex-col">
              <h2>Followers</h2>
              <h2 className="text-center">{githubData.followers}</h2>
            </div>
            <div>
              <h2>Following</h2>
              <h2 className="text-center">{githubData.following}</h2>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-10 sm:text-xl font-semibold text-gray-200">
              <h2>Public Repositories: </h2>
              <h2>{githubData.publicRepos}</h2>
            </div>
            <div className="flex flex-row gap-10 sm:text-xl font-semibold text-gray-200">
              <h2>URL: </h2>
              <a href={githubData.url}>{githubData.url}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
