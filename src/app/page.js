"use client"

import DDFLyear from "@/components/DD.Flyer/flyer";


import Link from "next/link";

import {useEffect, useRef, useState} from "react";
import {arrRandomCycler} from "@/util";
import {psyColors} from "@/components/psyColors";
import {twMerge} from "tailwind-merge";
import {PsycoTexto, PsycoTitlo} from "@/components/psyText";

// const DDFLyear = dynamic(() => import('../components/DD.Flyer/flyer'), {loading: () => <p> </p>,})


export default function Home() {

   const
       ddRef = useRef(),
       iiRef = useRef(),


       morea = async () => {

               await animate(
                    [...ddRef.current.querySelectorAll('.psy-titlo')].flatMap( (t,i) => ([
                        [t, {rotateX: '0deg'}, {duration: 0}],
                        [t, {rotateX: i % 2 === 0 ? '360deg' : '-360deg'}, {duration: 2, ease: 'easeInOut', at:'-1.15'}],
                    ])),

                   {repeat: Infinity, repeatType: "mirror", delay: 7.5, repeatDelay: 7.5}

               )
        }

    useEffect(() =>
    {
    //    if(!lColors)
      //      setlColors( genLColors() )
        // else
        //     psycoChars([...ddRef.current.querySelectorAll('.psy-char')])

        animate(ddRef.current, {opacity: 1}, {duration: 1, delay: 4})
        animate(iiRef.current, {opacity: 1}, {duration: 1, delay: 4})

        morea()

    }, []);

  return (
    // <main className="min-h-screen h-screen max-h-screen overflow-hidden relative">
<>


                {/*<div className={ ' mt-7 mb-10  text-green-50 w-full text-center'}>*/}
                {/*    WHAT YOU WANNA KNOW ?*/}
                {/*</div>*/}

                <Link ref={ddRef}  href={'/duckedelic'}
                      className={'pt-0 px-4 md:px-0 opacity-0 grid grid-rows-[min_-_content] z-40 w-full max-w-screen-sm h-fit mx-auto items-start justify-center  text-center '}
                >

                {/*<div className={'glimen-b1  text-lg  text-orange-200  w-full sm:w-fit '}>*/}
                {/*    NEXT EVENT*/}
                {/*</div>*/}

                    <PsycoTexto className={`text-3xl sm:text-4xl font-semibold text-orange-500  flex gap-x-2 h-fit w-fit mx-auto`}>
                        {/*Duke<b className={'text-2xl'}>d</b>elic Duke<b className={'text-2xl'}>d</b>ance*/}
                        <PsycoTitlo text='Duke' className={''}/>
                        <PsycoTitlo text='delic' className={''} style={{rotate: '13deg'}}/>
                        <PsycoTitlo text='Duke' className={''}/>
                        <PsycoTitlo text='dance' className={''}/>
                    </PsycoTexto>

                    <div className={ ' text-base  text-emerald-300  h-fit w-fit mx-auto shrink-0'}>
                        22 of JUNE 17:00  -  23 of JUNE 18:00
                    </div>

                </Link>

            <DDFLyear/>



    <Link href={'/duckedelic'} ref={iiRef}
          className={'abs-h-center ohuevator-c !fixed opacity-0 btn-det bottom-10 mt-1 flex flex-wrap sm:flex-nowrap gap-x-5 gap-y-0 w-full items-center justify-center  text-center sm:text-left'}
    >
        <div className={'text-orange-500 text-xl'}>DETAILS</div>

    </Link>



</>
    // </main>
  )
}
