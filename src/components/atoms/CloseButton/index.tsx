import { Button } from '@/components/atoms/CloseButton/style';

const CloseButton = ({ onClickHandler }: { onClickHandler: () => void }) => (
  <Button onClick={() => onClickHandler()}>X</Button>
);

export default CloseButton;
