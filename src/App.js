import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

// this can be in or outside of the component because it's a static array of data
const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]

export default () => {
    // const [selected, setSelected] = useState( options[0] );
    return (
        <div>
            <br />
            {/* <Accordion items={items}/> */}
            {/* <Search /> */}

            {/* prop names can be whatever you want.  onSelectedChange isn't termed but this follows the format */}
            {/* <Dropdown 
                label="Select a Color"
                selected={selected}
                onSelectedChange={setSelected}
                options={options} 
            /> */}

            <Translate />

        </div>
    );
};

