

export default function TstLayout({ children }) {
  return (

            <div className="min-h-screen h-screen max-h-screen max-w-screen w-screen overflow-hidden grid grid-cols-[100%] grid-rows-[90px_calc(100vh_-_208px)_108px]">

                {children}

            </div>

  )
}
