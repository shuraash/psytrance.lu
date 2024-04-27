
"use client"

import {createContext, useContext, useEffect, useRef, useState} from "react";

const
	ctxToucher = createContext(false),

	useTocucher = () => ctxToucher;

export default function CtxToucher({children})
{


	const
		[isTouched, setIsTouched] = useState(false),

		refDiv = useRef(),

		makeTouched = () => {

			if(isTouched)
			{

			}
			else
			{
				if(refDiv.current)
					refDiv.current.classList.add('fade-out');

				setIsTouched(true)
			}
		}



	return (

		<ctxToucher.Provider value={isTouched}>

			{children}

			<div ref={refDiv} onPointerDown={e => makeTouched()} className={'fixed left-0 top-0 w-screen h-screen z-50 bg-red-800'}></div>

		</ctxToucher.Provider>

	)
}

export {useTocucher};