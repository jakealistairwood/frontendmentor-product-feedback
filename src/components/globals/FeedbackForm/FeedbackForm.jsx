import { useState, useEffect } from "react";
import { ReactComponent as PlusIcon } from "../../../assets/images/shared/icon-plus.svg";
import Button from "../Button/Button";
import { useNavigate } from "react-router";
import { ReactComponent as ArrowDownIcon } from "../../../assets/images/shared/icon-arrow-down.svg";

const FeedbackForm = ({ suggestions, title, feedback, setFeedback, categories }) => {
    let navigate = useNavigate();
    
    const [ defaultCategory, setDefaultCategory ] = useState("feature");
    const [ categoryDropdownOpen, setCategoryDropdownOpen ] = useState(false);

    const submitNewFeedback = (e) => {
        e.preventDefault();
        suggestions.push(feedback)
        console.log(suggestions)
        setFeedback({
            id: suggestions.length + 1,
            title: "",
            category: "",
            upvotes: 0,
            status: "suggestion",
            description: "",
            comments: []
        })
    }

    useEffect(() => {
        setFeedback({
            ...feedback,
            category: defaultCategory
        })
    }, []);

    return <form className="pt-14 pb-10 px-10 bg-white rounded-xl relative mt-16" onSubmit={submitNewFeedback}>
        <div className="form-icon absolute left-10">
            <PlusIcon />
        </div>
        <h1 className="text-2xl pb-10">{title}</h1>
        <div className="flex flex-col gap-6">
            <div className="form-control">
                <label htmlFor="feedbackTitle">
                    <h2>Feedback Title</h2>
                    <p>Add a short, descriptive headline</p>
                </label>
                <input className="min-h-[48px] py-3.5 px-6 mt-4" id="feedbackTitle" type="text" onChange={(e) => setFeedback({
                    ...feedback,
                    title: e.target.value
                })} />
            </div>
            <div className="form-control">
                <label htmlFor="feedbackCategory">
                    <h2>Category</h2>
                    <p>Choose a category, for your feedback</p>
                </label>
                <div className="dropdown-menu relative" id="feedbackCategory">
                    <button className="select-input min-h-[48px] py-3.5 px-6 mt-4 flex justify-between items-center" onClick={() => {
                        setCategoryDropdownOpen(!categoryDropdownOpen)
                    }}>
                        <span>{defaultCategory}</span>
                        <ArrowDownIcon className={`dropdown-icon ${categoryDropdownOpen && "dropdown-icon--active"}`} />
                    </button>
                    <ul className={`select-dropdown absolute ${categoryDropdownOpen ? "flex flex-col bg-white rounded-xl w-full" : "hidden"}`}>
                        {categories.map(category => {
                            return <li className="px-6 py-3.5">
                                <button className="w-full text-left" onClick={() => {
                                    setDefaultCategory(category)
                                    setFeedback({
                                        ...feedback,
                                        category: category
                                    })
                                    setCategoryDropdownOpen(false)
                                }}>{category}</button>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            <div className="form-control">
                <label htmlFor="feedbackDetail">
                    <h2>Feedback Detail</h2>
                    <p>Include any specific comments on what should be improved, added etc.</p>
                </label>
                <textarea className="min-h-[96px] mt-4" name="" id="feedbackDetail" onChange={(e) => setFeedback({ 
                    ...feedback, 
                    description: e.target.value 
                })}></textarea>
            </div>
        </div>
        <footer className="flex justify-end items-center mt-8 gap-4">
            <Button classNames={"btn-tertiary"} label={"Cancel"} triggerFunctionality={() => navigate(-1)} />
            <input type="submit" className="btn btn-primary" value="Add Feedback" />
        </footer>
    </form>
} 

export default FeedbackForm