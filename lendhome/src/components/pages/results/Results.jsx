import React from "react";
import PropertyCard from "./PropertyCard";
import { useLocation } from "react-router-dom";
function Results() {
    const location = useLocation()
    const searchParams = {}
    const querySearchParameter = new URLSearchParams(location.search)
    const paramsIterator = querySearchParameter.entries()
    for (let [key,value] of paramsIterator) {
        searchParams[key] = value;
        console.log(searchParams)
    }
    return <div>
        <PropertyCard />
    </div>
}
export default Results