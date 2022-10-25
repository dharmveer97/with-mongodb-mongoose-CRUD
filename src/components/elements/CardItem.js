import { Card, Text } from '@nextui-org/react';

function CardItem({ children }) {
  return (
    <Card
      isPressable
      isHoverable
      variant="bordered"
      css={{ mw: '400px' }}
    >
      <Card.Body>
        <Text>{children}</Text>
      </Card.Body>
    </Card>
  );
}
export default CardItem;
