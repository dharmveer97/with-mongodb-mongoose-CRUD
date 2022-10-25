import { Button, Loading } from '@nextui-org/react';

function ButtonDefault({
  children, loading, color, size, ...props
}) {
  return (
    <Button size={size} color={color || 'primary'} {...props}>
      {children}
      {loading ? <Loading type="points" color="currentColor" size="sm" /> : ''}
    </Button>
  );
}

export default ButtonDefault;
