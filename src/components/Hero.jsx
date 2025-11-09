import React, { useState } from "react";
import {
	motion,
	AnimatePresence,
	useMotionValue,
	useTransform,
} from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import heroPortraitself from "../assets/heroPortraitself.png";
import heroEllipse1 from "../assets/heroEllipse1.png";
import heroEllipse2 from "../assets/heroEllipse2.png";
import grayEllipse from "../assets/grayEllipse.png";
import ScrollFadeIn from "./ScrollFadeIn";

const Hero = () => {
	const [hovered1, setHovered1] = useState(false);
	const [hovered2, setHovered2] = useState(false);

	// 1. Motion Values to track mouse position
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	// 2. Map mouse position (0-width, 0-height) to a rotation range (-5 to 5 degrees)
	// The 'rotateX' and 'rotateY' properties are 3D rotations, creating the tilt effect.
	const rotateX = useTransform(y, [0, 100], [8, -5]);
	const rotateY = useTransform(x, [0, 100], [-5, 8]);

	// Function to capture the mouse position relative to the element
	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;

		// Calculate mouse position as a percentage (0 to 100)
		const mouseX = ((e.clientX - rect.left) / width) * 100;
		const mouseY = ((e.clientY - rect.top) / height) * 100;

		x.set(mouseX);
		y.set(mouseY);
	};

	// Function to reset values when mouse leaves
	const handleMouseLeave = () => {
		x.set(50); // Reset X to center (no rotation)
		y.set(50); // Reset Y to center (no rotation)
	};

	return (
		<ScrollFadeIn>
			<div
				id="about"
				className="mt-12 scroll-mt-12 relative px-[5vw] md:px-[8vw] lg:px-[10vw]"
			>
				<div
					className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 animate-float1 z-20"
					style={{ top: "10%", left: "5%" }}
				></div>

				<div
					className="absolute w-5 h-5 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 animate-float2 z-20"
					style={{ top: "25%", right: "10%" }}
				></div>
				<div
					className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-green-300 to-blue-400 animate-float3 z-20"
					style={{
						bottom: "20%",
						left: "15%",
					}}
				></div>
				<div
					className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 animate-float1 z-20"
					style={{ top: "60%", left: "40%" }}
				></div>
				<div
					className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-cyan-300 to-teal-400 animate-float2 z-20"
					style={{ bottom: "5%", right: "25%" }}
				></div>
				<div
					className="absolute w-5 h-5 rounded-full bg-gradient-to-br from-yellow-200 to-green-500 animate-float3 z-20"
					style={{ top: "10%", right: "40%" }}
				></div>

				<div className="grid grid-cols-1 md:grid-cols-2">
					{/* LEFT */}
					<div className="flex-1 order-2 md:order-1 items-center md:items-start flex flex-col space-y-10">
						<p className="font-[700] text-lg sm:text-4xl text-white pt-4 whitespace-nowrap relative z-30">
							I am <span className="text-[#B94A5B]">SHAHIR</span>{" "}
							ADIL SIZAN
						</p>

						<p
							className=" bg-[#2A2A3A94] rounded-lg text-[#FFFFFF] text-xs sm:text-lg md:text-sm md:font-[600] 
						tracking-widest leading-loose py-4 md:py-8 px-2 sm:px-4 lg:px-10 whitespace-nowrap relative z-30"
						>
							<span>Full-Stack Mobile App Developer</span>
							<span className="max-xl:hidden">{" | "}</span>
							<br className="xl:hidden" />
							<span>9+ Years Experience</span>

							<br />

							<span>Expert in Flutter & Node.js</span>
							<span className="max-xl:hidden">{" | "}</span>
							<br className="xl:hidden" />
							<span>40+ Successful Projects Delivered</span>
						</p>

						<div className="flex flex-col space-y-4 relative z-30">
							<p className=" text-white font-[600] text-sm sm:text-2xl xl:text-3xl text-center md:text-start ">
								Maximize Your Business
								<br />
								<span className="text-[#B94A5B]">
									Potential
								</span>{" "}
								with Custom Web
								<br />
								Development{" "}
								<span className="text-[#6A4FFF]">
									Solutions!
								</span>
							</p>

							<p className="text-sm sm:text-lg xl:text-2xl text-[#DBB9B9] text-center md:text-start">
								Take your business to the next level with
								<br /> custom web development solutions.
							</p>
						</div>

						{/* BUTTONS */}
						<div className="flex flex-col sm:flex-row items-center gap-5 relative z-30">
							{/* BUTTON 1 */}
							<motion.button
								className="px-8 py-3 font-semibold border-2 border-gray-800  overflow-hidden text-white bg-gradient-to-b from-[#B94A5B] via-[#6A4FFF] to-[#6A4FFF] rounded-md cursor-pointer
							hover:border-2 hover:border-white hover:border-l-gray-600/80 hover:border-b-gray-600/80"
								initial={{}}
								whileHover={{
									scale: 1.05,
								}}
								transition={{ duration: 0.3 }}
								onMouseEnter={() => {
									setHovered1(true);
								}}
								onMouseLeave={() => {
									setHovered1(false);
								}}
							>
								{/* TEXT */}
								<motion.span
									initial={{ y: 0 }}
									whileHover={{
										transition: {
											type: "spring",
											stiffness: 200,
											damping: 10,
										},
									}}
									className=" z-10 flex items-center gap-2"
								>
									{/* LEFT ICON */}
									<div className="w-5 flex justify-center items-center">
										<AnimatePresence>
											{!hovered1 && (
												<motion.div
													initial={{ x: -20 }}
													animate={{ x: 0 }}
													exit={{ x: -120 }}
													transition={{
														duration: 0.2,
													}}
												>
													<FaArrowRight />
												</motion.div>
											)}
										</AnimatePresence>
									</div>{" "}
									{/* TEXT */}
									<span className="whitespace-nowrap">
										Get in touch
									</span>
									{/* RIGHT ICON */}
									<div className="w-5 flex justify-center">
										<AnimatePresence>
											{hovered1 && (
												<motion.div
													initial={{ x: 120 }}
													animate={{ x: 0 }}
													exit={{ x: 120 }}
													transition={{
														duration: 0.2,
													}}
												>
													<FaArrowRight />
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								</motion.span>
							</motion.button>

							{/* BUTTON 2 */}
							<motion.button
								className="px-8 py-3 font-semibold border-2 border-gray-800 overflow-hidden text-white bg-gradient-to-b from-[#B94A5B] via-[#6A4FFF] to-[#6A4FFF] rounded-md cursor-pointer
							hover:border-2 hover:border-white hover:border-l-gray-600/80 hover:border-b-gray-600/80"
								initial={{}}
								whileHover={{
									scale: 1.05,
								}}
								transition={{ duration: 0.3 }}
								onMouseEnter={() => {
									setHovered2(true);
								}}
								onMouseLeave={() => {
									setHovered2(false);
								}}
							>
								{/* Text */}
								<motion.span
									initial={{ y: 0 }}
									whileHover={{
										transition: {
											type: "spring",
											stiffness: 200,
											damping: 10,
										},
									}}
									className=" z-10 flex items-center gap-2"
								>
									{/* LEFT ICON */}
									<div className="w-5 flex justify-center items-center">
										<AnimatePresence>
											{!hovered2 && (
												<motion.div
													initial={{ x: -20 }}
													animate={{ x: 0 }}
													exit={{ x: -120 }}
													transition={{
														duration: 0.2,
													}}
												>
													<FaArrowRight />
												</motion.div>
											)}
										</AnimatePresence>
									</div>{" "}
									<span className="whitespace-nowrap">
										Download CV
									</span>
									{/* RIGHT ICON */}
									<div className="w-5 flex justify-center">
										<AnimatePresence>
											{hovered2 && (
												<motion.div
													initial={{ x: 120 }}
													animate={{ x: 0 }}
													exit={{ x: 120 }}
													transition={{
														duration: 0.2,
													}}
												>
													<FaArrowRight />
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								</motion.span>
							</motion.button>
						</div>
					</div>

					{/* RIGHT */}
					<motion.div
						className="flex-1 order-1 md:order-2 flex items-center justify-center w-full"
						// Pass the transformed motion values to the style prop
						style={{ rotateX, rotateY, x: 0, y: 0 }} // x:0, y:0 is crucial to override default
						// Use the helper functions for interaction
						onMouseMove={(e) => {
							handleMouseMove(e);
						}}
						onMouseLeave={() => {
							handleMouseLeave();
						}}
						// Ensure smooth 3D perspective and transition when values change
						transition={{ type: "tween", duration: 0.3 }}
						whileHover={{ scale: 1.01 }} // Optional: Add a slight scale for visual feedback
					>
						<div className="relative w-55 h-55 md:w-90 md:h-90">
							<img
								src={heroPortraitself}
								className="w-full h-full object-cover rounded-full border-8 border-blue-700"
							/>
							<img
								src={heroEllipse1}
								className="absolute z-50 top-1/2 -left-1/7 transform -translate-y-20 scale-95 lg:scale-150"
							/>
							<img
								src={heroEllipse2}
								className="absolute z-50 top-1/2  -right-1/5 transform -translate-y-20 scale-95 lg:scale-150"
							/>
							<img
								src={grayEllipse}
								className="absolute top-1/2 -right-1/6 md:-right-1/12  transform -translate-y-1/2 -translate-x-1/4 scale-105  md:scale-150"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</ScrollFadeIn>
	);
};

export default Hero;
