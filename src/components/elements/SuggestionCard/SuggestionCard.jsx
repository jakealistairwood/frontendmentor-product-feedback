import { ReactComponent as CommentsIcon } from "../../../assets/images/shared/icon-comments.svg"
import { ReactComponent as ArrowUpIcon } from "../../../assets/images/shared/icon-arrow-up.svg"
import Button from "../../globals/Button/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SuggestionCard = ({ suggestion, setSuggestions, isLink, windowWidth }) => {

    const { title, description, comments, id, category } = suggestion;

    console.log(windowWidth);

    const handleUpvote = () => {
        console.log(suggestion.upvotes);
    }

    return <div className={`suggestion-card bg-white px-8 py-7 rounded-xl flex ${windowWidth < 640 ? "flex-col gap-y-6 items-start" : "justify-between items-center"}`}>
        <div className="flex gap-10">
            {windowWidth > 641 && <Button isLink={false} label={suggestion.upvotes} classNames={"btn-upvote self-start"} icon={<ArrowUpIcon />} triggerFunctionality={handleUpvote} />}
            {isLink ? <Link to={`/suggestions/${id}`} className="suggestion-card__body">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-paler-navy">{description}</p>
                <div className="category-tag w-fit px-4 py-1.5 mt-4">{category}</div>
            </Link> : <div className="suggestion-card__body">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-paler-navy">{description}</p>
                <div className="category-tag w-fit px-4 py-1.5 mt-4">{category}</div>
            </div>}
        </div>
        {/* <div className="suggestion-card__comments-indicator flex items-center gap-2">
            <CommentsIcon />
            {comments ? (
                <span>{comments.length}</span>
            ): <span>0</span>}
        </div> */}
        {windowWidth > 640 ? <div className="suggestion-card__comments-indicator flex items-center gap-2">
            <CommentsIcon />
            {comments ? (
                <span>{comments.length}</span>
            ): <span>0</span>}
        </div> : <footer className="suggestion-card__footer flex w-full justify-between items-center">
        <Button isLink={false} label={suggestion.upvotes} classNames={"btn-upvote self-start"} icon={<ArrowUpIcon />} triggerFunctionality={handleUpvote} />
        <div className="suggestion-card__comments-indicator flex items-center gap-2">
            <CommentsIcon />
            {comments ? (
                <span>{comments.length}</span>
            ): <span>0</span>}
        </div>
    </footer>}
    </div>
}

export default SuggestionCard