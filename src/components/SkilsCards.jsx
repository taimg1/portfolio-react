




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
        <div id="skills" className="flex flex-col mx-32 items-center flex-wrap  shadown rounded-lg mt-8">
            <h1 className="text-4xl text-white">Skills</h1>
            <div className="flex justify-around">
                <SkillCard list={web} name="Web"/>
                <SkillCard list={languages} name="Languages"/>
                <SkillCard list={databases} name="Databases"/>
            </div>
        </div>
    )
}


const SkillCard = ({list, name}) => {
    return (
        <p
            className="block max-w-sm m-6 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <ul className="pl-6">
                {list.map((item) => (
                    <li key={item.name} className="font-normal text-gray-700 dark:text-gray-400 list-disc text-lg">
                        {item.name}
                    </li>
                ))}
            </ul>


        </p>
    )
}