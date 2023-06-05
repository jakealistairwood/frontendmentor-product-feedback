import { useState, useEffect } from "react"
import FeedbackFilters from "../../elements/FeedbackFilters/FeedbackFilters"
import Roadmap from "../../elements/Roadmap/Roadmap"

const Sidebar = ({ suggestionCategories, filterCategories, statuses, originalSuggestions, mobileMenuOpen, setMobileMenuOpen }) => {

    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)

    console.log(windowWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
        return () => window.removeEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, [windowWidth]);

    console.log(filterCategories)
    return <aside className="sidebar fixed sm:static left-0 sm:left-[unset] max-w-full lg:max-w-[255px] lg:sticky lg:top-0 w-full flex flex-col sm:grid sm:grid-cols-3 lg:flex flex-row lg:flex-col gap-0 sm:gap-6 z-50">
        <h1 className="feedback-board h-full lg:h-[137px] sm:rounded-xl p-6 flex flex-row sm:flex-col justify-between sm:justify-end text-white">
            <div className="flex flex-col w-full">
                <span className="text-xl font-bold">Frontend Mentor</span>
                <span className="opacity-75">Feedback Board</span> 
            </div>
            <button className="sm:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <div>{mobileMenuOpen ? "Close" : "Menu"}</div>
            </button>
        </h1>
        <div className={`gap-6 ${windowWidth < 640 & mobileMenuOpen ? "flex bg-pale-blue p-6 gap-6 max-w-[272px] self-end min-h-screen rounded-none" : "hidden"} flex-col sm:flex-row sm:col-start-2 sm:col-end-4 sm:grid sm:grid-cols-2 lg:flex lg:flex-col`}>
            <FeedbackFilters 
                filters={suggestionCategories} 
                originalFilters={filterCategories} 
                originalSuggestions={originalSuggestions} 
            />
            <Roadmap statuses={statuses} />
        </div>
    </aside>
}

export default Sidebar