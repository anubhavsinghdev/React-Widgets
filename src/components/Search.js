import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState("angular js");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term
                }
            });
            setResults(data.query.search);
        }

        // same as search helper fx (same can be done with .then())
        // (async ()=>{
        //     await axios.get();
        // })();

        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 500);
            return () => {
                clearTimeout(timeoutId);
            }
        }

    }, [results.length, term]);
    // React Hook useEffect has a missing dependency: 'results.length'. Either include it or remove the dependency array.

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className="ui button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    })
    // empty array or array with some term(state) or no array at all
    // as second args

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Search Term</label>
                    <input
                        type="text"
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}
export default Search;