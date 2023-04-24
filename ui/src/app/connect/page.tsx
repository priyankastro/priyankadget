import styles from './page.module.css';
import Image from 'next/image';

const Connect = ({ data }: any) => {
    return (
        <div className='w-full content-body p-8 lg:p-20 md:p-10 xl:p-24 2xl:p-40'>
            <h3 className='font-bold tracking-widest'>Get in touch with me to discuss your project, ask a question or just say hello.</h3>
            <div className="grid gap-16 grid-cols-1 lg:grid-cols-2">
                <div className={`w-full lg:w-[500px] m-auto mb-auto`}>
                    <form className="w-full">
                        <h1 className='multicolored-text heading-xl mb-8 section-heading'>Contact Me!</h1>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                <input className="appearance-none block w-full input-bg py-3 px-4 focus:outline-none" id="name" type="text" placeholder="Full Name" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <input className="appearance-none block w-full input-bg py-3 px-4 focus:outline-none" id="phone" type="text" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <input className="appearance-none block w-full input-bg py-3 px-4 focus:outline-none" id="email" type="text" placeholder="Email ID*" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <input className="appearance-none block w-full input-bg py-3 px-4 focus:outline-none" id="subject" type="text" placeholder="Subject" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <textarea className="appearance-none block w-full input-bg py-3 px-4 focus:outline-none" id="message" placeholder="Write a Message*" rows={5}></textarea>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full px-3">
                                <button className='btn-contact float-right'>Send Message!</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={`w-full lg:w-[500px] m-auto mb-14 lg:mb-auto lg:mt-14 mt-0`}>
                    <Image className="m-auto" src={'/images/contact.png'} alt={'Let me know'} width={400} height={400}></Image>
                    <h2 className='multicolored-text font-bold heading-lg py-3 text-center'>your thoughts</h2>
                </div>
            </div>
        </div>
    )
}
export default Connect;
