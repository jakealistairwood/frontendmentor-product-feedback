import { ReactComponent as SuggestionsIcon } from "../../../assets/images/suggestions/icon-suggestions.svg"
import Button from "../Button/Button";

const Navbar = ({ noOfSuggestions }) => {
    return <nav className="navbar py-3.5 px-4 bg-deep-navy rounded-xl text-white flex justify-between items-center">
        <div className="">
            <div className="flex items-center gap-2">
                <SuggestionsIcon />
                <p className="text-white">{noOfSuggestions} Suggestions</p>
            </div>
        </div>
        <Button label={"Add Feedback"} href={"/suggestions/add-feedback"} classNames={"btn-primary"} isLink={true} />
    </nav>
}

export default Navbar;