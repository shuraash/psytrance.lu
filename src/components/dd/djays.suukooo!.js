"use client"

import {useEffect, useRef, useState} from "react";
import {animate} from "framer-motion";
import {arrRandomCycler, randomInt} from "src/util";
import {psyColors, psyShadows} from "src/components/psyColors";
import {twMerge} from "tailwind-merge";


const

	ddDJColor = arrRandomCycler(psyColors, 5)    ,

	djPoses = ['dj-t-l', 'dj-t-r', 'dj-b-l', 'dj-b-r'],

	djPose = arrRandomCycler(djPoses, 2),

	// nextDJ = () => ({
	// 	dj: ddDJs.next().value,
	// 	color: ddDJColors.next().value,
	// 	ccolor: ddDJColors.next().value,
	// 	bcolor: ddDJColors.next().value,
	// 	pos: djPose.next().value
	// }),

	//bublerPics =  arrRandomCycler(['/bubble-w.webp',  '/bubble-3.png', '/bubble-a.png'], 1),
	// bublerPics =  arrRandomCycler(Array.from({length: 9}, (_, i) => `/bubbles/00${i+1}.png`), 1),
	bublerPics =  arrRandomCycler([`/bubbles/002.png`], 1),
	bublerHues =  arrRandomCycler([0, 50, 100, 150, 200, 250, 300], 4),

	pos2av = {
		'dj-t-l': ['2%',  '2%',   '50%', '25%',   '0%',    '0%'],
		'dj-t-r': ['98%', '2%',   '75%', '25%',   '-100%',  '0%'],
		'dj-b-l': ['2%',  '98%',  '50%', '75%',   '0%',    '-100%'],
		'dj-b-r': ['98%', '98%',  '75%', '75%',   '-100%', '-100%']
	},

	shadColors =  arrRandomCycler(psyShadows, 2),

	genShadow = () =>
	{
		let clr = shadColors.next().value

		return `0 0  2px ${clr[0]},
			    0 0  5px ${clr[0]},
			    0 0 10px ${clr[1]},
			    0 0 20px ${clr[2]}`
	},

	// opaShadow = `0 0  2px 00000000,
	// 		    0 0  5px 00000000,
	// 		    0 0 10px 00000000,
	// 		    0 0 20px 00000000`
	opaShadow = `0 0 0px 00000000,
			    0 0 0px 00000000,
			    0 0 0px 00000000,
			    0 0 0px 00000000`,


	aniSeq = (pos, delay) =>  [
//initial
		[ {opacity: 0, scale: 0, left: '50%', top: '50%',  x: '-50%', y: '-50%'}, {duration: 0} ],
//animate
		[ {
			left: pos2av[pos][0], top: pos2av[pos][1],
			x:    pos2av[pos][4], y:   pos2av[pos][5],
			opacity: 1, scale: 1,

			//randomInt(100,125)/100
		},
			{ duration: 3, ease: 'easeInOut', delay: 0}
		],

		// [ { left: pos2av[pos][2], top: pos2av[pos][3], scale: 10, opacity: 0},
		// 	{duration: 1.5, ease: 'linear', delay: 6}
		// ],

		[{scale: 1.5}, {duration: 3, delay: 1, ease: 'easeIn'}],

		[{scale: 3, opacity: 0}, {duration: 1, ease: 'linear'}]
	],

	// suka.push(
	// 	[djRef.current.querySelector('.cardad'),
	// 		{opacity: 0}, {at: '-1.7', duration: 0.8}
	// 	]
	// )
	//
	// suka.push(
	// 	[djRef.current.querySelector('.cardad'),
	// 		{opacity: 1}, {duration: 1, delay: 2}
	// 	]
	// )
	// //console.log( window.pizda = suka)

	genDJ = (dj, d) => ({
		dj: dj,
		colors: [ddDJColor.next().value, ddDJColor.next().value],
		aniSeq: aniSeq(djPose.next().value,   d),
		//aniSeq: aniSeq('dj-t-r',  0), //djData ? 1 : 9)
		bubblePic: bublerPics.next().value,
		bubbleHue: bublerHues.next().value
	})



export default function DjDrops({className, djCalss, bljad = true})
{
	let djCycler;

	const

		[isPlay, setIsPlay] = useState(),

		djRef = useRef(),

		ddDjs =  [
			['Shiva ASH', 'LU'],
			['Psykorax', 'LU'],
			['Minispicer', 'BE'],
			['MLove', 'BE'],
			['Anormic', 'LU'],
			['GriSha', 'UK'],
			['Random DJ 1', 'LU'],
			['Random DJ 2', 'DE'],
			['Random DJ 3', 'LU'],
			['Random DJ 4', 'FR'],
			['Random DJ 5', 'EE'],
		].map( (dj, i) => genDJ(dj, i !== 0 ? 1 : 11), 1),



		aniPlay = async (rad) =>
		{

				djCycler = arrRandomCycler(rad, 3)

			let suka;

				do
				{
			        suka = djCycler.next().value;

					console.log(window.sss = suka.pizda, window.animate = animate);

					await animate(suka.pizda)


				//	await (new Promise( e => setTimeout( e, 3000) ))

				}
				while (isPlay && suka)


			//requestAnimationFrame(() => setDjData(randomDJ()))
		}

	useEffect(() =>
	{
		setIsPlay(bljad)

		if(bljad)
		{

			let rad = [...djRef.current.querySelectorAll('.dj-card')].map( (r,i) => ({...r, pizda: ddDjs[i].aniSeq.map( x => [r, ...x])  }))

			if (rad.length)
			{

				//console.log(window.rad = rad)

				//		if(bljad)
				aniPlay(rad)
			}
		}
		else alert('piaidjhpiadj !!!!!')

	}, [isPlay] );

	return  <section ref={djRef}>

		{/*{Array.from({length: 9}, (_, i) => <img src={``} alt='prepic' className={`absolute w-0 h-0 opacity-0`}/>).map( e => e)}*/}

		{ isPlay

			? <>

					{ddDjs.map( (djData, i) =>

						<figure
							key={'dj'+i}
							className={twMerge(`opacity-0 scale-0  dj-card  overflow-hidden absolute font-['Changa']  
								w-fit min-w-[20%] md:min-w-[25%] h-auto aspect-square z-50 rounded-full font-['Changa'] flex items-center justify-center`, className)}
						>
								<img alt='bubble' src={djData.bubblePic}
								     // style={{animation: `ohuevator ${randomInt(7, 25)/10}s linear infinite ${['','reverse'][randomInt(0,1)]},
								     //                     e-rotatoid ${randomInt(80, 100)/10}s linear infinite ${['','reverse'][randomInt(0,1)]} ,
								     //                     e-rotatoid-x ${randomInt(20, 40)/10}s ease-in-out infinite ${['alternate','alternate-reverse'][randomInt(0,1)]},
								     //                     e-rotatoid-y ${randomInt(20, 40)/10}s ease-in-out infinite ${['alternate','alternate-reverse'][randomInt(0,1)]} `,
									 //          animationComposition: 'add'
										// 	}}
					                     // style={{animation: `e-rotatoid ${randomInt(80, 100)/10}s linear infinite ${['','reverse'][randomInt(0,1)]}`,
						                 //     // animationComposition: 'add'
					                     // }}
									className='djBubbler abs-full opacity-80 '
								/>

								<div className={'px-5 py-1 cardad rounded-xl opacity-1 w-fit h-fit leading-none text-center abs-center'}>
									<div className={twMerge('text-[18px] sm:text-[20px] md:text-[28px]',djCalss)} style={{textShadow: genShadow(), color: djData.colors[0]}}>{djData.dj[0]}</div>
									<div className={'mt-1 text-[14px] sm:text-[16px] md:text-[20px] '} style={{textShadow: "none", color: djData.colors[1]}}>{djData.dj[1]}</div>
								</div>
						</figure>

					)}
			</>
			: <h1 className={'text-6xl text-white abs-center z-50'}>  HUYYYY! </h1>
		}

	</section>

}
