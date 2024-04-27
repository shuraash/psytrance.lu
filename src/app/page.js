"use client"

// import DDFLyear from "@/components/dd/flyer";

import dynamic from 'next/dynamic'

const DDFLyear = dynamic(() => import('../components/dd/flyer'), {loading: () => <p> </p>,})

export default function Home() {
  return (
    // <main className="min-h-screen h-screen max-h-screen overflow-hidden relative">

        <div className={' select-none  h-fit w-full '}>

                {/*<div className={ ' mt-7 mb-10  text-green-50 w-full text-center'}>*/}
                {/*    WHAT YOU WANNA KNOW ?*/}
                {/*</div>*/}

                <div className={'glimen-b1 mt-1 mb-1 text-lg  text-orange-200 w-full text-center '}>
                    NEXT EVENT
                </div>

                <div className={ ' mb-2 mt-1  text-emerald-300 mx-auto w-fit '}>

                    22 of JUNE 17:00  -  23 of JUNE 18:00

                </div>

            <DDFLyear/>


        </div>


    // </main>
  )
}
