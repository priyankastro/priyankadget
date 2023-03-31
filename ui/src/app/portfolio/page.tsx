import { GetStaticProps } from "next";
import styles from './page.module.css'
import Image from 'next/image'
// import { getPublicUrlFetch } from "../../lib/interceptor";
// export const getStaticProps: GetStaticProps = async () => {
//     const response = await getPublicUrlFetch('about');
//     return {
//         props: {
//             data: response.data.attributes,
//         },
//     };
// }

const Portfolio = ({ data }: any) => {
    return (
        <div className="">
            <h1 className='multicolored-text heading-xl mb-16 section-heading'>My Portfolio</h1>
            <div className="grid gap-16 grid-cols-1 lg:grid-cols-2">
                <div className={`${styles.box} m-auto mb-16 lg:mb-auto`}>
                    <h2 className={styles.imgHeading}>Engineering</h2>
                    <div className={styles.headingBgEngg}></div>
                    <img className={`${styles.image} ${styles.imageEngg} m-auto`} src={"/images/engineering.png"} alt={"Engineering"} />
                </div>
                <div className={`${styles.box} m-auto mb-16 lg:mb-auto`}>
                    <h2 className={`${styles.imgHeading} ${styles.imgHeadingPhoto}`}>Photography</h2>
                    <div className={styles.headingBgPhoto}></div>
                    <img className={`${styles.image} ${styles.imagePhoto} m-auto`} src={"/images/photography.png"} alt={"Photography"} />
                </div>
            </div>
        </div>
    )
}
export default Portfolio;
