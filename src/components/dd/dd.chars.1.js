"use client"

import {twMerge} from "tailwind-merge";

export const shuffleArr = (a,b,c,d) =>
{//array,placeholder,placeholder,placeholder
	c = a.length;
	while (c)
		b = Math.random() * c-- | 0,
		d = a[c],
		a[c] = a[b],
		a[b] = d
}

const dukeColors = ['#ffc107',  '#8bc34a', '#9c27b0', '#e91e63', '#2196f3', '#00ff27', '#00ffd3', '#f4ff7a', '#ff6b6b', '#8bc34a','#e91e63',  ];
shuffleArr(dukeColors);

let dukeCurColor = 0;

export function ddColor()
{
	const ret = dukeColors[dukeCurColor];
	dukeCurColor++;
	if(dukeCurColor >= dukeColors.length)
	{
		const tt = dukeColors[dukeCurColor - 1];
		while(dukeColors[0] == tt)  shuffleArr(dukeColors);
		dukeCurColor = 0;
	}

	return ret

}

const djPoses = ['dj-t-l', 'dj-t-r', 'dj-b-l', 'dj-b-r']

shuffleArr(djPoses);

let djCurPos = 0;

export function djPose()
{

	const ret = djPoses[djCurPos];
	djCurPos++;

	if(djCurPos >= djPoses.length)
	{
		while(djPoses[0] == ret)
			shuffleArr(djPoses);
		djCurPos = 0;
	}

	return ret
}


function DDChar({char, className, color}) {

	//const cc = color ? {color: color} : {}

	return (
		<div className={twMerge('ddchar w-fit h-auto ' + ` text-[color]`, className)}  >
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
				{texta.split('').map(c => <DDChar key={'dc1-'+c} char={c} className={chprop(c)} color={ddColor()} />)}
			</div>

			<div className={'w-full h-[44px]'}/>

			<div className={'flex items-center w-full h-fit justify-evenly'}>
				{textb.split('').map(c => <DDChar  key={'dc2-'+c}  char={c}  className={chprop(c)} color={ddColor()}/>)}
			</div>

		</div>
	)

}