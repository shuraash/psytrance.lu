
"use client"

import {animate, motion, useDragControls} from "framer-motion";

import DDDisk from "@/components/DD.Flyer/disk";
import {useEffect, useRef} from "react";
import DjDrops from "@/components/dd/djays";
import Link from "next/link";
import {twMerge} from "tailwind-merge";


const PsycoTitlo = ({text, className = '', charsClass = ''}) => {

	const chars = text.split('');
	const ref = useRef()


	useEffect(() =>
	{
		const
			fs = parseFloat(getComputedStyle(ref.current).getPropertyValue('font-size'))

		ref.current.querySelectorAll('.psy-char2').forEach(c => c.style.translate = `0 ${(fs/4)}px`)

	}, [text])

	return <div ref={ref} className={twMerge(`w-fit h-fit min-w-fit flex items-center justify-evenly gap-x-1`, className)}>

			{chars.map((c,i) => <span key={c+i} className={twMerge(`w-fit h-fit min-w-fit psy-char2`, charsClass)}>{c}</span>)}

	</div>

},

PsycoTitloZ = (className) => {

	const ddRef = useRef()


	return <div ref={ddRef} className={twMerge(`psycod text-3xl font-semibold text-orange-500   flex gap-x-1 relative`,className)}>
		<PsycoTitlo text='Duke' className={''}/>
		<PsycoTitlo text='Delic' className={''}/>
		<PsycoTitlo text='Duke' className={''}/>
		<PsycoTitlo text='Dance' className={''}/>
	</div>

}




export default function TESTPG() {

	const ddRef = useRef()



	//
	// useEffect(() =>
	// {
	// 	dj = document.querySelector('.djcard');
	//
	// 	zeroS = [dj, {opacity: 0, scale: 0, left: '50%', top: '50%',  x: '-50%', y: '-50%' }, {duration: 0}],
	//
	// 	aniS = [
	//
	// 		zeroS,
	// 		//
	// 		// [dj, {
	// 		// 	left: '40%', top: '45%',
	// 		// 	scale: 0.4, opacity: 0.4}, {duration: 0.7, ease: 'linear'}],
	//
	// 		[dj, {
	// 			left: '2%', top: '2%', x: 0, y: 0,
	// 			scale: 1, opacity: 1}, {duration: 3, ease: 'easeInOut'}]
	//
	// 	]
	//
	// 	console.log(window.animate = animate);
	// 	animate(...zeroS)
	//
	// }, []);


	return ( <>

	<Link href={'/duckedelic'}
	      className={'mt-1 flex flex-wrap sm:flex-nowrap gap-x-5 gap-y-0 w-full items-center justify-center  text-center sm:text-left'}
	>

		{/*<div className={'glimen-b1  text-lg  text-orange-200  w-full sm:w-fit '}>*/}
		{/*    NEXT EVENT*/}
		{/*</div>*/}


		<PsycoTitloZ/>

		<div className={ ' text-base  text-emerald-300  w-fit shrink-0'}>
			22 of JUNE 17:00  -  23 of JUNE 18:00
		</div>

	</Link>


			<figure   className={'abs-center w-full md:max-w-screen-md h-auto mx-auto aspect-square p-2 md:p-0 !fixed '}>
				<div className={'relative w-full h-full border'}>

					<DDDisk className={'e-rotatoid  '}/>


					<DjDrops/>

				</div>
			</figure>

			{/* <button className={'px-4 py-2 bg-neutral-300 rounded-xl fixed bottom-10 left-6'}*/}
			{/*onClick={e => animate(aniS)}*/}
			{/*>*/}
			{/*	ANIMATE</button>*/}

	</>

	)

}


