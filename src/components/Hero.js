import { Grid } from '@nextui-org/react';
import CardItem from './elements/CardItem';

const data = [{ title: 'First item' }, { title: 'Second item' }, { title: 'Third item' }];

function Hero() {
  return (
    <Grid.Container gap={2} justify="center">
      {data?.map((element) => (
        <Grid xs={4}>
          <CardItem>{element.title}</CardItem>
        </Grid>
      ))}

    </Grid.Container>
  );
}

export default Hero;
