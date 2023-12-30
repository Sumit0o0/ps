import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t p-2 md:p-6 border-zinc-900 dark:border-zinc-100">
      <div className="flex justify-between">
        <Link to="/" className="text-3xl">
          👨🏿
        </Link>
        <p className="text-center">Made with ❤️ by Sumit</p>
      </div>
    </footer>
  );
};

export default Footer;
