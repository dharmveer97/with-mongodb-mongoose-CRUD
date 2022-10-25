import {
  Card, Text, Row,
} from '@nextui-org/react';

import Button from './Button';

function CardItem({ title }) {
  return (
    <Card
      isPressable
      isHoverable
      variant="bordered"
      css={{ mw: '400px' }}
    >
      {title && (
      <Card.Header>
        <Text b>{title}</Text>
      </Card.Header>
      )}
      <Card.Divider />
      <Card.Body css={{ py: '$10' }}>
        <Text>
          Some quick example text to build on the card title and make up the
          bulk of the s content.
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
