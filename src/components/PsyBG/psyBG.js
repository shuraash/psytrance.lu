"use client"

import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {VJLoops} from "@/components/PsyBG/vidoz";
import {arrRandomCycler} from "@/util";
import {
	aniPresetDefDuration,
	aniPresetsKeys,
	aniPresets,
	randomAniPreset,
	randomAniRec,
	aniPresetsCyclers
} from "@/components/aniPresets";



export default function PsyBG({crossfadeDuration = aniPresetDefDuration, vidoz = VJLoops})
{

	const

		vidozCycler = arrRandomCycler(VJLoops.map(l=>`http://milkywaytribe.ddns.net/video/vjloops/small/${l}`), 5),

		[clip, setClip] = useState(null),

		playVid = (vid) =>
		{
			vid.play();
			setTimeout(e => setClip( vidozCycler.next() ), (vid.duration - crossfadeDuration) * 1000)
		}

	useEffect(() => {
		void setClip( vidozCycler.next() )
		console.log(window.arrRandomCycler = arrRandomCycler, window.aniPresetsCyclers = aniPresetsCyclers, window.randomAniRec = randomAniRec, window.randomAniPreset = randomAniPreset, window.aniPresets = aniPresets, window.aniPresetsKeys = aniPresetsKeys)
	}, [])

	const anirec = () => {
		let x = randomAniRec('psybk', ['fade','zoomIn'])
		console.log('AAAnirec ', x)
		return x
	}

	return (
		<AnimatePresence>
			{clip && <motion.div
				key={`${clip.index}:${clip.value}`}
				className={'absolute z-0 left-0 top-0 w-full h-full'}
				{...anirec()}
			>

				<video
					className={'absolute w-screen h-screen object-cover mix-blend-screen'}
					src={clip.value}
					muted={true}
					onCanPlayThrough={e => playVid(e.target)}
					//  onLoadedMetadata={e => setDur(e.target.duration)}
					// onTimeUpdate={e => setCurTS(e.target.currentTime)}
				/>

			</motion.div>}
		</AnimatePresence>
	)
}
