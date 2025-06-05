"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValueEvent } from "framer-motion";

export default function Partners() {
	const{ scrollYProgress: scrollPage } = useScroll();

	return (
		<section className="flex min-h-screen w-full items-center justify-center border-y-2 border-muted-foreground">
			<motion.div
				className="night relative flex h-screen w-full flex-col justify-center items-center"
				style={{
					backgroundSize: useTransform(
						scrollPage,
						[0, 1],
						["100%", "250%"],
					),
				}}
			></motion.div>
		</section>
	);
}
