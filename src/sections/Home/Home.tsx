import Typewriter from "typewriter-effect";
import DownloadButton from "./components/DownloadButton";
import ProfileEffect from "./components/ProfileEffect";
import ScrollDown from "./components/ScrollDown";
import SocialIcons from "../../components/SocialIcons";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <section id="home" className="flex flex-col items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center justify-center w-[90%]">
        <div className="flex mt-16 sm:mt-0 md:mt-24 lg:mt-20 justify-center sm:order-2 2xl:mr-5">
          <ProfileEffect />
        </div>
        <div className="flex-1 p-4 mt-16">
          <div className="space-y-3 sm:space-y-4 sm:mr-9 md:-mr-36 lg:-mr-28 xl:-mr-36">
            <motion.div
              className="flex font-medium font-serif -mx-5 sm:-mx-14 md:-mx-0 -mt-14 sm:-mt-5 lg:mt-0 -mb-3 md:mb-0
                text-lg sm:text-2xl md:text-3xl justify-center sm:justify-start text-gray-200 items-center"
              initial={{
                opacity: 0,
                x: isMobile ? 0 : -200,
                y: isMobile ? 100 : 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="sm:ml-7 md:ml-0">Hi, I'm</p>
              <p className="font-bold text-[#60a5fa] drop-shadow-sm">
                &nbsp;Abhinandan&nbsp;
              </p>
              <p>based in India&nbsp;</p>
            </motion.div>
            <motion.div
              className="flex flex-row justify-center sm:justify-start -mx-16 sm:-mx-20 md:-mx-0 sm:-ml-7 md:-ml-0
                text-2xl sm:text-3xl md:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.5rem] text-white text-shadow-neon star-wars-font"
              initial={{
                opacity: 0,
                x: isMobile ? 0 : -200,
                y: isMobile ? 100 : 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{ delay: 0.25, duration: 1 }}
              viewport={{ once: true }}
            >
              <Typewriter
                options={{
                  strings: ["web developer", "software engineer"],
                  delay: 50,
                  deleteSpeed: 30,
                  loop: true,
                  autoStart: true,
                }}
              />
            </motion.div>
            <motion.p
              className="-mx-7 md:mx-0 md:w-[70%] lg:w-[75%] 2xl:w-[70%] md:py-3 lg:py-4
                text-center text-sm sm:text-base sm:text-left font-thin"
              initial={{
                opacity: 0,
                x: isMobile ? 0 : -200,
                y: isMobile ? 100 : 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
            >
              I am a final-year Computer Science Engineering student with a
              strong foundation in algorithms, data structures, and full-stack
              development. I am passionate about building intelligent,
              real-world solutions that combine software engineering with
              emerging technologies such as Artificial Intelligence and data
              analytics.
              <br />
              <br />
              I have developed several impactful projects, including an
              Intelligent Talent Acquisition Assistant using GenAI, an
              AI-powered recruitment system that automates candidate sourcing,
              screening, engagement, and interview scheduling. My experience
              also includes building a full-stack SaaS attendance and sales
              management platform, a pharmaceutical product portfolio website
              with responsive design, and hardware-integrated systems such as an
              Arduino-based earthquake detector.
              <br />
              <br />
              Through academic training and international exposure programs, I
              have gained practical knowledge in AI, machine learning,
              cybersecurity, IoT, and data analysis. I am proficient in Java and
              modern web technologies (HTML, CSS, JavaScript), and I work
              comfortably with tools such as Git, MySQL, and Linux environments.
              <br />
              <br />
              I am driven by curiosity, continuous learning, and a desire to
              create efficient, scalable, and user-centric software solutions. I
              am currently seeking opportunities in software development where I
              can contribute to innovative projects while further strengthening
              my technical expertise.
            </motion.p>
            <div
              className="flex flex-col sm:flex-row items-center gap-10 sm:gap-[19rem] md:gap-[4.5rem] lg:gap-12
              pt-4 md:pt-0 sm:-mx-3 lg:-mx-0"
            >
              <DownloadButton />
              <motion.div
                className="-mx-24 sm:-mx-72 md:-mx-12 lg:mx-0 justify-start"
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: isMobile ? 0 : 0.5, duration: 1.5 }}
                viewport={{ once: true }}
              >
                <SocialIcons />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ScrollDown />
    </section>
  );
};

export default Home;
