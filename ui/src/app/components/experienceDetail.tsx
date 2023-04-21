'use client'
import styles from './page.module.css'

const ExperienceDetail = ({ data }: any) => {
    return (
        <>
            <h4 className='mb-1'>{data.title}</h4>
            <h2 className='mb-2'>{data.company}</h2>
            <h3 className='mb-3'>{data.duration}</h3>
            <ul>
                {data.description.map((x: any, i: any) => (
                    <div className='desc-list relative'>
                        <li className='mb-1 ml-2 pl-3' key={i}>{x}</li>
                    </div>
                ))}
            </ul>
        </>
    )
}
export default ExperienceDetail;
