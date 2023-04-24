import Navbar from "./navbar";
import { RootState } from './store'
import { useSelector } from 'react-redux'
import clsx from "clsx";

const LayoutChild = (props: any) => {
    const collapse = useSelector((state: RootState) => state.global.openNav)
    return (
        <>
            <Navbar />
            <main className={`relative z-10 w-full ${clsx({
                ['h-screen overflow-auto']: collapse === true
            })
                }`}>
                <div className="ml-0 md:ml-[128px]">
                    {props.item}
                </div>
                <div className='skewpart'></div>
            </main>
        </>
    )
}
export default LayoutChild;