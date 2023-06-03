import FeedbackFilters from "../../elements/FeedbackFilters/FeedbackFilters"
import Roadmap from "../../elements/Roadmap/Roadmap"

const Sidebar = ({ suggestionCategories, statuses }) => {
    return <aside className="sidebar max-w-[255px] sticky top-0 w-full flex flex-col gap-6">
        <h1 className="feedback-board rounded-xl p-6 flex flex-col justify-end text-white">
           <span className="text-xl font-bold">Frontend Mentor</span>
           <span className="opacity-75">Feedback Board</span> 
        </h1>
        <FeedbackFilters filters={suggestionCategories} />
        <Roadmap statuses={statuses} />
    </aside>
}

export default Sidebar