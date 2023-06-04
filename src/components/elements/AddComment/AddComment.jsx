import { useState, useEffect, useRef } from "react"
import Button from "../../globals/Button/Button"

const AddComment = ({ currentSuggestion, setCurrentSuggestion, comment, setComment, postComment }) => {
    const [ maxCharLength, setMaxCharLength ] = useState(250);
    const [ charsRemaining, setCharsRemaining ] = useState();

    let commentInput = useRef();

    // const [ comment, setComment ] = useState({
    //     content: "",
    //     id: "",
    //     user: {
    //         image: "/images/image-suzanne.png",
    //         name: "Suzanne Smith",
    //         username: "suzie_smith1234"
    //     }
    // })
    
    const checkMaxCharLength = (e) => {
        if(charsRemaining <= 0) false;
        setCharsRemaining(maxCharLength - e.target.value.length)
        setComment({
            ...comment,
            id: currentSuggestion.comments.length + 1,
            content: e.target.value,
        })
    }
    
    useEffect(() => {
        console.log("use effect ran");
        setCharsRemaining(maxCharLength)
        // console.log(maxCharLength, commentInput.current.value.length);
    }, []);

    // const postComment = () => {
    //     setSuggestion({
    //         ...suggestion,
    //         comments: suggestion.comments.push(comment)
    //     })
    // }

    return <form className="add-comment bg-white rounded-xl px-8 py-6 mt-6" onSubmit={postComment}>
        <label className="mb-6" htmlFor="addComment">
            <h3>Add Comment</h3>
        </label>
        <textarea 
            className={`min-h-[80px] w-full mt-6 mb-4 ${charsRemaining <= 0 && "disabled"}`} 
            name="" 
            id="addComment" 
            ref={commentInput} 
            // onChange={() => setCharsRemaining((prev) => prev - e.target.value)}
            onChange={checkMaxCharLength}
        ></textarea>
        <div className="flex justify-between items-center">
            <p>{charsRemaining} Characters Left</p>
            <Button isLink={false} label={"Post Comment"} classNames={"btn-primary"} />
        </div>
    </form>
}

export default AddComment