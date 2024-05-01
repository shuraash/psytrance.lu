
import {motion} from "framer-motion";
import {useRef} from "react";


function PsyChar({char, ...rest})
{
	return
		<motion.span className={'opacity-0'} {...rest}>
			{char}
		</motion.span>
}

export default function PsyText({text, className})
{
	const
		chars = text ? text.split('') : [],

		psyRef = useRef();

		//aniIn = (O) => {
			//animate={{ease: 'linear', opacity: 1, transition: {delay: (i * 0.25 +.25)}}}

			// avaAos = psyRef.current.querySelectorAll(),
			//
		//.map( (c,i) => ({true, true}) );


	// let
	// 	HeHe = ({cc =  map( (c,i) => )})



	return
		<div ref={psyRef} className={`flex items-center gap-x-3 justify-evenly bg-emerald-400 relative`}>
			{chars.map((c,i) =>

				<PsyChar char={c}  key={c+i}
				   animate={{opacity: 1, transition: {duration: 0.33, delay: (i * 0.25 +.25), ease: 'linear', }}}
				/>
			)}

		</div>
}

/*

		<div>
			{chars.map((c,i) =>
				<span key={c+i} className={'psy-char'} style={{animationDelay: `${i * 0.33 +.33}s`}}>
					{c}
				</span>
			)}
		</div>
 */