import React, { useState } from "react";
import Dropdown from "./Dropdown";
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import Convert from "./Convert";
const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    }, {
        label: 'Arabic',
        value: 'ar'
    }, {
        label: 'Hindi',
        value: 'hi'
    }, {
        label: 'Dutch',
        value: 'nl'
    }
];

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>

            <Dropdown
                label="Select A Language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className="ui header">
                <Convert language={language} text={text}/>
            </h3>
        </div>
    );

}

export default Translate;
