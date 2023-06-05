import FeedbackFilters from "../../elements/FeedbackFilters/FeedbackFilters"
import Roadmap from "../../elements/Roadmap/Roadmap"

const Sidebar = ({ suggestionCategories, filterCategories, statuses, originalSuggestions }) => {
    console.log(filterCategories)
    return <aside className="sidebar max-w-full lg:max-w-[255px] lg:sticky lg:top-0 w-full grid grid-cols-3 lg:flex flex-row lg:flex-col gap-6">
        <h1 className="feedback-board h-full lg:h-[137px] rounded-xl p-6 flex flex-col justify-end text-white">
           <span className="text-xl font-bold">Frontend Mentor</span>
           <span className="opacity-75">Feedback Board</span> 
        </h1>
        <FeedbackFilters filters={suggestionCategories} originalFilters={filterCategories} originalSuggestions={originalSuggestions} />
        <Roadmap statuses={statuses} />
    </aside>
}

export default Sidebar