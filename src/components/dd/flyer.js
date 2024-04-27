"use client"

import Link from "next/link";
import DDChars, {ddColor, ddColors4Kinds} from "@/components/dd/dd.chars";
import {useEffect} from "react";
import DDDj from "@/components/dd/djays";
import {randoArrGen, randomIndex} from "@/util";

export default function DDFLyear()
{
	const pttLabs = ['psychedelic', 'techno', 'trance'];

	let pttLabCur = -1;

	const
		psyColors = () =>
		{
			document.querySelectorAll('.ddchar').forEach((e => {

				e.style.transition = 'color .666s linear';
				e.style.color = ddColor();

			}))

			setTimeout( () => psyColors(), 1234)
		},

		pttLabel = () => {

			const cttl = document.querySelector('.duke-v.fade-in');
			if(cttl) cttl.classList.remove('fade-in');

			pttLabCur = pttLabCur >= 2 ? 0 : pttLabCur + 1;

			setTimeout(() => {

				const nttl = document.querySelector(`.duke-v.${pttLabs[pttLabCur]}`);
				nttl.classList.add('fade-in');

				setTimeout(() => pttLabel(), 2345 )

			}, 2456)

		}

	useEffect(() => {

		console.log(window.randomIndex = randomIndex, window.ddColor = ddColor, window.ddColors4Kinds = ddColors4Kinds, window.randoArrGen = randoArrGen)


		psyColors()

		pttLabel()

	}, []);


	return (

		<div className={'abs-center relative w-full max-w-full sm:max-w-screen-sm  h-auto aspect-square mx-auto '}>


			<Link href={'/duckedelic'}
			      className={'torigin-lt w-rotatoid abs-center block relative w-full max-w-full overflow-hidden sm:max-w-screen-sm  p-4 h-auto aspect-square mx-auto '}
			>
				<div className={'rounded-full border border-neutral-500 w-full h-full'} style={{
					backgroundImage: 'url(/vin1.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundBlendMode: 'overlay'
				}}></div>

				<DDChars texta={'Duke'} textb={'eLic'} className={'torigin-lt abs-center w-[200px] overflow-hidden  sm:w-[364px]'} style={{
					translate: '0 8px',
				}}/>
				<DDChars texta={'Duke'} textb={'aNce'} className={'torigin-lt abs-center w-[200px] overflow-hidden sm:w-[364px]'} style={{
					translate: '-8px 0',
					rotate: '90deg'
				}}/>

				<div
				     className={`text-white torigin-lt ddchar e-rotatoid text-[32px] w-[40px]  h-[40px] flex items-center justify-center abs-center border border-lime-500 rounded-full aspect-square`}>
					<span className={'translate-x-[2px]'}>D</span>
				</div>

				<img className="p-2  duke-v psychedelic object-contain w-full h-full abs-center" src="/2psy.png"></img>
				<img className="p-2  duke-v techno  object-contain  w-full  h-full  abs-center" src="/2tek.png"></img>
				<img className="p-2  duke-v trance  object-contain  w-full  h-full  abs-center" src="/2tra.png"></img>
			</Link>

			<DDDj/>

		</div>



	)
}