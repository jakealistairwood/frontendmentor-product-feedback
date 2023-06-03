import { Link } from "react-router-dom";

const Button = ({ classNames, isLink, href, label, icon, triggerFunctionality }) => {
    if(isLink) {
        return <Link to={href} className={`btn ${classNames}`}>
            <div className="flex justify-between items-center gap-2">
                {icon && <>{icon}</>}
                <span>{label}</span>
            </div>
        </Link>
    } else {
        return <button className={`btn ${classNames}`} onClick={triggerFunctionality}>
            <div className="flex justify-between items-center gap-2">
                {icon && <>{icon}</>}
                <span>{label}</span>
            </div>
        </button>
    }
}

export default Button;