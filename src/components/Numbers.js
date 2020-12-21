import React, {useState} from "react";

export const Numbers = props => {

    const [word, setWord] = useState("");
    const [filterDisplay, setFilterDisplay] = useState(props.persons);

    const handleChange = event => {

        let oldList = props.persons.map(person => {
            return {name: person.name. toLowerCase(), number: person.number};
        });

        if (event !=="") {
            let newList = [];
            setWord(event);
            newList = oldList.filter(person => 
                person.name.includes(word.toLowerCase())
            );

            setFilterDisplay(newList);
        } else{
            setFilterDisplay(props.persons);
        }
    };

    return (
        <div>
            <h1>Numbers</h1>
            filter: <input onChange={event => handleChange(event.target.value)}/>
            {filterDisplay.map((person, i) => (
                <div key={i}>
                    <li>
                        {person.name} &nbsp;
                        <span>{person.number}</span>
                    </li>
                </div>
            ))}

        </div>
    )
}