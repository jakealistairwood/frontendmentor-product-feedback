import Button from "../Button/Button"
import { useNavigate } from "react-router"
import { ReactComponent as ArrowLeft } from "../../../assets/images/shared/icon-arrow-left.svg"

const BreadcrumbNav = ({ hasAdditionalButton }) => {
    let navigate = useNavigate();

    return <nav className="breadcrumb flex justify-between items-center mb-6">
        <Button label={"Go Back"} icon={<ArrowLeft />} triggerFunctionality={() => navigate(-1)} />
        {hasAdditionalButton && <Button label={"Edit Feedback"} classNames={"btn-secondary"} triggerFunctionality={null}  />}
    </nav>
}

export default BreadcrumbNav