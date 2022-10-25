import { Grid } from '@nextui-org/react';
import CardItem from '../elements/CardItem';

const data = [{ title: 'First item' }, { title: 'Second item' }, { title: 'Third item' }];

function Hero() {
  return (
    <Grid.Container gap={2} justify="center" mt="70px">
      {data && data.map((element) => {
        if (!element.title) return null;
        return (
          <Grid
            key={element.title}
            sm={12}
            md={5}
            css={{ justifyContent: 'center' }}
          >
            <CardItem title={element.title} />
          </Grid>
        );
      })}
    </Grid.Container>
  );
}

export default Hero;
