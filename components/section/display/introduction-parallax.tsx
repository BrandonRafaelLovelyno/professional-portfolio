import Reveal from "@/components/animation/reveal";
import { ParallaxLayer } from "@react-spring/parallax";
import { twMerge } from "tailwind-merge";
import { FiGithub } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import Image from "next/image";

const SOCIAL_MEDIA: { link: string; Icon: IconType }[] = [
  { link: "https://www.instagram.com/brandonrafaell", Icon: FaInstagram },
  {
    link: "https://www.linkedin.com/in/brandon-rafael-lovelyno/",
    Icon: FiLinkedin,
  },
  { link: "https://github.com/BrandonRafaelLovelyno", Icon: FiGithub },
];

const IntroductionParallax = () => {
  return (
    <ParallaxLayer
      className={twMerge(
        "w-full h-full",
        "flex flex-col justify-center items-center",
        "bg-black"
      )}
      factor={1.2}
      offset={1.2}
    >
      <Reveal>
        <section
          className={twMerge(
            "w-full",
            "flex flex-col justify-center items-center gap-y-3"
          )}
        >
          <div
            className={twMerge(
              "w-full px-5 md:w-[80%] lg:w-[70%] h-full",
              "items-center justify-center",
              "gap-x-2 gap-y-8",
              "flex flex-col-reverse md:flex-row"
            )}
          >
            <div className={twMerge("flex-1", "flex flex-row gap-x-2")}>
              <div className={twMerge("flex flex-col gap-y-5")}>
                <div
                  className={twMerge(
                    "w-fit h-fit",
                    "flex flex-col gap-y-2",
                    "text-center md:text-left"
                  )}
                >
                  <p>
                    Hello! My name is Brandon. I am an undergraduate of
                    <span className="font-bold text-lg"> Gadjah Mada </span>
                    University studying{" "}
                    <span className="font-bold text-lg">
                      {" "}
                      Software Engineering.
                    </span>
                  </p>
                  <p>
                    Given a broad field, my speciality lies on Full stack
                    <span className="font-bold text-lg"> website </span>{" "}
                    engineering
                  </p>
                  <p>
                    Lately I have been focusing myself providing website for my{" "}
                    <span className="font-bold text-lg">clients</span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className={twMerge(
                "w-[200px] h-[200px] relative",
                "overflow-hidden rounded-full"
              )}
            >
              <Image
                src={
                  "https://res.cloudinary.com/dohewcyes/image/upload/v1724934241/image/person/rbepafjd2swgt1joq5fg.jpg"
                }
                fill
                alt="brandon"
                objectFit="cover"
              />
            </div>
          </div>
          <div
            className={twMerge(
              "w-full px-5 md:w-[80%] lg:w-[70%] h-full",
              "flex flex-row justify-center md:justify-start items-center gap-x-3"
            )}
          >
            {SOCIAL_MEDIA.map((social, index) => (
              <button
                key={index}
                className="p-2 rounded-full border-2 border-white"
                onClick={() => window.open(social.link, "_blank")}
              >
                {<social.Icon size={20} />}
              </button>
            ))}
          </div>
        </section>
      </Reveal>
    </ParallaxLayer>
  );
};

export default IntroductionParallax;
