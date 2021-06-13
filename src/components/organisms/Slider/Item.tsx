import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import SliderContext from './context';
import { ContentDetail } from '@/types/common';

type Props = {
  movie: ContentDetail;
  showModal?: () => void;
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
  const nameStyle = useMemo(
    () => ({
      display: 'flex',
      justifyContent: 'left',
      alignSelf: 'flex-end',
      marginLeft: 10,
      marginBottom: 10,
    }),
    [],
  );
  const { movie, showModal } = props;

  return (
    <SliderContext.Consumer>
      {({ elementRef }) => {
        return (
          <Item
            ref={elementRef}
            style={{
              display: 'flex',
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            }}
            onClick={() => showModal && showModal()}
          >
            <div style={nameStyle}>
              {movie.title ? (
                <b style={{ fontSize: '1rem', fontWeight: 'normal' }}>{movie.title}</b>
              ) : (
                <b style={{ fontSize: '1rem', fontWeight: 'normal' }}>{movie.name}</b>
              )}
            </div>
          </Item>
        );
      }}
    </SliderContext.Consumer>
  );
}

export default SliderItem;
