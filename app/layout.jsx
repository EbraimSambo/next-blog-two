import '@/styles/global.css'

export const metadata ={
    title: "Promptopia",
    description: "Discover IA Site"
}
const RouteLayout = ({children}) => {
  return (
    <html lang='pt-Ao'>
        <body>
            <div className='main'>
                <div className='gradiente'></div>
            </div>

            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RouteLayout