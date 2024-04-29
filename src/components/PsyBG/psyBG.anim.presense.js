"use client"

import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {arrRandomCycler, formatTS} from "@/util";
import {
	aniPresetDefDuration,
	aniPresetsKeys,
	aniPresets,
	aniPresetsCombine
} from "@/components/PsyBG/aniPresets";


export default function PsyBG({vjLoops, className})
{
	vjLoops.length=2;
	const

		myRef = useRef(),
		tmrRef = useRef(),
		cntRef = useRef(0),
		vidRef = useRef(),

		APCyclerIn =  arrRandomCycler(aniPresetsKeys.filter(k => ['fade', 'slideRight', 'slideLeft'].includes(k)), 1),
		APCyclerOut =  arrRandomCycler(aniPresetsKeys.filter(k => ['fade','zoomIn','zoomOut','slideRight', 'slideLeft'].includes(k)), 1),
		getAPreset = () => ( (pin, pout) =>
				({in: pin, out: pout, props: aniPresetsCombine(aniPresets[pin], aniPresets[pout])})
		)( APCyclerIn.next().value, APCyclerOut.next().value),

		// VJLoopsCycler = arrRandomCycler(vjLoops, 5),
		VJLoopsCycler = arrRandomCycler(vjLoops, 2),

		nextClip = () => ({...VJLoopsCycler.next(), preset: getAPreset(), left:  cntRef.current % 2 === 0}),

		[clip, setClip] = useState(null),

		playClip = (video, oldv) =>
		{
			if(video)
			{
				if(video.paused) video.play();
				clearTimeout(tmrRef.current)
				tmrRef.current = setTimeout(e => setClip(nextClip()), (video.duration - clip.preset?.props?.exit?.transition?.duration || aniPresetDefDuration) * 1000)
			}
			else
			{
				let vids = [...myRef.current.querySelectorAll('video')],
					ff = vids.length > 1 && vids.find(v => v !== oldv);

				if(ff && ff.paused)
					ff.play()
				else
				{
					clearTimeout(tmrRef.current)
					setClip(nextClip())
				}
			}
		},

		onClipMetadata = (clip, avid) =>  {

			if(vidRef.current !== avid)
			{
				cntRef.current++;
				vidRef.current = avid;
				clip.left = cntRef.current % 2 === 0;
			}

			const t = myRef.current.querySelector('.TABLOID.' + (clip.left ? 'LEFT' : 'RIGHT'))

			if(t)
			{
				t.innerHTML = `<div> - ${formatTS(avid.duration - avid.currentTime)}</div><div>${clip.value.replace('https://trancescript.ddns.net/video/vjloops/small/','')}</div>`;
			}
		},

		onClipTimeUpdate = (clip, avid) =>  {

			if(vidRef.current !== avid)
			{
				cntRef.current++;
				vidRef.current = avid;
				clip.left = cntRef.current % 2 === 0;
			}

			const t = myRef.current.querySelector('.TABLOID.' + (clip.left ? 'LEFT' : 'RIGHT') + ' div')

			if(t)
			{
				t.innerHTML = ` - ${formatTS(avid.duration - avid.currentTime)}`;
			}
		},

		isPresent = true; //useIsPresent();

	useEffect(() =>
	{
		if(!clip)
			setClip(nextClip())
		else
		if(!isPresent)
		{
			const t = myRef.current.querySelector('.TABLOID.' + (clip.left ? 'LEFT' : 'RIGHT'))
			if(t) t.innerHTML = '';
		}

		console.log('pizda suka ', window.ru = () => {myRef.current.querySelector('video').play()});

	}, [isPresent])

	if(clip)
	{
		console.log(`clip ${clip.left ? 'LEFT' : 'RIGHT'}: ${clip.value.replace('https://trancescript.ddns.net/video/vjloops/small/','')}\n preset: ${clip.preset.in}/${clip.preset.out} cf.dur: ${clip.preset?.props?.exit?.transition?.duration}`, clip)
	}

	return (
		<div ref={myRef} className={'absolute z-0 w-full h-full inset-0 ' + className}>

			<div className={`TABLOID LEFT z-10 p-2 absolute bottom-2 left-2 text-white drop-shadow-lg font-bold w-fit h-fit`}/>
			<div className={`TABLOID RIGHT z-10 text-right absolute bottom-2 right-2 text-white drop-shadow-lg font-bold w-fit h-fit`}/>

			{/*<AnimatePresence>*/}
			{clip && <motion.div
				key={`${clip.index}:${clip.value}`}
				className={'absolute w-full h-full inset-0 ' + className}
				{...clip.preset.props}
			>

				<video
					className={'absolute w-full h-full inset-0 object-cover mix-blend-screen'}
					src={clip.value}
					muted={true}
					onCanPlayThrough={e => playClip(e.target)}
					onLoadedMetadata={e => onClipMetadata && onClipMetadata( clip, e.target )}
					onTimeUpdate={e => onClipTimeUpdate && onClipTimeUpdate( clip, e.target )}
					onEnded={e => { console.log('WTF!!!! ended '); playClip(null, e.target, clip)} }
				/>

			</motion.div>}
			{/*</AnimatePresence>*/}
		</div>
	)
}
