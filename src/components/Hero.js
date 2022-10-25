import { Grid } from '@nextui-org/react';
import CardItem from './elements/CardItem';

function Hero() {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={4}>
        <CardItem text="1 of 3">Hello</CardItem>
      </Grid>
      <Grid xs={4}>
        <CardItem text="1 of 3">Hello</CardItem>
      </Grid>
      <Grid xs={4}>
        <CardItem text="1 of 3">Hello</CardItem>
      </Grid>
    </Grid.Container>
  );
}

export default Hero;
