import AboutPage from '/components/AboutPage'
import {Metadata} from 'next'

export const metadata = {
    title: 'About | Churchnext',
    description: 'Generated by create next app',
}

const About = () => {
    return <>
    <AboutPage/>
    </>
}
export default AboutPage