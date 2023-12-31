import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t p-2 md:p-6 border-zinc-900 dark:border-zinc-100">
      <div className="flex justify-between">
        <Link to="/ps" className="text-3xl">
          👨🏿
        </Link>
        <p className="text-center my-auto">Made with ❤️ by Sumit</p>
      </div>
    </footer>
  );
};

export default Footer;
