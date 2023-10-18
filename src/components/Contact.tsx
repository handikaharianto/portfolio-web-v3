import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import Marquee from "react-fast-marquee";

function Contact() {
  return (
    <section>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="w-full sm:w-auto">
          <div className="pb-12 text-center">
            <a
              href="mailto:handikaharianto01@gmail.com"
              className="text-[min(5vw,_120px)] font-bold"
            >
              handikaharianto01@gmail.com
            </a>
          </div>
          <Marquee gradient pauseOnHover speed={40} gradientWidth={50}>
            <div className="flex w-full justify-around">
              <div>
                <a href="https://github.com/handikaharianto">
                  <FaGithub size={25} />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/handika-harianto-ew-jong/">
                  <FaLinkedinIn size={25} />
                </a>
              </div>
              <div>
                <a href="mailto:handikaharianto01@gmail.com">
                  <FaEnvelope size={25} />
                </a>
              </div>
              <div>
                <a href="https://github.com/handikaharianto">
                  <FaGithub size={25} />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/handika-harianto-ew-jong/">
                  <FaLinkedinIn size={25} />
                </a>
              </div>
              <div>
                <a href="mailto:handikaharianto01@gmail.com">
                  <FaEnvelope size={25} />
                </a>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Contact;
