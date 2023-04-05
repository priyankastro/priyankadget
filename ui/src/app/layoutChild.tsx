'use client'
import Navbar from "./navbar";
import { RootState } from './store'
import { useSelector } from 'react-redux'
import clsx from "clsx";
import { Suspense } from "react";
import Loading from './loading';

const LayoutChild = (props: any) => {
    const collapse = useSelector((state: RootState) => state.global.openNav)
    return (
        <>
            {/* {console.log(collapse)} */}
            <Navbar />
            <Suspense fallback={<Loading />}>
                <main className={`relative z-10 w-full ${clsx({
                    ['h-screen overflow-auto']: collapse === true
                })
                    }`}>
                    <div className='content-body p-8 lg:p-20 md:p-10 xl:p-28 2xl:p-40'>
                        {props.item}
                    </div>
                    <div className='skewpart'></div>
                </main>
            </Suspense>
        </>
    )
}
export default LayoutChild;