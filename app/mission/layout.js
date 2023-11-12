import Link from "next/link"

const MissionLayout = ({children}) => {
    return <>
    <h1>Наша миссия</h1>
        <ul>
            <li><Link href='/mission/contries'><div className='btn btn-success'>Страны</div></Link></li>
            <li><Link href='/mission/media'><div className='btn btn-danger'>Медиа</div></Link></li>
        </ul>
        {children}
    </>
}
export default MissionLayout 