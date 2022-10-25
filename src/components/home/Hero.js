import { Grid } from '@nextui-org/react';
import { EmptyState, CardItem } from '../elements';

function Hero({ data }) {
  return (
    <Grid.Container gap={2} justify="center" css={{ marginTop: 50 }}>
      {data.length < 1 && <EmptyState />}
      {data && data.map((element) => {
        if (!element) return null;
        return (
          <Grid
            key={element._id}
            sm={12}
            md={5}
            css={{ justifyContent: 'center' }}
          >
            <CardItem data={element} hideDeleteButton />
          </Grid>
        );
      })}
    </Grid.Container>
  );
}

export default Hero;
