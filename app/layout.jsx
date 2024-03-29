import Nav from '@/components/Nav'
import Provider from '@/components/Provider'

import '@/styles/global.css'

export const metadata ={
    title: "Promptopia",
    description: "Discover IA Site"
}
const RouteLayout = ({children}) => {
  return (
    <html lang='pt-Ao'>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradiente'></div>
                </div>

                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RouteLayout