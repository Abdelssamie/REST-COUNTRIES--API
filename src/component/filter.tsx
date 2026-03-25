import { Dispatch, SetStateAction } from "react";

type paramFilter = {
    setFilter: Dispatch<SetStateAction<string>>;
    setSearch: Dispatch<SetStateAction<string>>;
}

function Filter({setFilter, setSearch}: paramFilter) {
    return (
        <div className="filter">
            <input type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
            <select name="region" id="" defaultValue="All" onChange={(e)=>setFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
            </select>
        </div>
    )
}
export default Filter;