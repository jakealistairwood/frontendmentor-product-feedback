import { ReactComponent as PlusIcon } from "../../../assets/images/shared/icon-plus.svg"
import Button from "../Button/Button";
import { useNavigate } from "react-router";

const FeedbackForm = ({ title, feedbackData }) => {
    let navigate = useNavigate();
    console.log(feedbackData);
    return <form className="pt-14 pb-10 px-10 bg-white rounded-xl relative mt-16">
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
                <input className="min-h-[48px] py-3.5 px-6 mt-4" id="feedbackTitle" type="text" />
            </div>
            <div className="form-control">
                <label htmlFor="feedbackCategory">
                    <h2>Category</h2>
                    <p>Choose a category, for your feedback</p>
                </label>
                <div role="button" id="feedbackCategory">
                    
                </div>
            </div>
            <div className="form-control">
                <label htmlFor="feedbackDetail">
                    <h2>Feedback Detail</h2>
                    <p>Include any specific comments on what should be improved, added etc.</p>
                </label>
                <textarea className="min-h-[96px] mt-4" name="" id="feedbackDetail"></textarea>
            </div>
        </div>
        <footer className="flex justify-end items-center mt-8 gap-4">
            <Button classNames={"btn-tertiary"} label={"Cancel"} triggerFunctionality={() => navigate(-1)} />
            <input type="submit" className="btn btn-primary" value="Add Feedback" />
        </footer>
    </form>
} 

export default FeedbackForm