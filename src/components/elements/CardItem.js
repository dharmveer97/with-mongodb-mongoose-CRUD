import {
  Card, Text, Row, Link,
} from '@nextui-org/react';

import Button from './Button';

function CardItem({
  data, hideEditButton, hideViewButton, hideDeleteButton, isSmall, handleDelete,
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
        <Text size={30} b>{data.superHero}</Text>
      </Card.Header>
      )}
      <Card.Divider />
      <Card.Body>
        <Text size={20} css={{ fontWeight: '500' }}>
          My real name is
          {' '}
          {data.realName}
        </Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="flex-end">
          {!hideEditButton && (
          <Button color="primary" auto ghost as={Link} size="sm" href={`/${data._id}/edit`} css={{ marginRight: '10px' }}>
            Edit Hero
          </Button>
          )}
          {!hideViewButton && (
          <Button as={Link} size="sm" href={`/${data._id}/view`}>
            View Hero
          </Button>
          )}
          {!hideDeleteButton
          && (
          <Button size="sm" color="error" onClick={handleDelete}>
            Delete Hero
          </Button>
          )}
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default CardItem;
