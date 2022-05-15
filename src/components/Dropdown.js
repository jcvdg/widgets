import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ( {options, selected, onSelectedChange} ) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    
    // const renderedOptions = options.map( (option) => {
    //     return (
    //         <div key={option.value} className="item">
    //             {options.label}
    //         </div>
    //     )
    // });
    // useEffect( () => {
        //     document.body.addEventListener(
        //         'click', () => {
        //             setOpen(false);
        //         },
        //         {capture: true }
        //     );
        // },[]);

    useEffect( () => {
        const onBodyClick = (event) => {
            // .contains allows us to check if one DOM element is contained within another DOM element
            if( ref.current.contains(event.target) ) {
                return;
            }
            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick, {capture:true});

        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture:true,});
        }
        
    },[])

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) {
            // don't render anything
            return null;
        }
        return (
          <div 
            onClick={() => onSelectedChange(option)}
            key={option.value} className="item">
            {option.label}
          </div>
        );
    }); 

    return (
        <div ref= {ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div 
                    onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;