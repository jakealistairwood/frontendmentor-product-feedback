const Button = ({ classNames, isLink, label, icon, triggerFunctionality }) => {
    if(isLink) {
        return <a className={`btn ${classNames}`} href="#">
            <div className="flex justify-between items-center gap-2">
                {icon && <>{icon}</>}
                <span>{label}</span>
            </div>
        </a>
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