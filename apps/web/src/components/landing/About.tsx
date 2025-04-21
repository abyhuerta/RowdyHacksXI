"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "end start"]
	});
	const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "1000%"]);
	const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-1500%"]);

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
				<motion.div
					className="fixed top-0 left-0 h-1 bg-blue-500 origin-left z-50"
					style={{
						width: "100%",
						scaleX: scrollYProgress
					}}
				/>
				<div ref={ref} className="absolute w-full h-full border-y-2 border-white">
					<motion.div 
						className="absolute top-[50%] left-[20%] border-2 border-blue-500"
						style={{
							translateY: translateY,
							translateX: translateX
						}}
					>
						<Image	
							src={"/img/planet.jpg"}
							alt={"Planet"}
							width={50}
							height={50}
							unoptimized={true}
						/>
					</motion.div>
				</div>

				<div className="relative w-full flex flex-col items-center justify-center">
					<h1 className="text-center text-4xl font-black md:text-5xl">
						About Section
					</h1>
					<h3 className="px-4 text-center text-lg font-bold md:px-0 md:text-2xl">
						Introduce the hackathon and its purpose! Make it sound enticing
					</h3>
				</div>
			</motion.div>
		</section>
	);
}
