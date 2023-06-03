import uuid from "react-uuid"
import Button from "../../globals/Button/Button"

const FeedbackFilters = ({ filters }) => {
    return <ul className="feedback-filters rounded-xl p-6 bg-white flex flex-wrap gap-2">
        <li className="">
            <Button label={"All"} isLink={false} classNames={"btn-filter btn-filter--active text-white"} />
        </li>
        {filters.map(filter => {
            return <li className="">
                <Button label={filter} isLink={false} classNames={"btn-filter"} />
            </li>
        })}
    </ul>
}

export default FeedbackFilters;