import styles from '../styles/Layout.module.css'
import Navbar from './navbar'

const Layout = ({ children }: any) => (
    <div>
        <Navbar />
        <main className='relative h-screen z-10'>
            <div className='px-16 py-10'>
                {children}
            </div>
            <div className='skewpart'></div>
        </main>
    </div>
)

export default Layout