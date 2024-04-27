import './globals.css?1'
import PsyBk from "@/components/psybk";
import CtxToucher from "@/components/ctx.toucher";
import PsyLogo from "@/components/psylogo";
import {IconAudio, IconVideo} from "@/components/psy.icons";
import Link from "next/link";


export const metadata = {
  title: 'PSYTRANCE.LU',
  description: 'NON-PROFIT CULTURAL SOCIETY',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={'overflow-x-hidden w-screen'}>
      <body className={'relative w-screen min-h-screen overflow-x-hidden'}>
        {/*<CtxToucher>*/}

           <PsyBk className={'opacity-80'}/>

            <main className="min-h-screen h-screen max-h-screen max-w-screen w-screen overflow-hidden grid grid-cols-[100%] grid-rows-[90px_calc(100vh_-_208px)_108px]">

                <header className={'flex justify-center w-full py-2  '}>
                    <PsyLogo/>
                </header>


                <div className={'w-full h-full overflow-y-scroll overflow-x-hidden z-10'}>

                    {children}

                </div>


                <footer className={'h-full py-3  justify-self-end  w-full text-center  text-orange-200 text-sm z-50  overflow-hidden grid grid-cols-[100%]  '}>


                    {/*<Link href={'/past'} className={`mb-1  text-sm  text-sky-100 w-fit mx-auto block text-center`}>*/}
                    {/*    PAST EVENTS*/}
                    {/*</Link>*/}

                    <div className={' h-fit flex justify-center gap-x-10 py-3 px-3  w-fit  max-w-screen-sm  mx-auto overflow-hidden mb-5'}>


                        <Link href={'/audio'} className={'glimen-a ml-3 flex gap-x-2 items-center w-fit h-fit py-1  px-1.5 rounded-xl border border-neutral-400 text-xs text-neutral-200 bg-[#ffffff33]'}>
                            <span>random</span>
                            <IconAudio className={'w-6  h-6 text-orange-200'}/>
                            <span>audio</span>
                        </Link>

                        <Link href={'/video'} className={'glimen-b mr-3 flex gap-x-2 items-center w-fit h-fit py-1  px-1.5 rounded-xl border border-neutral-400 text-xs text-neutral-200 bg-[#ffffff33]'}>
                            <span>random</span>
                            <IconVideo className={'w-6  h-6 text-orange-200'}/>
                            <span>video</span>
                        </Link>

                    </div>

                    <Link className={'cursor-pointer text-center'} href={'/about'}>WHAT IS  IT & WHO WE ARE</Link>

                </footer>


            </main>


        {/*</CtxToucher>*/}
      </body>
    </html>
  )
}
