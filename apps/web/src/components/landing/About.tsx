"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValueEvent } from "framer-motion";

export default function About() {
	const{ scrollYProgress: scrollPage } = useScroll();

	const inViewRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(inViewRef, {
		amount: "all",
	});
	const { scrollYProgress } = useScroll({
		target: inViewRef,
		offset: ["start end", "end start"]
	});
	useMotionValueEvent(scrollYProgress, "change",
		(latest) => {
			console.log(latest);
		}
	);

	useEffect(() => {
		console.log(`The section ${isInView ? "is" : "is not"} in view`);
	}, [isInView]);
	
	return (
		<section
			className="flex min-h-screen w-full items-center justify-center border-y-2 border-muted-foreground"
			id="About"
		>
			<motion.div
				className="night relative flex h-screen w-full flex-col border-4 justify-center"
				style={{
					backgroundSize: useTransform(
						scrollPage,
						[0, 1],
						["100%", "250%"],
					),
				}}
			>
				<motion.div 
					ref={inViewRef}
					className="relative w-full flex flex-col items-center border-4 justify-center"
					style={{
						perspective: "500px",
					}}	
				>
					<motion.div
						className="relative w-full flex flex-col items-center justify-center"
						style={{
							scale: useTransform(scrollYProgress, [0, 1], [0.5, 1.5]),
						}}
					>
						<h1 className="text-center text-4xl font-black md:text-5xl">
							About Section
						</h1>
						<h3 className="px-4 text-center text-sm font-bold md:px-0 md:text-2xl">
							Introduce the hackathon and its purpose! Make it sound enticing.
							The sky shimmered with colors unseen by ordinary eyes, as if the
							universe itself had decided to throw a grand celebration. Beneath
							the swirling lights, a small cat wearing a tiny backpack wandered
							through fields of luminous mushrooms, humming a tune only the stars
							could understand. Meanwhile, clocks melted on the hills like warm
							butter, and the rivers flowed upward toward distant moons. Somewhere
							nearby, a group of turtles debated the meaning of jazz music while
							sipping tea from acorn cups. Everything felt possible, and the air
							buzzed with invisible laughter, weaving dreams into the fabric of an
							endless twilight.
						</h3>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}