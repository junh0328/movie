import { BiCheck, BiDislike, BiLike, BiVolumeFull } from 'react-icons/all';
import { Button } from '@/components/atoms/IconButton/style';

const IconButton = ({ iconName }: { iconName: string }) => {
  let Icon;
  switch (iconName) {
    case 'check':
      Icon = <BiCheck />;
      break;
    case 'like':
      Icon = <BiLike />;
      break;
    case 'dislike':
      Icon = <BiDislike />;
      break;
    case 'volume':
      Icon = <BiVolumeFull />;
  }

  return <Button>{Icon}</Button>;
};

export default IconButton;
