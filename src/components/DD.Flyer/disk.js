import Image from 'next/image'
import {useEffect, useRef, useState} from "react";
import {animate, AnimationControls} from "framer-motion";


export default function DDDisk({children, className})
{

	let looping, playing = true, lastDegPos = 0;

	const
		diskRef = useRef(),
		tttPics = [],


		randomDegPos = (prev = lastDegPos, range = 30) =>
		{
			let x;
			do{ x = Math.round(Math.random() * 360) } while (Math.abs(x - prev) <= range)
			lastDegPos = x;
			console.log(`lastDegPos ${lastDegPos}`)
			return x + 'deg'
		},

		makeAniSeq = () => tttPics.flatMap(pic => [
			[
				pic,
				{
					// scale: 1.1,
					rotate: randomDegPos()
				},
				{
					duration: 0,
					delay: 1
				}
			],
			[
				pic,
				{opacity: 1},
				{
					duration: 1,
					delay: 1
				}
			],
			[
				pic,
				{opacity: 0},
				{
					duration: 2.5,
					delay: 0.5
				}
			]
		]),

		tttAnimator = async (stop) => {

			async function loop()
			{
				console.log(`loop start`);

				let aniSeq = makeAniSeq();
				looping = true
				const loopFn = async () =>
				{
					await animate(aniSeq)
					if (playing) {
						loop()
					} else {
						looping = false
					}
				}

				// stop()
				loopFn()
			}


			loop()
		},

		labTran = {duration: 3,  repeatDelay: 8, ease: 'linear', repeat: Infinity, repeatType: "loop"},

		labAnim = async (d) => {

			[
				{scale: 1.1, rotate: Math.random() * 360 + 'deg', filter: `brightness(1)`},
			]
		}
			// opacity: [0,0.5,1,0.5,0],
			// opacity: [1,1,1,1,1],
			// hueRotate: ['0deg','90deg','180deg','-90deg','0deg'],
			// color: [0,0.5,1,0.5,0].map(c => clrRCycler.next().value)


	useEffect(() =>
	{
		diskRef.current.querySelectorAll('img.dds').forEach(i=>tttPics.push(i));
	 	tttAnimator()
		// console.log(`suko `, window.animate = animate, window.pics = tttPics )
	}, []);


	return 	<div
				ref={diskRef}
				className={'absolute e-rotatoid rounded-full border border-neutral-500 w-full h-full inset-0 '}
				style={{
					backgroundImage: 'url(/disk_1_tr80.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundBlendMode: 'overlay',
					rotate: '0deg'
				}}
			// animate={{rotate: ['-360deg','0deg']}}
			// transition={{duration: 7.77,  ease: 'linear', repeat: 1, repeatType: 'loop'}}
		>

			<Image
				src="/tttPsy-club.gif"
				className="p-2 dds origin-center object-contain absolute w-full h-full inset-0  opacity-0"
				style={{scale: (1.1) }}
				width={1960}
				height={1960}
				alt={'party Psychedelic'}
			/>

			<Image
				src="/tttTek-club.gif"
				className="p-2  dds  origin-center object-contain absolute w-full h-full inset-0 opacity-0 "
				style={{scale: (1.1) }}
				width={1960}
				height={1960}
				alt={'party Techno'}
			/>

			<Image
				src="/tttTra-club.gif"
				className="p-2  dds  origin-center object-contain absolute w-full h-full inset-0 opacity-0 "
				style={{scale: (1.1) }}
				width={1960}
				height={1960}
				alt={'party Trance'}
			/>


			{children}

	</div>
}