import React, { useState } from "react";
import { LuJoystick } from "react-icons/lu";
import contactmeImage from "../assets/contactmeImage.jpg";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFadeIn from "./ScrollFadeIn";
import ScrollSlide from "./ScrollSlide";

const ContactMe = () => {
	const [hovered1, setHovered1] = useState(false);

	return (
		<ScrollFadeIn>
			<div className="fadeInAnimation mt-24 flex flex-col md:flex-row gap-5 px-[5vw] md:px-[8vw] lg:px-[10vw]">
				{/* LEFT */}
				<div className="w-full md:w-1/3">
					{/*⚠️ uporer div e `h-full` dile image `shrinked` hoye jay. 
			Dont use `h-full` in direct children of `flex-row` parent.
			`flex-row` parent automatically stretches its direct children to `equal` heights */}
					<div className="h-full w-full">
						<img
							className="w-full h-full object-cover rounded-xl shadow-xl"
							src={contactmeImage}
						/>
					</div>
				</div>

				{/* RIGHT */}
				<div className="w-full md:w-2/3 flex flex-col items-center md:items-start gap-3">
					<p className="text-white font-[700] text-lg md:text-xl flex items-center max-md:justify-center gap-2">
						<span className="text-[#B94A5B]">
							<LuJoystick />
						</span>{" "}
						<span className="text-[#B94A5B]">SHAHIR</span> ADIL
						SIZAN
					</p>

					<p className="text-white font-[700] text-lg md:text-xl text-center md:text-left">
						A Full Stack Web Developer
					</p>

					<p className="text-gray-300 text-center md:text-left text-sm">
						As a Full Stack Web Developer, I am responsible for
						designing and building complete web applications from
						start to finish. This includes creating user interfaces,
						writing server-side code, and managing databases. With
						my comprehensive knowledge of the entire web development
						process, I can efficiently turn ideas into fully
						functional websites or applications.
					</p>

					<motion.button
						className="px-8 py-3 w-fit font-semibold border-2 border-gray-800 overflow-hidden text-white bg-gradient-to-b from-[#B94A5B] via-[#6A4FFF] to-[#6A4FFF] rounded-md cursor-pointer
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
											transition={{ duration: 0.2 }}
										>
											<FaArrowRight />
										</motion.div>
									)}
								</AnimatePresence>
							</div>{" "}
							{/* TEXT */}
							Contact me
							{/* RIGHT ICON */}
							<div className="w-5 flex justify-center">
								<AnimatePresence>
									{hovered1 && (
										<motion.div
											initial={{ x: 120 }}
											animate={{ x: 0 }}
											exit={{ x: 120 }}
											transition={{ duration: 0.2 }}
										>
											<FaArrowRight />
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</motion.span>
					</motion.button>

					{/* <button className="w-fit self-center md:self-start px-3 py-2 rounded-xl text-white flex items-center gap-3 bg-gradient-to-b from-[#B94A5B] via-[#6A4FFF] to-[#6A4FFF]">
					Contact me{" "}
					<span>
						<FaArrowRight />
					</span>
				</button> */}
				</div>
			</div>
		</ScrollFadeIn>

		//⚠️⚠️⚠️ By default, Flexbox gives its direct children the property `align-items: stretch`.
		// This means the LEFT sub-div (md:w-1/3) automatically stretches to match the height
		// of the tallest item (the RIGHT sub-div). You don't need `h-full` on the `direct child` LEFT column.

		// With a Flex parent (flex-row), you usually don't need to set h-full on the direct children
		// to make them equal height; Flexbox does this for free. You only need h-full on the
		// inner elements to ensure they fill the container that Flexbox has already stretched.
	);
};

export default ContactMe;
