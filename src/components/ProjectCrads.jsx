


export const ProjectCards = () => {
    const projects = [
        {name: "PoolMS", description: "A pool management system", image: "project1.jpg"},
        {name: "GameLib", description: "A library of games", image: "project1.jpg"},
        {name: "GameLib", description: "A library of games", image: "project1.jpg"},
        {name: "GameLib", description: "A library of games", image: "project1.jpg"},
    ]
    return(
        <div className="flex flex-col items-center bg-white rounded-lg pb-4 ">
            <h1 className="text-4xl mb-4 text-gray-900">Projects</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
                {projects.map((project) => (
                    <ProjectCard project={project}/>
                ))}
            </div>
        </div>
    )
}


const ProjectCard = ({project}) => {
    return (
        <p
           className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-86 md:h-auto md:w-36 md:rounded-none md:rounded-s-lg" src={require(`.//assets/${project.image}`)} alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                </div>
        </p>
    )
}