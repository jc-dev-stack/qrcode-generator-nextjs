import Footer from '@/components/footer'
import Header from '@/components/header'
import LayoutDefault from '@/layouts/default'
import Main from '@/components/main';
import { GetStaticPropsResult } from 'next';

export default function Home() {


  return (
    <LayoutDefault titlePage='Home'>
      <Header
        titleHead='Qrcode Generator'
        descriptionHead='' />
      <Main />
      <Footer />
    </LayoutDefault>
  )
}


export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
  return {
    props: {

    }
  }
}