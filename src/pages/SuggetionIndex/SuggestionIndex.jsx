import { useState, useEffect } from "react" 
import BreadcrumbNav from "../../components/globals/BreadcrumbNav/BreadcrumbNav"
import { useParams } from "react-router"

const SuggestionIndex = () => {
    let { id } = useParams();
    console.log(id);
    return <main className="max-w-[730px] w-full mx-auto py-20">
        <section>
            <BreadcrumbNav />
        </section>
    </main>
}

export default SuggestionIndex