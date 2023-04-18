'use client'
import { GetStaticProps } from "next";
import styles from './page.module.css'
import Image from 'next/image'
import { useSelectedLayoutSegment } from 'next/navigation';
// import { getPublicUrlFetch } from "../../lib/interceptor";
// export const getStaticProps: GetStaticProps = async () => {
//     const response = await getPublicUrlFetch('about');
//     return {
//         props: {
//             data: response.data.attributes,
//         },
//     };
// }

const Experience = ({ data }: any) => {
    const segment = useSelectedLayoutSegment();
    // console.log(segment)
    return (
        <div className="w-full">
            <h1 className='multicolored-text heading-xl mb-9 section-heading'>Skills &amp; Experience</h1>
            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="flex col-span-3 gap-x-14">
                    <div className="flex flex-col">
                        <button className={styles.btn}>LTIMindtree</button>
                        <button className={styles.btn}>Janes</button>
                        <button className={styles.btn}>Nextwebi</button>
                    </div>
                    <div className={`flex-1 h-[60vh] ${styles.content}`}>
                        <p>{segment}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;
