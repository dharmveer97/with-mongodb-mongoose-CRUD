import {
  Card, Text, Button, Row,
} from '@nextui-org/react';

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
          <Button size="sm" light>
            Share
          </Button>
          <Button size="sm" color="secondary">
            Learn more
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
}
export default CardItem;
