"use client"

import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import {useInterval} from "usehooks-ts";


export default  function Home() {

   const
       pics = [
           '/ny2025/f01b.webp',
           '/ny2025/f02b.webp',
           '/ny2025/f04b.webp',
       ],
       [curPic, setCurPic] = useState(0),

       rotPic = () => {

         setCurPic( curPic < pics.length - 1 ? curPic + 1 : 0 )

      //     console.log(`suka curpic:${curPic} p:${pics[curPic]}`)

       }

    useInterval( () => rotPic(), 5100)

    // useEffect(() => {
    //
    //     useTimeout
    //
    // }, []);

  return (

<>

    <div className={`  px-3 pb-3 relative `}>


        <div className={'rounded-xl bg-black/60 px-20 py-3 pt-6 border w-fit mx-auto ny-title'}>
            <h2 className={'  text-2xl text-sky-300 text-center'}>New Year Eve 2025</h2>
            <h3 className={'text-base text-emerald-300 text-center'}>31.12.24 21:00 - 01.01.25 12:00</h3>
        </div>

        <div className={'mt-10'}  >

            <AnimatePresence mode={'wait'} initial={false}>

                <motion.div

                    // 	initial: { y: 0,x :0},
                    // animate: { y: 0, x: 0},
                    // exit: { y: 0, x: 0},
                    //dj-mdiv djp-${djDrop.pos}
                    key={curPic}
                    className={` w-fit h-fit mx-auto`} style={{zIndex: 1234}}

                    initial={{ opacity: 0, scaleX: 0.1, scaleY: 0.1,  rotate: '-180deg'  }}
                    animate={{ opacity: 1, scaleX: 1, scaleY: 1,  rotate: '0deg'  }}
                    exit={{ opacity: 0, scaleX: 0.1, scaleY: 0.1, rotate: '180deg'  }}
                    transition={{duration: 1.15 }}

                >
                    {/*<div className={'bg-black p-1 text-white'}>{curPic} {pics[curPic]}</div>*/}
                    <img src={pics[curPic]} className={'border rounded-xl overflow-hidden w-full max-w-[555px] ny-quarter h-auto mx-auto'} alt={'flyear top'}/>
                </motion.div>

            </AnimatePresence>

            <img src={'/ny2025/f01a.webp'} className={'border rounded-xl overflow-hidden w-full max-w-[555px] ny-quarter h-auto mx-auto mt-10'}/>

        </div>


        <div className={'mt-10 text-base text-white text-center'}>
            all info by email: psytrance.lux@gmail.com
        </div>
    </div>

</>
    // </main>
  )
}
