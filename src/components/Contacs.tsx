import { IconButton } from "@mui/material";
import {
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

const SocialContacts = () => {
  return (
    <div
      id="contacs"
      className="flex flex-wrap justify-center gap-5 p-5 bg-gray-100 rounded-lg md:gap-10 md:p-10"
    >
      <IconButton
        href="https://t.me/fluttriumchannel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="@fluttriumchannel"
      >
        <FaTelegramPlane className="text-black text-4xl md:text-6xl" />
      </IconButton>
      <IconButton
        href="https://github.com/orgs/Fluttrium"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="text-black text-4xl md:text-6xl" />
      </IconButton>
      <IconButton
        href="https://www.instagram.com/fluttrium_oficcial"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram className="text-black text-4xl md:text-6xl" />
      </IconButton>
      <IconButton
        href="https://www.youtube.com/channel/UCcBh05h-yxZOzXhnOz9ub5w"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Youtube"
      >
        <FaYoutube className="text-black text-4xl md:text-6xl" />
      </IconButton>
    </div>
  );
};

export default SocialContacts;
