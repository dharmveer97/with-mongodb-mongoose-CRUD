import React from 'react';
import axios from 'axios';
import { Grid, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { CardItem } from '../../components/elements';
import config from '../../utils/config';

function EachHero({ heros }) {
  const router = useRouter();
  const heroId = router?.query?.id;

  const handleDelete = async () => {
    try {
      const res = await axios(`${config.apiUrl}/api/hero/${heroId}`, {
        method: 'DELETE',
      });
      if (res) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <Text
        align="center"
        size={34}
        weight="bold"
        css={{
          as: 'center',
          mb: '20px',
          mt: '20px',
        }}
      >
        Identity of the hero
      </Text>
      <Grid.Container gap={2} justify="center" css={{ marginTop: 20 }}>
        <CardItem data={heros} isSmall hideEditButton hideViewButton handleDelete={handleDelete} />
      </Grid.Container>
    </Layout>
  );
}

export async function getServerSideProps(params) {
  const { id } = params.params;
  const res = await axios(`${config.apiUrl}/api/hero/${id}`);
  const { hero } = res.data;
  return {
    props: { heros: hero }, // will be passed to the page component as props
  };
}

export default EachHero;
