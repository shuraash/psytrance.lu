
import Link from "next/link";


export default async function Home() {



  return (

<>

    <div className={` sm:rounded-xl px-3 py-3 relative bg-black/60`}>


        <h2 className={'mt-4 text-xl text-lime-300 text-center'}>New Year Eve 2025</h2>
        <h3 className={' text-lg text-fuchsia-300 text-center'}>31.12.24 21:00 - 01.01.25 12:00</h3>

        <div className={'mt-10'}>

            <img src={'/ny2025/f01b.webp'} className={'w-full max-w-[555px] ny-quarter h-auto mx-auto'} alt={'flyear top'}/>

            <img src={'/ny2025/f01a.webp'} className={'w-full max-w-[555px] ny-quarter h-auto mx-auto mt-10'}/>

        </div>


        <div className={'mt-10 text-base text-white text-center'}>
            all info by email: psytrance.lux@gmail.com
        </div>
    </div>

</>
    // </main>
  )
}
