import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Header from '../components/Head';
import HowWorks from '../components/HowWorks';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Stats from '../components/Stats';
import Story from '../components/Story';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Store GG</title>
        <link />
      </Head>
      <div className="min-h-screen overflow-hidden">
        <Layout>
          <Header />
          <HowWorks />
          <Feature />
          <Stats />
          <Story />
        </Layout>
      </div>
    </>
  );
}
