import React, { useState } from 'react';

const Accordion = ({ items }) => {
    // activeIndex - it's the value that we're keeping track of; a variable that'll change overtime
    // setActiveIndex - a function to call to update our piece of state (activeIndex). Everytime it's called, like our class based component, it'll cause the entire component to re-render.
    // useState - it takes 1 arg, which is the default value for our state.  So basically, activeIndex = null;
    // activeIndex and setActiveIndex name are not special.
    // whenever a setter function is called (from a useState hook), the entire component will rerender.  So the entire Accordion function will be executed again from top-to-bottom.  Whenever the component is re-rendered, the default value of the useState will fall away.  Basically it'll not be used anymore, as it's only an initialization value.  As soon as the setter is called, we won't be using the default value anymore, so the activeIndex will retain it's new value (via the setter) when re-rendering
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        // return React.Fragment so that we have a containing JSX element with 2 divs within it, instead of 2 divs within a div.
        return (
            <React.Fragment key={item.title}> 
                <div 
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return <div className="ui styled accordion">
            {renderedItems}
        </div>;
}

export default Accordion;