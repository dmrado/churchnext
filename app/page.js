// import Image from 'next/image'
import ChurchPage from '../components/ChurchPage'
import Template from '../components/Template'

import {Metadata} from 'next'

export const metadata = {
    title: 'Church | Churchnext',
    description: 'Generated by create next app',
}

const Church = () => {
  return <>
  {/* <ChurchPage/> */}
  <Template/>
  </>
   {/* <h1 className={styles.main}>Church</h1> */}
}
export default Church