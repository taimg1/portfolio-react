import { Tilt } from 'react-tilt'

const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            60,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


export const SkillCards = () =>{
    const web = [
        {name: "Asp.net Core Web API"},
        {name: "Asp.net Core MVC"},
        {name: "React"},
        {name: "Blazor"},
        {name: "Flask"}
    ]
    const languages = [
        {name: "C#"},
        {name: "JavaScript"},
        {name: "Python"},
        {name: "C/C++"},
        {name: "PHP"},
    ]
    const databases = [
        {name: "MS SQL"},
        {name: "MySQL"},
        {name: "SQLite"},
        {name: "MariaDB"},
    ]
    return(
        <div id="skills" className="flex flex-col lg:mx-32 items-center justify-center  flex-wrap  shadown rounded-lg mt-8">
            <h1 className="text-4xl text-white">Skills</h1>
            <div className="flex lg:flex-row flex-col justify-around">
                <SkillCard list={web} name="Web"/>
                <SkillCard list={languages} name="Languages"/>
                <SkillCard list={databases} name="Databases"/>
            </div>
        </div>
    )
}


const SkillCard = ({list, name}) => {
    return (
        <Tilt options={defaultOptions}
            className="block max-w-sm m-6 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <ul className="pl-6">
                {list.map((item) => (
                    <li key={item.name} className="font-normal text-gray-700 dark:text-gray-400 list-disc text-lg">
                        {item.name}
                    </li>
                ))}
            </ul>
        </Tilt>
    )
}