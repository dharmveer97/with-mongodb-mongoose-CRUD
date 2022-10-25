import { Grid } from '@nextui-org/react';
import CardItem from '../elements/CardItem';

function Hero({ data }) {
  return (
    <Grid.Container gap={2} justify="center" mt="70px">
      {data && data.map((element) => {
        if (!element) return null;
        return (
          <Grid
            key={element._id}
            sm={12}
            md={5}
            css={{ justifyContent: 'center' }}
          >
            <CardItem data={element} />
          </Grid>
        );
      })}
    </Grid.Container>
  );
}

export default Hero;
