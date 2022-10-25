import { Card, Text } from '@nextui-org/react';

function CardItem({ text }) {
  return (
    <Card css={{ h: '$24', $$cardColor: '$colors$primary' }}>
      <Card.Body>
        <Text h6 size={15} color="white" css={{ mt: 0 }}>
          {text}
        </Text>
      </Card.Body>
    </Card>
  );
}
export default CardItem;
