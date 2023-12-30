import { Link } from "react-router-dom";
import Projects from "./Projects";
import Form from "../components/Form";
import Education from "../components/Education";

const Home = () => {
  return (
    <main className="p-2 md:p-6 my-6">
      <div className="grid grid-cols-12 md:gap-x-6 gap-y-6 md:gap-y-0">
        <div
          id="hero"
          className="flex col-span-12  md:col-span-6 border-2 border-zinc-700 p-3">
          <div className="my-auto">
            <h1 className="block text-3xl md:text-5xl mb-1 font-medium my-auto">
              Hi, I'm Sumit [👨🏿]
            </h1>
            <p className="block md:text-4xl my-auto">
              I am full stack Web developer.
            </p>
          </div>
        </div>
        <div
          id="skills"
          className="col-span-12 md:col-span-6 border-2 border-zinc-700 p-3">
          <h2 className="text-xl md:text-2xl font-medium mb-3 border-b-2 border-zinc-700 text-center">
            Skills
          </h2>
          <div>
            <div className="flex flex-wrap gap-x-3 text-xl font-medium p-2">
              <h2 className="">Frontend :</h2>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer">
                React
              </a>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer">
                Tailwind
              </a>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://www.javascript.com/"
                target="_blank"
                rel="noreferrer">
                JavaScript
              </a>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer">
                TypeScript
              </a>
            </div>
            <div className="flex flex-wrap gap-x-3 text-xl font-medium p-2">
              <h2 className="">Backend :</h2>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://nodejs.org/en/"
                target="_blank"
                rel="noreferrer">
                Node
              </a>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://expressjs.com/"
                target="_blank"
                rel="noreferrer">
                ExpressJS
              </a>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://www.python.org/"
                target="_blank"
                rel="noreferrer">
                Python
              </a>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://www.djangoproject.com/"
                target="_blank"
                rel="noreferrer">
                Django
              </a>
            </div>
            <div className="flex flex-wrap gap-x-3 text-xl font-medium p-2">
              <h2 className="">Database :</h2>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer">
                MongoDB
              </a>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://www.mysql.com/"
                target="_blank"
                rel="noreferrer">
                SQL
              </a>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://cloud.google.com/firestore"
                target="_blank"
                rel="noreferrer">
                Firestore
              </a>
            </div>
            <div className="flex flex-wrap gap-x-3 text-xl font-medium p-2">
              <h2 className="">Tools :</h2>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://git-scm.com/"
                target="_blank"
                rel="noreferrer">
                Git
              </a>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer">
                Github
              </a>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noreferrer">
                VScode
              </a>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://www.postman.com/"
                target="_blank"
                rel="noreferrer">
                Postman
              </a>
              <a
                className="underline text-teal-700 dark:text-teal-500"
                href="https://www.docker.com/"
                target="_blank"
                rel="noreferrer">
                Docker
              </a>
            </div>
          </div>
        </div>
        <div
          id="education"
          className="col-span-12 md:col-span-8 border-2 border-zinc-700 p-3 mt-6">
          <h2 className="text-xl md:text-2xl font-medium mb-3 border-b-2 border-zinc-700 text-center">
            Education
          </h2>
          <Education />
        </div>
        <div
          id="Awards"
          className="col-span-12 md:col-span-4 border-2 border-zinc-700 p-3 mt-6">
          <h2 className="text-xl md:text-2xl font-medium mb-3 border-b-2 border-zinc-700 text-center">
            Certificates
          </h2>
          <h1 className="text-center">Work in Progress...</h1>
        </div>
        <div
          id="projects"
          className="col-span-12 border-2 border-zinc-700 p-3 mt-6">
          <h2 className="text-xl md:text-2xl font-medium mb-3 border-b-2 border-zinc-700 text-center">
            Projects
          </h2>
          <Projects />
        </div>
        <div
          id="contact"
          className="col-span-12 border-2  border-zinc-700 p-3 mt-6">
          <h2 className="text-xl md:text-2xl font-medium mb-3 border-b-2 border-zinc-700 text-center">
            Contact
          </h2>
          <div className="grid grid-cols-12 md:gap-x-6 gap-y-3">
            <div className="col-span-12 md:col-span-3 ">
              <p className="text-xl">Reach out to me at</p>
              <p className="mb-1 mt-2">
                Mail:{" "}
                <Link
                  to="mailto:sumitcar98@gmail.com"
                  target="_blank"
                  className="uppercase text-teal-700 dark:text-teal-500">
                  sumitcar98@gmail.com
                </Link>
              </p>
              <p className="mb-1">
                LinkedIn:{" "}
                <Link
                  to="https://www.linkedin.com/in/sumit-kumar-921855292"
                  target="_blank"
                  className="uppercase text-teal-700 dark:text-teal-500">
                  sumit-kumar
                </Link>
              </p>
              <p className="mb-1">
                Github:{" "} 
                <Link
                  to="https://github.com/sumit0o0"
                  target="_blank"
                  className="uppercase text-teal-700 dark:text-teal-500">
                  sumit0o0
                </Link>
              </p>
              <p className="text-center my-2 md:hidden">OR</p>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
