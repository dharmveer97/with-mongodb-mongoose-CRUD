import { Button } from '@nextui-org/react';

function ButtonDefault({
  children, color, size, ...props
}) {
  return (
    <Button size={size} color={color || 'primary'} {...props}>
      {children}
    </Button>
  );
}

export default ButtonDefault;
