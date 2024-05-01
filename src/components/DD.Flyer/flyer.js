"use client"

import Link from "next/link";

import DDDisk from "@/components/DD.Flyer/disk";
import PsyText from "@/components/psyText";
import {motion} from "framer-motion";

export default function DDFLyear({className})
{

	return (
		<motion.div
			className={'abs-center relative w-full max-w-full sm:max-w-screen-sm  h-auto aspect-square mx-auto opacity-0'}
			initial={{x: '-50%', y: '-50%', opacity: 0, scale: 1}}
			animate={{opacity: 1, scale: 1, transition: {duration: 1.666}}}
		>


			<Link href={'/duckedelic'}
			      className={'torigin-lt  abs-center block relative w-full max-w-full overflow-hidden sm:max-w-screen-sm  p-4 h-auto aspect-square mx-auto '}
			>

				<DDDisk>


				</DDDisk>

			</Link>

		</motion.div>
	)
}