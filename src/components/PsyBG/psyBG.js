"use client"

import {useEffect, useRef} from "react";
import {animate} from "framer-motion";
import {arrRandomCycler, formatTS} from "@/util";

const

	aniPresetDefDuration = 2.345,

	aniPresetDefState = { opacity: 1, scale: 1, rotate: '0deg', x: 0, y: 0, z: 0},

	aniPresets = {
		fade: { opacity: 0 },
		ZoomOut: { scale: 0, opacity: 0, transition: {scale: {delay: aniPresetDefDuration * .33}} },
		zoomIn: { scale: 3, opacity: 0, transition: {scale: {delay: aniPresetDefDuration * .33}} },
		rotateRight: { rotate: '360deg' },
		rotateLeft: { rotate: '-360deg' },
		slideRight: { x: '100%',  transition: {duration: aniPresetDefDuration *.66}},
		slideLeft: { x: '-100%', transition: {duration: aniPresetDefDuration *.66}},
	},

	aniPresetsKeys = Object.keys(aniPresets)


export default function PsyBG({vjLoops, className})
{
	const
 		tabloA = useRef(),
		tabloB = useRef(),

		videoA  = useRef(),
 		videoB  = useRef(),

		APCyclerIn =  arrRandomCycler(aniPresetsKeys.filter(k => ['fade', 'slideRight', 'slideLeft'].includes(k)), 2),
		APCyclerOut =  arrRandomCycler(aniPresetsKeys.filter(k => ['fade','zoomIn','zoomOut','slideRight', 'slideLeft'].includes(k)), 4),

		VJLoopsCycler = arrRandomCycler(vjLoops, 7),

		nextClip = () => ({...VJLoopsCycler.next(), preset: {in: APCyclerIn.next().value, out: APCyclerOut.next().value} }),

		setNext = (vid) => {
			vid._clip = nextClip()
		    vid._clip.cfTime = vid._clip.preset?.out?.transition?.duration || aniPresetDefDuration
			vid.src = vid._clip.value;
		},

		videoEnter = async (vid) => {
			vid.play()
			await animate(vid, {...aniPresetDefState, ...aniPresets[vid._clip.preset.in]}, {duration: 0})

			animate(vid, aniPresetDefState,
				{
							duration: aniPresetDefDuration,
							...aniPresets[vid._clip.preset.in].transition
								? aniPresets[vid._clip.preset.in].transition
								: {}
						}
			)
		},


		videoExit = async (vid) => {
			if(vid)
			{
				await animate(vid, aniPresets[vid._clip.preset.out],
					{duration: aniPresetDefDuration, ...(aniPresets[vid._clip.preset.out].transition ? aniPresets[vid._clip.preset.out].transition : {}) })
				vid.pause()
				setNext(vid)
			}
		},


		crossFade = (from) =>
		{
			if(!from._clip.crossFading)
			{
				// console.log('%cCROSSFADING', "color: green")
				from._clip.crossFading = true;
				videoEnter( from === videoB.current ? videoA.current : videoB.current )
				videoExit(from)
			}
		},

		upVideoInfo = (vid, tablo) => tablo.innerHTML = `
				<div>
					<div style="margin: 5px 0">
						<span>${vid._clip.preset.in} / ${vid._clip.preset.out}</span>						
					</div>				
					<div style="margin: 5px 0">
						<span>${vid._clip.value.replace('https://trancescript.ddns.net/video/vjloops/small/', '').replace('.mp4', '')}</span>												
					</div>
					<div style="margin: 5px 0; display: flex; column-gap: 16px;">
						<span>${formatTS(vid.duration - vid.currentTime)}</span>						
						${formatTS(vid.duration)} CFT:(${formatTS(vid._clip.cfTime)}) | ${formatTS(vid.currentTime)}
					</div>
				</div>
		`,

		upVideoTime = (vid, tablo) => {

			tablo.innerHTML = `
				<div>
					<div style="margin: 5px 0">
						<span>${vid._clip.preset.in} / ${vid._clip.preset.out}</span>						
					</div>				
					<div style="margin: 5px 0">
						<span>${vid._clip.value.replace('https://trancescript.ddns.net/video/vjloops/small/', '').replace('.mp4', '')}</span>												
					</div>
					<div style="margin: 5px 0; display: flex; column-gap: 16px;">
						<span>${formatTS(vid.duration - vid.currentTime)}</span>						
						${formatTS(vid.duration)} CFT:(${formatTS(vid._clip.cfTime)}) | ${formatTS(vid.currentTime)}
					</div>
				</div>
			`

			if( !vid._clip.crossFading && (vid.duration - vid.currentTime) <= vid._clip.cfTime)

 				crossFade(vid)
		}

	useEffect(() =>
	{
 		videoA.current.addEventListener('canplaythrough', e => videoA.current.play(), {once: true})
		setNext(videoA.current)
		setNext(videoB.current)

	}, [])

	return <div>

			{/*<button className={'fixed z-50 w-fit left-5 top-5 border bg-red-800 text-white'} onClick={e =>{   crossFade(videoA.current) }}>CROSSFADE A</button>*/}
			{/*<button className={'fixed z-50 w-fit left-48 top-5 border bg-red-800 text-white'} onClick={e =>{   crossFade(videoB.current) }}>CROSSFADE B</button>*/}

			<div ref={tabloA} className={`z-10 text-left absolute bottom-2 left-2 text-white drop-shadow-lg font-bold w-fit h-fit text-sm`}/>
			<div ref={tabloB} className={`z-10 text-right absolute bottom-2 right-2 text-white drop-shadow-lg font-bold w-fit h-fit text-sm`}/>


			<video
				ref={videoA}
				key={`VidA`}
				className={'absolute w-full h-full inset-0 object-cover mix-blend-screen'}
				muted={true}
				onLoadedMetadata={e => upVideoInfo( e.target, tabloA.current )}
				onTimeUpdate={e => upVideoTime( e.target, tabloA.current )}
			/>

			<video
				ref={videoB}
				key={`VidB`}
				className={'absolute w-full h-full inset-0 object-cover mix-blend-screen opacity-0'}
				muted={true}
				onLoadedMetadata={e => upVideoInfo( e.target, tabloB.current )}
				onTimeUpdate={e => upVideoTime( e.target, tabloB.current  )}
			/>

	</div>

}
