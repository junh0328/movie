import React from 'react';
import styled from '@emotion/styled';
import SliderContext from './context';
import { ContentDetail } from '@/types/common';

type Props = {
  movie: ContentDetail;
};

const Item = styled.div`
  flex: 0 0 19.7%;
  transition: transform 300ms ease 100ms;
  margin: 0 2px;
  position: relative;
  height: 200px;
  width: 230px;
  background-size: cover;

  span {
    color: white;
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
          <Item
            ref={elementRef}
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}
          >
            {movie.title ? <span>{movie.title}</span> : <span>{movie.name}</span>}
          </Item>
        );
      }}
    </SliderContext.Consumer>
  );
}

export default SliderItem;
