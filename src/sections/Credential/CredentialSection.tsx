import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { credentialsData } from "../../data/credentialsData";
import { useHoverSound } from "../../hooks/useHoverSound";

const CredentialSection = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const { onMouseEnter } = useHoverSound();

    return (
        <section id="credential">
            <motion.hr
                className="my-24"
                initial={{ width: "0%", marginLeft: "50%" }}
                whileInView={{ width: "100%", marginLeft: "0%" }}
                transition={{ duration: isMobile ? 2 : 1.5 }}
                viewport={{ once: true }}
            />
            <motion.div
                initial={{
                    opacity: 0,
                    y: -100,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
            >
                <p className="sm:text-xl my-2 font-bold font-serif text-yellow-500 text-center">
                    Episode IV
                </p>
                <h2 className="text-yellow-500 star-wars-font text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] text-center">
                    credential
                </h2>
                <p className="mt-4 mb-12 text-yellow-500 text-sm sm:text-base text-center">
                    Professional & educational backgrounds and certifications
                </p>
            </motion.div>

            <div className="pb-20">
                <VerticalTimeline lineColor="#eab308">
                    {credentialsData.map((item, index) => (
                        <VerticalTimelineElement
                            key={item.id}
                            position={index % 2 === 0 ? "left" : "right"}
                            contentStyle={{
                                background: "rgba(var(--color-project-bg-start), 0.8)",
                                color: "#fff",
                                boxShadow: "0 0 15px rgba(234, 179, 8, 0.3)",
                                border: "1px solid rgba(234, 179, 8, 0.5)",
                                borderRadius: "1rem",
                            }}
                            contentArrowStyle={{ borderRight: "7px solid rgba(var(--color-project-bg-start), 0.8)" }}
                            date={item.date}
                            iconStyle={{ background: "#1e293b", color: "#eab308", border: "2px solid #eab308" }}
                            icon={<item.icon />}
                        >
                            <div onMouseEnter={onMouseEnter}>
                                <h3 className="vertical-timeline-element-title font-bold text-lg sm:text-xl">
                                    {item.title}
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle italic text-yellow-500">
                                    {item.organization}
                                </h4>
                                {item.location && <p className="text-sm opacity-80">{item.location}</p>}
                                {item.desc && <p className="font-light text-sm sm:text-base !mt-4">{item.desc}</p>}
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default CredentialSection;
