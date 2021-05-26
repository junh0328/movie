import React from 'react';
import styled from '@emotion/styled';
import { Movie } from '@/types/movie';
import SliderContext from './context';

type Props = {
  movie: Movie;
};

const Item = styled.div`
  flex: 0 0 19.7%;
  transition: transform 300ms ease 100ms;
  margin: 0 2px;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    vertical-align: top;
  }
  span {
    color: red;
    font-size: 1.5rem;
    top: 0;
    left: 0;
    position: absolute;
  }
`;

function SliderItem(props: Props) {
  const { movie } = props;

  return (
    <SliderContext.Consumer>
      {({ elementRef }) => {
        return (
          <Item ref={elementRef}>
            <img src={movie.photo} />
            <span>{movie.id}</span>
          </Item>
        );
      }}
    </SliderContext.Consumer>
  );
}

export default SliderItem;
