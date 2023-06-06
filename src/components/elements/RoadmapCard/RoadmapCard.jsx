import Button from "../../globals/Button/Button.jsx";
import { ReactComponent as ArrowUpIcon } from "../../../assets/images/shared/icon-arrow-up.svg"
import { ReactComponent as CommentsIcon } from "../../../assets/images/shared/icon-comments.svg"

const RoadmapCard = ({ suggestion, status }) => {
    return <li className={`roadmap-card roadmap-card--${suggestion.status} rounded-xl`}>
    <div className="bg-white p-8 rounded-t-none">
        <div className="flex items-center gap-4 mb-2">
            <div className={`w-[8px] h-[8px] rounded-full indicator-${status.label}`}></div>
            <p className="text-paler-navy">{status.label}</p>
        </div>
        <h4 className="mb-2 text-lg">{suggestion.title}</h4>
        <p>{suggestion.description}</p>
        <div className="category-tag w-fit px-4 py-1.5 mt-4">{suggestion.category}</div>
        <footer className="flex justify-between items-center mt-4">
            <Button classNames={"btn-upvote"} label={suggestion.upvotes} icon={<ArrowUpIcon />} />
            <div className="suggestion-card__comments-indicator flex items-center gap-2">
                <CommentsIcon />
                {suggestion.comments ? (
                    <span>{suggestion.comments.length}</span>
                ): <span>0</span>}
            </div>
        </footer>
    </div>
</li>
}

export default RoadmapCard