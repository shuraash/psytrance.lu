import Link from "next/link";


export default function DDFLyear({className})
{

	return (
		<div className={'abs-center relative w-full max-w-full sm:max-w-screen-sm  h-auto aspect-square mx-auto '}>


			<Link href={'/duckedelic'}
			      className={'torigin-lt w-rotatoid abs-center block relative w-full max-w-full overflow-hidden sm:max-w-screen-sm  p-4 h-auto aspect-square mx-auto '}
			>
				<div className={'rounded-full border border-neutral-500 w-full h-full'} style={{
					backgroundImage: 'url(/vin1.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundBlendMode: 'overlay'
				}}/>


				<img className="p-2  duke-v psychedelic object-contain w-full h-full abs-center" src="/2psy.png"></img>
				<img className="p-2  duke-v techno  object-contain  w-full  h-full  abs-center" src="/2tek.png"></img>
				<img className="p-2  duke-v trance  object-contain  w-full  h-full  abs-center" src="/2tra.png"></img>

			</Link>


		</div>
	)
}