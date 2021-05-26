import { MainHeader, PinningHeader, PinningHeaderContainer } from './style';
import useHandleScroll from '@/hooks/useHandleScroll';
import HeaderLeft from '@/components/molecules/HeaderLeft';
import HeaderRight from '@/components/molecules/HeaderRight';

function Header(): JSX.Element {
  const { scrolling } = useHandleScroll();

  return (
    <PinningHeader>
      <PinningHeaderContainer>
        <MainHeader className={scrolling ? 'scrolled' : ''}>
          <HeaderLeft />
          <HeaderRight />
        </MainHeader>
      </PinningHeaderContainer>
    </PinningHeader>
  );
}

export default Header;
