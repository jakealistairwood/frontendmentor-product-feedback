import Button from "../Button/Button"
import { useNavigate } from "react-router"
import { ReactComponent as ArrowLeft } from "../../../assets/images/shared/icon-arrow-left.svg"

const BreadcrumbNav = () => {
    let navigate = useNavigate();

    return <nav className="breadcrumb flex justify-between items-center mb-6">
        <Button label={"Go Back"} icon={<ArrowLeft />} triggerFunctionality={() => navigate(-1)} />
        <Button label={"Edit Feedback"} classNames={"btn-secondary"} triggerFunctionality={null}  />
    </nav>
}

export default BreadcrumbNav