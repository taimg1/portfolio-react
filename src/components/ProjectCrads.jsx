import { Carousel,
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button
    } from "@material-tailwind/react";
import { Tilt } from 'react-tilt'

const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


export const ProjectCards = () => {
    const projects = [
        {name: "PoolMS", description: "A pool management system", image: "project1.jpg", language: "C#"},
        {name: "GameLib", description: "A library of games", image: "project1.jpg", language: "C#"},
        {name: "GameLib", description: "A library of games", image: "project1.jpg", language: "C#"},
        {name: "GameLib", description: "A library of games", image: "project1.jpg", language: "C#"},
    ]
    return (
        <div className="lg:mx-64 md:mx-32 mt-8">
            <Carousel
                className="rounded-xl "
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                {projects.map((project, index) => (
                    <div className="h-[500px]">

                        <ProjectCard key={index} project={project}
                                     className=""/>
                    </div>
                ))}

            </Carousel>
        </div>

    );

}


const ProjectCard = ({project}) => {
    return (
        <div className="relative h-full w-full ">
            <img
                src={require(`.//assets/${project.image}`)}
                alt="image 1"
                className="h-full w-full object-cover "
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75 ">
                <div className="w-3/4 flex justify-center md:w-2/4">
                    <Tilt options={defaultOptions} className="w-full max-w-[36rem] flex-row  bg-opacity-30">

                    <Card className="w-full max-w-[36rem] flex-row  bg-opacity-30">
                            <CardHeader
                             shadow={false}
                             floated={false}
                             className="m-0 w-2/5 shrink-0 rounded-r-none "
                         >
                         <img
                                 src={require(`.//assets/${project.image}`)}
                                 alt="card-image"
                                 className="h-52 w-full object-cover "
                             />
                         </CardHeader>
                         <CardBody>
                             <Typography variant="h6" color="white" className="mb-4 uppercase">
                                 {project.language}
                             </Typography>
                             <Typography variant="h4" color="white" className="mb-2">
                                 {project.name}
                             </Typography>
                             <Typography color="white" className="mb-8 font-normal">
                                 {project.description}
                             </Typography>
                             <a href="#" className="inline-block">
                                 <Button variant="text" color="white" className="flex items-center gap-2">
                                     Learn More
                                     <svg
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor"
                                         strokeWidth={2}
                                         className="h-4 w-4"
                                     >
                                         <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                         />
                                     </svg>
                                 </Button>
                             </a>
                         </CardBody>
                     </Card>
                    </Tilt>
                    </div>
                </div>
            </div>
    )
}



// <Card className="w-full max-w-[36rem] flex-row">
//     <CardHeader
//         shadow={false}
//         floated={false}
//         className="m-0 w-2/5 shrink-0 rounded-r-none"
//     >
//     <img
//             src={require(`.//assets/${project.image}`)}
//             alt="card-image"
//             className="h-52 w-full object-cover"
//         />
//     </CardHeader>
//     <CardBody>
//         <Typography variant="h6" color="gray" className="mb-4 uppercase">
//             {project.language}
//         </Typography>
//         <Typography variant="h4" color="blue-gray" className="mb-2">
//             {project.name}
//         </Typography>
//         <Typography color="gray" className="mb-8 font-normal">
//             {project.description}
//         </Typography>
//         <a href="#" className="inline-block">
//             <Button variant="text" className="flex items-center gap-2">
//                 Learn More
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     className="h-4 w-4"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//                     />
//                 </svg>
//             </Button>
//         </a>
//     </CardBody>
// </Card>