import { useNavigate } from "react-router";
import { ReactComponent as SuggestionsIcon } from "../../../assets/images/suggestions/icon-suggestions.svg"
import { ReactComponent as ArrowLeft } from "../../../assets/images/shared/icon-arrow-left.svg"
import Button from "../Button/Button";

const Navbar = ({ noOfSuggestions, hasBreadcrumb, titleOptions }) => {
    let navigate = useNavigate();

    return <nav className="navbar py-3.5 px-4 bg-deep-navy rounded-xl text-white flex justify-between items-center">
        <div className="flex flex-col">
            {hasBreadcrumb && <Button label={"Go Back"} icon={<ArrowLeft />} triggerFunctionality={() => navigate(-1)} />}
            <div className="flex items-center gap-2">
                {titleOptions.icon && <>{titleOptions.icon}</>}
                <p className="text-white">{titleOptions.title}</p>
            </div>
        </div>
        <Button label={"Add Feedback"} href={"/suggestions/add-feedback"} classNames={"btn-primary"} isLink={true} />
    </nav>
}

export default Navbar;