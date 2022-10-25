import {
  Card, Text, Row, Link,
} from '@nextui-org/react';

import Button from './Button';

function CardItem({
  data, hideEditButton, hideViewButton, hideDeleteButton, isSmall,
}) {
  if (!data) return null;
  return (
    <Card
      isPressable
      isHoverable
      variant="bordered"
      css={{ mw: isSmall ? '40%' : '' }}
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
          {' '}
          | No alter egos found || Justice League Of America, Batman Family
        </Text>
        <Text css={{ fontWeight: '600', textDecoration: 'underline' }}>
          Reveal Identity
        </Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="flex-end">
          {!hideEditButton && (
          <Button color="primary" auto ghost as={Link} size="sm" href={`/${data._id}`} css={{ marginRight: '10px' }}>
            Edit Hero
          </Button>
          )}
          {!hideViewButton && (
          <Button as={Link} size="sm" href="/">
            View Hero
          </Button>
          )}
          {!hideDeleteButton
          && (
          <Button size="sm" color="error">
            Delete Hero
          </Button>
          )}
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default CardItem;
