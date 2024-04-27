"use client"

import {createContext, useContext, useEffect, useRef, useState} from "react";
import {shuffleArray} from "@/util";
import {useTocucher} from "@/components/ctx.toucher";

const
	vidoz = shuffleArray([
		"Gold_Waves.mp4",
		"TriDown.mp4",
		"5_freeloop_sd.mp4",
		"TriRnd.mp4",
		"QuadRND_Invert.mp4",
		"4_freeloop_sd.mp4",
		"QuadRND.mp4",
		"Holy.mp4",
		"Hypno.mp4",
		"Blue_Geom.mp4",
		"Lamps.mp4",
		"Spot_Lights.mp4",
		"Gray_Star.mp4",
		"lajag1_eye3.mp4",
		"ISC.mp4",
		"Scan.mp4",
		"3_freeloop_sd.mp4",
		"Road_To.mp4",
		"Fields.mp4",
		"Red_Flower.mp4",
		"Vangoug.mp4",
		"Butterfly.mp4",
		"Disco_5.mp4",
		"Hextunel.mp4",
		"Phasing_Lights.mp4",
		"geometric-moving-tunnel-sci-art-3d-illustration-free-video.mp4",
		"LaserLines_Background.mp4",
		"7_freeloop_hd.mp4",
		"Laser_Star_Strobe.mp4",
		"Lotus.mp4",
		"Disco_3.mp4",
		"Lotus_2.mp4",
		"Scan_Kaleido.mp4",
		"Red_Energy.mp4",
		"Virus.mp4",
		"Gold_Rings.mp4",
		"Waves.mp4",
		"Gear.mp4",
		"lajag1_bk1.mp4",
		"bk2.mp4",
		"Star_2.mp4",
		"1_freeloop_hd.mp4",
		"Uzor_2.mp4",
		"vivid-green-and-orange-tunnel-3-d-illustration-free-video.mp4",
		"Quad_Lines.mp4",
		"Laser_Triple.mp4",
		"Laser.mp4",
		"6_frreloop_hd.mp4",
		"X&Romb_Background.mp4",
		"lajag1_eye1.mp4",
		"Viralcolors.mp4",
		"RGB_Waves.mp4",
		"Rorchah.mp4",
		"Disco.mp4",
		"Mantra.mp4",
		"Rings.mp4",
		"TriArray_FreeFootage.mp4",
		"lajag1_eye2.mp4",
		"Jucy.mp4",
		"Tri&Lines_MiddlePlan.mp4",
		"Blue_Pix.mp4",
		"Rotate_Flower.mp4",
		"FlashGrid.mp4",
		"blue-pink-neon-glowing-star-rays-exploding-loop-free-video.mp4",
		"fluid_02.mp4",
		"lajag1_eye4.mp4",
		"Red_Vynil.mp4",
		"Disc.mp4",
		"Plasma.mp4",
		"Triangle.mp4",
		"Polyhed.mp4",
		"Disco_2.mp4",
		"Star.mp4",
		"landscape_01.mp4",
		"Hexcolor.mp4",
		"2_freeloop_hd.mp4",
		"Disco_4_Flash_Strobe.mp4",
		"Waves_Red.mp4",
		"a-graphic-pulsar-star-radiating-light-and-pulsating-energy-free-video.mp4",
		"Laser_Flower.mp4",
		"Uzor.mp4",
		"Vortex.mp4",
		"Hyperspace.mp4",
		"Laser_Triple_Big.mp4",
		"glow-green-light-kaleidoscopic-abstract-pattern-loop-animation-free-video.mp4",
		"lajag1_eye5.mp4",
		"Tiles_MASK_2_FreeFootage.mp4",
		"Tiles_MASK_FreeFootage.mp4",
		"Monster.mp4",
		"fluid_03.mp4",
		"a-futuristic-distorted-tunnel-3-d-illustration-free-video.mp4",
		"liquid-light-forms-ripple-and-shine-free-video.mp4",
		"Suntube.mp4",
		// "abstract_01.mp4",
		// "fluid_05.mp4",
		// "abstract_03.mp4",
		// "abstract_02.mp4",
		// "Kover.mp4",
		// "Dots.mp4",
		// "lajag1_eye6.mp4",
		// "Background_2.mp4",
		// "Tiles_Background.mp4",
		// "Background_1.mp4",
		// "02_Divide_Strip_Hypno.mp4",
		// "lake_01.mp4",
		// "03_Divide_Strip_Hypno_Rnd.mp4",
		// "Gold_Waves.gif
		// "01_Cross_Divide_Line.mp4",
		// "Footage Space Galaxy HD Background 4   Space TV.mp4",
		// "ACID_Lines.mp4",
		// "fluid_04.mp4",
		// "grid.mp4",
		// "vector_01.mp4",
		// "04_Divide_Strip_Rhomb.mp4",
		// "Lines_Background.mp4",
		// "RoundTrip.mp4",
		// "fluid_01.mp4",
		// "Architecture - 44655.mp4",
		// "05_Rhomb_Forwoard_Red_White.mp4",
		// "abstract_04.mp4",
		// "06_StripRhomb.mp4",
		// "Pixel.mp4",
		// "caleidoscope.mp4",
		// "5551_dHVubmVsbW90aW9uczM0NzAybGlnaHRzdHVubmUwMDAxLTA2MDA.mp4",
		// "GLUKO01.mp4",
		// "GlukoZoom.mp4",
		// "videoplayback.mp4",
		// "Tas-soliptse.mp4",
	]);


let curVidIdx  = 0;


export default function PsyBk({className}) {

	const
 		[isTouched, setIsTouched] = useState(false),

		// isTouched = useTocucher(),

		vidA = useRef(),
		vidB = useRef(),
		bkt = useRef(),

		setVidoz = () => {

			curVidIdx ++;

			if(curVidIdx > vidoz.length - 1) curVidIdx = 0;

			const
				curVe = curVidIdx % 2 ? vidA.current : vidB.current,
				nextVe = curVidIdx % 2 ? vidB.current : vidA.current,
				ts = curVe ? (curVe.duration - curVe.currentTime - 2.22) * 1000 : 333;

			setTimeout( ()=>
			{
				nextVe.src = "http://milkywaytribe.ddns.net/video/vjloops/" + vidoz[curVidIdx];

				nextVe.addEventListener('canplay', () =>
				{
					curVe.classList.remove('fade-in');
					curVe.classList.add('fade-out');

					nextVe.play();

					nextVe.classList.remove('fade-out');
					nextVe.classList.add('fade-in');

					setVidoz()

				},  {once: true});

			}, ts);
		},

		bkTouched = () => {

			if(bkt.current)
				bkt.current.classList.add('fade-out')

			if(vidA.current.readyState >= 2)
			{
				let ts = (vidA.current.duration - vidA.current.currentTime - 1.20) * 1000;
				vidA.current.play()
				setVidoz()
			}
			else
			{
				vidA.current.addEventListener('canplay', () =>
				{
					let ts = (vidA.current.duration - vidA.current.currentTime - 1.20) * 1000;
					vidA.current.play()
					setVidoz()
				}, {once: true});
			}

	//    	setTimeout( () => setIsTouched(!isTouched), 3300);
		   	setTimeout( () =>  bkt.current ? bkt.current.remove() : null, 1300);
		}

	useEffect( () => {

		vidA.current.src="http://milkywaytribe.ddns.net/video/vjloops/" + vidoz[0];

	}, [])

	return  (
		<>

			{/*<div className={'z-[888] fixed left-0 top-0 w-screen h-screen'} onClick={e => setIsTouched(!isTouched)}/>*/}

		<div className={'z-0 '}>


			<div className={'fixed left-0 top-0 w-screen h-screen '}>
				<video ref={vidA}  className={'fixed left-0 top-0 w-screen h-screen object-cover'}/>
				<video ref={vidB} className={'fixed left-0 top-0 w-screen h-screen object-cover fade-out'}/>
				{/*{isTouched && (<div className={`fixed left-0 top-0 w-screen h-screen bg-[#000] `+ className}></div>)}*/}
			</div>

			<div className={`fixed bg-[#000] opacity-75 left-0 top-0 w-screen h-screen  `}/>




			{/*{!isTouched && (*/}
				<div ref={bkt} className={'z-[9999]   w-huevator-33 cursor-pointer psy-bk-tm fixed  left-0 top-0 w-screen h-screen  flex items-center justify-center '}>
					<div className={'e-huevator-33 rounded-2xl relative psy-bk-tm  w-3/4  h-3/4 shadow-2xl  flex items-center justify-center'}>
						<div className={'w-huevator-44 rounded-2xl relative psy-bk-tm  w-3/4 h-3/4 shadow-2xl  flex items-center justify-center'}>
							<div className={'e-huevator-44 psy-bk-tm rounded-2xl  w-2/3 h-2/3 shadow-2xl  flex items-center justify-center'}/>
						</div>
					</div>
					<div onClick={e => setTimeout( () => bkTouched(), 666 )} className={'touchme   '}>TOUCH ME</div>
				</div>
			{/*)}*/}

		</div>


		</>
	)

}
