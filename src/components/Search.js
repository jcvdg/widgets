import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    console.log('results', results);

    useEffect( () => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            console.log('term',term)
            console.log('data', data)
            setResults(data.query.search) ;
        }

        // if we're rendering for the first time, don't have delay when
        if (term && !results.length) {
            search();
        } else {
            // delay the api request to search
            const timeoutId = setTimeout( () => {
                if( term ) {
                    search(); 
                }
            }, 500); //500ms timer
    
            // useEffect can return a function only.
            // the return function here is invoked when the next time the useEffect() function is invoked. 
            // cancel the previous timer 
            return () => {
                console.log('CLEANUP');
                clearTimeout(timeoutId);
            };
        }

    }, [term]);

    const renderedResults = results.map( (result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a 
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className="ui button"
                        >
                            Go
                        </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {/* ONLY USE dangerouslySetInnerHTML if you trust the source. when rendering a string as a HTML */}
                    <span dangerouslySetInnerHTML={ {__html: result.snippet} }></span>
            
                    
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" 
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>

        </div>
    )
};

export default Search;