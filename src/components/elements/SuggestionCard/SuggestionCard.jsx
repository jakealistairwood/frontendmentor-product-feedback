import { ReactComponent as CommentsIcon } from "../../../assets/images/shared/icon-comments.svg"
import { ReactComponent as ArrowUpIcon } from "../../../assets/images/shared/icon-arrow-up.svg"
import Button from "../../globals/Button/Button";
import { Link } from "react-router-dom";

const SuggestionCard = ({ suggestion }) => {

    const { title, description, comments, id } = suggestion;

    return <Link to={`/suggestions/${id}`} className="suggestion-card bg-white px-8 py-7 rounded-xl flex justify-between items-center">
        <div className="flex gap-10">
            <Button isLink={false} label={suggestion.upvotes} classNames={"btn-upvote"} icon={<ArrowUpIcon />} />
            <div className="suggestion-card__body">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-paler-navy">{description}</p>
            </div>
        </div>
        <div className="suggestion-card__comments-indicator flex items-center gap-2">
            <CommentsIcon />
            {comments ? (
                <span>{comments.length}</span>
            ): <span>0</span>}
        </div>
    </Link>
}

export default SuggestionCard