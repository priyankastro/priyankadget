import styles from './page.module.css'

const Connect = ({ data }: any) => {
    return (
        <div>
            <h3 className='font-bold tracking-widest'>Get in touch with me to discuss your project, ask a question or just say hello!</h3>
            <h1 className='multicolored-text heading-xl mb-8 section-heading'>Contact Me!</h1>
            <div className="grid gap-16 grid-cols-1 lg:grid-cols-2">
                <div className={`w-full lg:w-[500px] m-auto mb-14 lg:mb-auto`}>
                    <form className="w-full">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                <input className="appearance-none block w-full input-bg py-3 px-4 focus:outline-none" id="name" type="text" placeholder="Full Name" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <input className="appearance-none block w-full input-bg py-3 px-4 focus:outline-none" id="email" type="text" placeholder="Email ID" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <input className="appearance-none block w-full input-bg py-3 px-4 focus:outline-none" id="subject" type="text" placeholder="Subject" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <textarea className="appearance-none block w-full input-bg py-3 px-4 focus:outline-none" id="message" placeholder="Message" rows={5}></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={`${styles.box} m-auto mb-14 lg:mb-auto`}>
                </div>
            </div>
        </div>
    )
}
export default Connect;
