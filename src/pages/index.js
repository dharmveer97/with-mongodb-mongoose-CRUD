import axios from 'axios';
import Layout from '../components/Layout';
import Hero from '../components/home/Hero';

function Index({ heros }) {
  return (
    <Layout>
      <Hero data={heros} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await axios('http://localhost:3000/api/hero');
  const { hero } = res.data;
  return {
    props: { heros: hero }, // will be passed to the page component as props
  };
}

export default Index;
