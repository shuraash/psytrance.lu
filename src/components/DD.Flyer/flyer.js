"use client"

import Link from "next/link";
import {motion} from "framer-motion";
import DDDisk from "@/components/DD.Flyer/disk";


export default function DDFLyear({className})
{

	return (
		<div className={'abs-center relative w-full max-w-full sm:max-w-screen-sm  h-auto aspect-square mx-auto '}>


			<Link href={'/duckedelic'}
			      className={'torigin-lt  abs-center block relative w-full max-w-full overflow-hidden sm:max-w-screen-sm  p-4 h-auto aspect-square mx-auto '}
			>

				<DDDisk>

					<div className={'p-6 bg-red-900 text-white'}>HUY</div>


				</DDDisk>

			</Link>

		</div>
	)
}