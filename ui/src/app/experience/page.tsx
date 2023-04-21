'use client'
import styles from './page.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ExperienceDetail from '../components/experienceDetail'
import Loading from '../loading'
import clsx from 'clsx'


const Experience = () => {
    const [experienceList, setExperienceList] = useState([]);
    const [experienceDetail, setExperienceDetail] = useState(null);
    const [activeCompany, setActiveCompany] = useState("");
    useEffect(() => {
        (async () => {
            const res = await fetch('/api/experience')
            let data = await res.json();
            data = [...data].reverse();
            setExperienceList(data);
            setExperienceDetail(data[0]);
            setActiveCompany(data[0].company);
        })();
    }, [])
    const getExpDeatils = (company: string) => {
        const detail: any = experienceList.find((x: any) => x.company === company)
        setExperienceDetail(detail);
        setActiveCompany(detail.company);
    };
    return (
        <div className="w-full">
            <h1 className='multicolored-text heading-xl mb-9 section-heading'>Skills &amp; Experience</h1>
            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:flex col-span-1 lg:col-span-3 gap-x-14">
                    <div className="flex flex-row lg:flex-col">
                        {experienceList.map((exp: any, key: any) => (
                            <button className={`${styles.btn} ${clsx({ [styles.active]: activeCompany === exp.company })}`} key={key} onClick={() => { getExpDeatils(exp.company) }}>{exp.company}</button>
                        ))}
                    </div>
                    <div className={`flex-1 h-[60vh] p-12 overflow-auto ${styles.content}`}>
                        {experienceDetail !== null && <ExperienceDetail data={experienceDetail} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;
