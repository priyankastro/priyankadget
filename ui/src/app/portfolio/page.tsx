import styles from './page.module.css'

const Portfolio = ({ data }: any) => {
    return (
        <>
            <h1 className='multicolored-text heading-xl mb-16 section-heading'>My Portfolio</h1>
            <div className="grid gap-16 lg:gap-24 grid-cols-1 lg:grid-cols-2">
                <div className={`${styles.box} m-auto mb-14 lg:mb-auto`}>
                    <h2 className={styles.imgHeading}>Engineering</h2>
                    <div className={styles.headingBg}></div>
                    <img className={styles.image} src={"/images/engineering.png"} alt={"Engineering"} />
                </div>
                <div className={`${styles.box} m-auto mb-14 lg:mb-auto`}>
                    <h2 className={styles.imgHeading}>Photography</h2>
                    <div className={styles.headingBg}></div>
                    <img className={styles.image} src={"/images/photography.png"} alt={"Photography"} />
                </div>
            </div>
        </>
    )
}
export default Portfolio;
