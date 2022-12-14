import axios from 'axios';
import { NextSeo } from 'next-seo';
import config from '../utils/config';

import Layout from '../components/Layout';
import Hero from '../components/home/Hero';

function Index({ heros }) {
  return (
    <Layout>
      <NextSeo
        title="Super Hero"
        description="Super heros in the world"
      />
      <Hero data={heros} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await axios(`${config.apiUrl}/api/hero`);
  const { hero } = res.data;
  return {
    props: { heros: hero }, // will be passed to the page component as props
  };
}

export default Index;
