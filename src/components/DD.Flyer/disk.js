import {motion} from "framer-motion";


export default function DDDisk({children, className})
{

	const

		labTran = {duration: 3,  repeatDelay: 8, ease: 'linear', repeat: Infinity, repeatType: "loop"},

		labAnim = () => ({
			opacity: [0,0.5,1,0.5,0],
			// color: [0,0.5,1,0.5,0].map(c => clrRCycler.next().value)
		})


	return 	<motion.div
			className={'absolute rounded-full border border-neutral-500 w-full h-full inset-0'}
			style={{
				backgroundImage: 'url(/vin1.png)',
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				backgroundBlendMode: 'overlay',
				rotate: '0deg'
			}}
			animate={{rotate: ['-360deg','0deg']}}
			transition={{duration: 7.77,  ease: 'linear', repeat: Infinity, repeatType: 'loop'}}
		>

			<motion.img
				src="/2psyC.png"
				className="p-2  object-contain w-full h-full abs-center opacity-0"
				animate={labAnim()}
				transition={{ delay: 3, ...{...labTran}}}
			/>

			<motion.img
				src="/2tekC.png"
				className="p-2  object-contain w-full h-full abs-center opacity-0"
				animate={labAnim()}
				transition={{ delay: 6, ...{...labTran}}}
			/>

			<motion.img
				src="/2traC.png"
				className="p-2  object-contain w-full h-full abs-center opacity-0"
				animate={labAnim()}
				transition={{ delay: 9, ...{...labTran}}}
			/>

			{children}

	</motion.div>
}