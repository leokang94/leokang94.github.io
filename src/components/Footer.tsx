import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="py-6 flex flex-col items-center gap-2">
      <div className="flex justify-center items-center gap-4">
        <a href="mailto:acccdang8659@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" width={24} />
        </a>
        <a href="https://github.com/acccdang" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" width={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/kang-taehun-838325149/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" width={24} />
        </a>
        <a
          href="https://www.facebook.com/acccdang/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" width={24} />
        </a>
      </div>
    </footer>
  );
}
