import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import footerLogo from "../assets/task-logo.png";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-gray-300 text-black">
      <aside>
        <img src={footerLogo} className="w-[90px]" alt="footer logo" />
        <p className="font-medium">
          TaskUnity Ltd. <br />
          Providing reliable tech since 1992
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/zahurul-islams/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={20}></FaLinkedinIn>
          </a>
          <a
            href="https://www.facebook.com/zahurulislam.niloy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={20}></FaFacebookF>
          </a>
          <a
            href="https://github.com/zahurul-islam803"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20}></FaGithub>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
