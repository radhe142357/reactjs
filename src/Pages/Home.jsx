import HomeHero from "../Home/HomeHero"
import Work from "../Home/Work"
import Featured from "../Home/Featured"
import Coworkmate from "../Home/Coworkmate"
import HomeSaying from "../Home/HomeSaying"
import Faq from "../Home/Faq"
import BookWorkspace from "../Home/BookWorkspace"

const Home = () => {
    return (
        <>
            <HomeHero />
            <Work />
            <Featured />
            <Coworkmate />
            <HomeSaying />
            <Faq />
            <BookWorkspace />
        </>
    )
}

export default Home