import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const APIKEY = import.meta.env.VITE_API_KEY;

type Props = {};

const Form = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const alert = useRef(null);
  const form = useRef<HTMLFormElement | null>(null);
  const showAlert = () => {
    (alert?.current as HTMLElement | null)?.classList.remove("hidden");
    setTimeout(() => {
      (alert?.current as HTMLElement | null)?.classList.add("hidden");
    }, 3000);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = form?.current;
    if (formElement) {
      emailjs
        .sendForm(
          "service_cd3fqbf",
          "template_3gff3sj",
          formElement,
          APIKEY
        )
        .then(
          (res) => {
            setName("");
            setEmail("");
            setMessage("");
            showAlert();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="col-span-12 md:col-span-9 relative">
      <span
        ref={alert}
        className="alert text-3xl w-full border-2 px-2 py-1 border-green-500 text-green-600 absolute right-0 bottom-3 bg-white dark:bg-zinc-900 hidden">
        Form Submited!
      </span>
      <p className="text-xl">Send me a message</p>
      <input
        className="w-full p-2 mb-3 border-2 border-zinc-700 bg-transparent focus:outline-none"
        type="text"
        name="user_name"
        placeholder="Name*"
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
        maxLength={20}
      />
      <input
        className="w-full p-2 mb-3 border-2 border-zinc-700 bg-transparent focus:outline-none"
        type="email"
        placeholder="Email*"
        name="user_email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        maxLength={40}
      />
      <textarea
        className="w-full p-2 mb-3 border-2 border-zinc-700 bg-transparent focus:outline-none"
        placeholder="Message*"
        name="message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        required
        rows={5}
        maxLength={500}></textarea>
      <button
        className="w-full p-2 mb-3 border-2 border-zinc-700 bg-transparent focus:outline-none"
        type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
