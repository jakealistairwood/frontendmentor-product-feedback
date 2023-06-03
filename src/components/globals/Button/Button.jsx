const Button = ({ classNames, isLink, label }) => {
    if(isLink) {
        return <a className={`btn ${classNames}`} href="#">{label}</a>
    } else {
        return <button className={`btn ${classNames}`}>{label}</button>
    }
}

export default Button;