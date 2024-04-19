
export const MainContext = () => {


    const ContatsLinks = [
        {src: "icons8-email-50.png", link: "test.gamelib.com", alt:"email", text:"test.gamelib.com"},
        {src: "icons8-phone-50.png", link: "test.gamelib.com", alt:"phone", text:"044 (012) 5265 462"},
        {src: "icons8-home-50.png", link: "#", alt:"home", text:"Ostroh, Ukraine"},

    ]
    return(
        <div className="flex mx-32 bg-white shadown rounded-lg mt-10">
            <div className="flex justify-center p-8 pt-10 ">
                    <img src={require(".//assets/photo.jpg")} alt="programming" className="w-[620px] h-[690px] rounded-lg pr-24 "/>
                <div className="pt-24 pr-64">
                    <section className="mb-3">
                        <h3 className="text-lg">Hello everyone, I am</h3>
                        <h1 className="text-5xl font-bold">Oleh Sokalskyi</h1>
                        <p className="text-mg pt-3 font-bold ">Junior/ Full stack developer</p>
                    </section >
                    <section >
                        <p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to
                            the
                            ghost showing Scrooge some different futures)</p>
                        <h3 className="text-2xl font-bold mb-1">About myself</h3>
                        <p>Some test</p>
                    </section>
                    <section className="pt-3 pl-4">
                        {ContatsLinks.map((data) => (
                            <LinkImage data={data} >
                                {data.text}
                            </LinkImage>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
}
const LinkImage = ({data, children}) => {
    return (
        <div className="flex mt-4">
            <img className="w-7 h-7" src={require(`.//assets/${data.src}`)} alt={data.alt}/>
            <a href={data.link} className="pl-4 text-mg text-gray-600">
                {children}
            </a>
        </div>
    )
}




