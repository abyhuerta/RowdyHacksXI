"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
	const ref = useRef(null);
    const { scrollYDiv } = useScroll({
		target: ref,
		offset: ["end end", "end end"]
	});
    const { scrollYProgress } = useScroll();
    const translateYPlanet = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    return (
        <section
            className="flex min-h-screen w-full items-center justify-center border-y-2 border-muted-foreground"
            id="About"
        >
            <motion.div
                className="night relative flex h-screen w-full flex-col justify-center"
                style={{
                    backgroundSize: useTransform(
                        scrollYProgress,
                        [0, 1],
                        ["100%", "1000%"],
                    ),
                }}
            >
                <div className="absolute w-full h-full border-2 border-white"></div>
                <motion.div 
                    className="absolute top-0 left-[20%] border-2 border-blue-500"
					ref={ref}
                    style={{
                        translateY: translateYPlanet
                    }}
                >
                    <Image
                        src={"/img/Planet-PNG-HD-Isolated.png"}
                        alt={"Planet"}
                        width={50}
                        height={50}
                        unoptimized={true}
                    />
                </motion.div>
                <div className="relative w-full flex flex-col items-center justify-center">
                    <h1 className="text-center text-4xl font-black md:text-5xl">
                        About Section
                    </h1>
                    <h3 className="px-4 text-center text-lg font-bold md:px-0 md:text-2xl">
                        Introduce the hackathon and its purpose! Make it sound
                        enticing
                    </h3>
                </div>
            </motion.div>
        </section>
    );
}