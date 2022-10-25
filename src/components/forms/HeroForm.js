import React from 'react';

import {
  Card,
  Spacer,
  Text,
  Container,
} from '@nextui-org/react';
import { Button, Input } from '../elements';

function HeroForm({
  onSubmit, initialValues, buttonText, handleChange, heading,
}) {
  return (
    <form onSubmit={onSubmit}>
      <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: '70vh' }}
      >
        <Card css={{ mw: '420px', p: '20px' }} variant="bordered">
          <Text
            size={24}
            weight="bold"
            css={{
              as: 'center',
              mb: '20px',
            }}
          >
            {heading}
          </Text>
          <Input
            placeholder="SuperHero"
            onChange={handleChange}
            type="text"
            name="superHero"
            value={initialValues?.superHero}
            required
          />
          <Spacer y={1} />
          <Input
            placeholder="Real Name"
            css={{ mb: '6px' }}
            onChange={handleChange}
            type="text"
            name="realName"
            value={initialValues?.realName}
            required
          />
          <Spacer y={1} />
          <Button type="submit">{buttonText || 'Add New Hero'}</Button>
        </Card>
      </Container>
    </form>
  );
}

export default HeroForm;
