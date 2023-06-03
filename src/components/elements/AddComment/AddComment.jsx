import { useState, useEffect } from "react"
import Button from "../../globals/Button/Button"

const AddComment = ({ setSuggestions }) => {
    const [ maxCharLength, setMaxCharLength ] = useState(250);
    const [ charsRemaining, setCharsRemaining ] = useState();

    const checkMaxCharLength = (e) => {
        if(charsRemaining <= 0) false;
        setCharsRemaining(maxCharLength - e.target.value.length)
    }

    useEffect(() => {
        setCharsRemaining(maxCharLength)
    }, []);

    return <form className="add-comment bg-white rounded-xl px-8 py-6 mt-6">
        <label className="mb-6" htmlFor="addComment">
            <h3>Add Comment</h3>
        </label>
        <textarea className={`min-h-[80px] w-full mt-6 mb-4 ${charsRemaining <= 0 && "disabled"}`} name="" id="addComment" onChange={checkMaxCharLength}></textarea>
        <div className="flex justify-between items-center">
            <p>{charsRemaining} Characters Left</p>
            <Button isLink={false} label={"Post Comment"} classNames={"btn-primary"} />
        </div>
    </form>
}

export default AddComment