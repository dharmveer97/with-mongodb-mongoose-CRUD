import React from 'react';
import {
  Card, Text, Button, Link,
} from '@nextui-org/react';

function EmptyState() {
  return (
    <Card
      isPressable
      isHoverable
      variant="bordered"
      css={{ mw: '40%', mt: '20px' }}
    >

      <Card.Body css={{ py: 20 }}>
        <Text size={30} align="center">
          No Hero Found!.
        </Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Button href="/add" color="primary" auto ghost as={Link} size="sm" css={{ marginRight: '10px' }}>
          Add Hero
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default EmptyState;
