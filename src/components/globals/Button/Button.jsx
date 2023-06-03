const Button = ({ classNames, isLink, label, icon }) => {
    if(isLink) {
        return <a className={`btn ${classNames}`} href="#">{label}</a>
    } else {
        return <button className={`btn ${classNames}`}>
            <div className="flex justify-between items-center">
                {icon && <>{icon}</>}
                <span>{label}</span>
            </div>
        </button>
    }
}

export default Button;