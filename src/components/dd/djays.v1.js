"use client"

import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {arrRandomCycler} from "src/util";
import {psyColors} from "src/components/psyColors";


const

	ddColors = psyColors,

	ddDjs = [
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
	],

	ddDj = arrRandomCycler(ddDjs, 5),
	ddDjColor = arrRandomCycler(ddColors, 5)    ,

	djPoses = ['dj-t-l', 'dj-t-r', 'dj-b-l', 'dj-b-r'],
	djPose = arrRandomCycler(djPoses, 2),

	nextDJ = () => ({
		dj: ddDj.next().value,
		color: ddDjColor.next().value,
		ccolor: ddDjColor.next().value,
		bcolor: ddDjColor.next().value,
		pos: djPose.next().value
	})



export default function DDDj()
{

	const

		[djDrop, setDjDrop] = useState(false),

		djdRef = useRef(),

		DJCard = ({dj}) => (
			<motion.div

				// 	initial: { y: 0,x :0},
				// animate: { y: 0, x: 0},
				// exit: { y: 0, x: 0},
				//dj-mdiv djp-${djDrop.pos}

				className={`p-10 absolute left-0 top-0 w-fit h-fit DJMF djp-${djDrop.pos}`} style={{zIndex: 1234}}

				initial={{ opacity: 0, scaleX: 0.1, scaleY: 0.1,  rotate: '-180deg'  }}
				animate={{ opacity: 1, scaleX: 1, scaleY: 1,  rotate: '0deg'  }}
				exit={{ opacity: 0, scaleX: 0.1, scaleY: 0.1, rotate: '180deg'  }}
				transition={{duration: 1.15 }}

			>

					<div className={'  boxCool abs-full bg-transparent rounded-xl  '}>
						&nbsp;
					</div>


				{/*w-[calc(100%_+_30px)] h-[calc(100%_+_30px)]  left-[-15px] top-[-15px]*/}


				{/*<div className={'opacity-0 absolute bg-transparent w-full h-full left-[3px] top-[3px] rounded-xl border-dotted border-[6px]'}/>*/}

					<div
						className={' min-h-[52px]  rounded-xl bg-stone-700/60  rounded-xl text-white text-center text-xl flex items-center gap-x-2.5 w-fit h-fit '}

						// style={{borderColor: dj.bcolor}}
					>




						<div className={''} style={{color: dj.color}}>{dj.dj[0]}</div>
						<div className={'text-base text-neutral-300'} style={{color: dj.ccolor}}>({dj.dj[1]})</div>

					</div>



			</motion.div>
		),

		chDj = () =>
		{
			let dd = nextDJ();

				// requestAnimationFrame(e => djdRef.current.classList.add('dj-in'));
				// setTimeout( e => djdRef.current.classList.remove('dj-in'), 2345 )
//			setDjDrop( dd );
			setTimeout( () => {

				setDjDrop( dd );

				setTimeout( () => {
					setDjDrop( null )
					chDj()
					// setTimeout( () => {chDj()}, 2345)
				}, 3456)


			}, 2345)



		}

	// ddDJ.bind(this)
	// setDjDrop.bind(this)

	useEffect(() =>
	{
		// setTimeout( () => {	chDj() }, 2345)
		// console.log(window.randomIndex = randomIndex, window.ddDj = ddDj, window.ddDjs = ddDjs, window.randoArrGen = randoArrGen)

		chDj()

	}, []);


	return    (
	<div className={''}>

			{/*<div onClick={e =>chDj()} className={'suka text-xl absolute -left-20 -top-20 bg-white text-red-800'}>CLICK</div>*/}

				<AnimatePresence mode={'wait'} initial={false}>

					{djDrop && <DJCard key={djDrop.dj[0]} dj={djDrop}/>}

			    </AnimatePresence>
	</div>

			)

}