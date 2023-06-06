import { ReactComponent as CommentsIcon } from "../../../assets/images/shared/icon-comments.svg"
import { ReactComponent as ArrowUpIcon } from "../../../assets/images/shared/icon-arrow-up.svg"
import Button from "../../globals/Button/Button";
import { Link } from "react-router-dom";

const SuggestionCard = ({ suggestion, setSuggestions }) => {

    const { title, description, comments, id, category } = suggestion;

    const handleUpvote = () => {
        console.log(suggestion.upvotes);
    }

    return <div className="suggestion-card bg-white px-8 py-7 rounded-xl flex justify-between items-center">
        <div className="flex gap-10">
            <Button isLink={false} label={suggestion.upvotes} classNames={"btn-upvote self-start"} icon={<ArrowUpIcon />} triggerFunctionality={handleUpvote} />
            <Link to={`/suggestions/${id}`} className="suggestion-card__body">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-paler-navy">{description}</p>
                <div className="category-tag w-fit px-4 py-1.5 mt-4">{category}</div>
            </Link>
        </div>
        <div className="suggestion-card__comments-indicator flex items-center gap-2">
            <CommentsIcon />
            {comments ? (
                <span>{comments.length}</span>
            ): <span>0</span>}
        </div>
    </div>
}

export default SuggestionCard