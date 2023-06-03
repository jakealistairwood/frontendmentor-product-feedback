import { ReactComponent as CommentsIcon } from "../../../assets/images/shared/icon-comments.svg"
import Button from "../../globals/Button/Button";

const SuggestionCard = ({ suggestion }) => {

    const { title, description, comments } = suggestion;

    console.log(suggestion);

    return <div className="suggestion-card bg-white px-8 py-7 rounded-xl flex justify-between items-center">
        <Button isLink={false} label={suggestion.upvotes} classNames={"btn-upvote"} />
        <div className="suggestion-card__body">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className="suggestion-card__comments-indicato flex items-center gap-2">
            <CommentsIcon />
            {comments ? (
                <span>{comments.length}</span>
            ): <span>0</span>}
        </div>
    </div>
}

export default SuggestionCard