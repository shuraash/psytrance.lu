"use client"

import {twMerge} from "tailwind-merge";
import {randoArrGen, randomIndex} from "@/util";


const
	ddColors = ["#ffc107",  "#9c27b0",
	              "#e91e63", "#2196f3",
	            "#00ff27", "#00ffd3",
	            "#f4ff7a", "#ff6b6b"],

	ddColors4Kinds = {},

	ddColor = (kind, cycle = 5) => ddColors4Kinds[kind]
							? ddColors4Kinds[kind] 
							: ( ddColors4Kinds[kind] = randoArrGen(ddColors, cycle) )


export {ddColor, ddColors4Kinds};

function DDChar({char, className, color}) {

	//const cc = color ? {color: color} : {}

	return (
		<div className={twMerge('ddchar w-fit h-auto ' + ` text-[color]`, className)}  style={{color: color}}>
			 {char}
		</div>
	)
}


// export function DDCh2({texta, textb,  className, charClass, ...rest}) {


export default function DDChars({texta, textb,  className, charClass, ...rest}) {

	const
		chprop = (c) => c == 'k'
			? 'text-[32px] leading-[32px] sm:text-[40px] sm:leading-[40px]' + charClass
			: c == 'L' || c == 'C'
				? 'text-[30px] leading-[30px]  sm:text-[38px] sm:leading-[38px]' + charClass
				:  c == 'e' || c == 'u' || c == 'a' || c == 'c'
					? 'pb-1 ' + charClass
					:  c == 'i'
						? 'px-1 ' + charClass
						:  charClass



	return (

		// <div {...rest} className={twMerge('DDCHARS mx-auto w-fit h-fit text-[42px] leading-[40px] text-white drop-shadow-xl gap-x-1 grid items-center grid-cols-[calc(50%_-_27px)_54px_calc(50%_-_27px)] justify-stretch', className)}>
		<div {...rest} className={twMerge(' DDCHARS mx-auto h-fit text-[28px] sm:text-[36px] sm:leading-[36px] leading-[28px] text-white drop-shadow-xl grid items-center grid-cols-[calc(50%_-_22px)_44px_calc(50%_-_22px)]', className)}>

			<div className={'flex items-center w-full h-fit justify-evenly'}>
				{texta.split('').map(c => <DDChar key={'dc1-'+c} char={c} className={chprop(c)} color={ddColor(texta+textb).next().value} />)}
			</div>

			<div className={'w-full h-[44px]'}/>

			<div className={'flex items-center w-full h-fit justify-evenly'}>
				{textb.split('').map(c => <DDChar  key={'dc2-'+c}  char={c}  className={chprop(c)} color={ddColor(texta+textb).next().value}/>)}
			</div>

		</div>
	)

}