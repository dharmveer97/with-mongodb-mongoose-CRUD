import {
  Card, Text, Row,
} from '@nextui-org/react';

import Button from './Button';

function CardItem({ data }) {
  return (
    <Card
      isPressable
      isHoverable
      variant="bordered"
      css={{ mw: '400px' }}
    >
      {data.superHero && (
      <Card.Header>
        <Text b>{data.superHero}</Text>
      </Card.Header>
      )}
      <Card.Divider />
      <Card.Body css={{ py: '$10' }}>
        <Text>
          {data.realName}
          | No alter egos found || Justice League Of America, Batman Family
        </Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="flex-end">
          <Button size="sm">
            Learn more
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
}
export default CardItem;
