"use client"

import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {VJLoops} from "@/components/PsyBG/vidoz";
import {arrRandomCycler} from "@/util";
import {
	aniPresetDefDuration,
	aniPresetsKeys,
	aniPresets,
	aniPresetsCombine
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
		//console.log(window.arrRandomCycler = arrRandomCycler, window.aniPresetsCyclers = aniPresetsCyclers, window.randomAniRec = randomAniRec, window.randomAniPreset = randomAniPreset, window.aniPresets = aniPresets, window.aniPresetsKeys = aniPresetsKeys)
	}, [])

	const
		apRCyclerIn =  arrRandomCycler(aniPresetsKeys.filter(k => ['fade', 'slideRight', 'slideLeft'].includes(k)), 1),
		apRCyclerOut =  arrRandomCycler(aniPresetsKeys.filter(k => ['fade','zoomIn','zoomOut','slideRight', 'slideLeft'].includes(k)), 1),

		getPreset = () => {

			const pin =  apRCyclerIn.next().value, pout = apRCyclerOut.next().value

			console.log(`Preset in: '${pin}', out: '${pout}'`)

			return aniPresetsCombine(aniPresets[pin], aniPresets[pout])
		}

	return (
		<AnimatePresence>
			{clip && <motion.div
				key={`${clip.index}:${clip.value}`}
				className={'absolute z-0 left-0 top-0 w-full h-full'}
				{...getPreset()}
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
