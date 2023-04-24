import { skillsetList } from '../../../public/data/skillsetList';

const Skillset = ({ data }: any) => {
    return (
        <div className="flex flex-col w-full mt-10 lg:mt-0">
            {skillsetList.map((data: any, i: any) => (
                <div key={i}>
                    <div className="flex justify-between mb-1">
                        <span className='text-lg font-medium text-white'>{data.skill}</span>
                    </div>
                    <div className="level-indicator w-full rounded-full h-2.5 mb-4">
                        <div className="h-2.5 rounded-full" style={{ width: data.proficiency }}></div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Skillset;
