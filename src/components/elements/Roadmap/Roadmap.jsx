import { Link } from "react-router-dom"

const Roadmap = ({ statuses }) => {
    return <div className="roadmap bg-white rounded-xl p-6 flex flex-col gap-6">
        <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Roadmap</h3>
            <Link to="/roadmap" className="text-secondary-purple font-semibold text-sm">View</Link>
        </div>
        <ul className="flex flex-col gap-2">
            {statuses.map(status => {
                return <li className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className={`w-[8px] h-[8px] rounded-full indicator-${status.label}`}></div>
                        <p className="text-paler-navy">{status.label}</p>
                    </div>
                    <p className="font-bold text-mid-navy">{status.numberOfUpdates}</p>
                </li>
            })}
        </ul>
    </div>
}

export default Roadmap