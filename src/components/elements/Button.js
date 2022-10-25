import { Button } from '@nextui-org/react';

function ButtonDefault({ children, color, ...props }) {
  return (
    <Button size="sm" color={color || 'primary'} {...props}>
      {children}
    </Button>
  );
}

export default ButtonDefault;
