import Button from "../../globals/Button/Button"
import { ReactComponent as NoSuggestionsIllustration } from "../../../assets/images/suggestions/illustration-empty.svg"
import { ReactComponent as PlusIcon } from "../../../assets/images/shared/icon-plus.svg"

const NoSuggestions = () => {
    return <section className="bg-white no-suggestions flex justify-center items-center rounded-xl py-28">
        <div className="no-suggestions__wrapper flex flex-col items-center items-center max-w-[410px]">
            <div className="no-suggestions__illustration pb-14">
                <NoSuggestionsIllustration />
            </div>
            <h2 className="text-2xl font-semibold pb-4">There is no feedback yet.</h2>
            <p className="text-center pb-12">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            <Button isLink={true} label={"Add Feedback"} classNames={"btn-primary"} icon={<PlusIcon />} />
        </div>
    </section>
}

export default NoSuggestions