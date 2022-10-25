import React from 'react';
import axios from 'axios';
import { Grid, Text } from '@nextui-org/react';
import Layout from '../../components/Layout';
import { CardItem } from '../../components/elements';

function EachHero({ heros }) {
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
        <CardItem data={heros} isSmall hideEditButton hideViewButton />
      </Grid.Container>
    </Layout>
  );
}

export async function getServerSideProps(params) {
  const { id } = params.params;
  const res = await axios(`http://localhost:3000/api/hero/${id}`);
  const { hero } = res.data;
  return {
    props: { heros: hero }, // will be passed to the page component as props
  };
}

export default EachHero;
