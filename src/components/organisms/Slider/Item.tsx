import React, { useMemo } from 'react';
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
  const { movie } = props;

  return (
    <SliderContext.Consumer>
      {({ elementRef }) => {
        return (
          // movie.backdrop_path 가 없을 때 보여줄 컴포넌트 필요
          <Item
            // onMouseOver={() => console.log('마우스 올라옴')}
            ref={elementRef}
            style={{
              display: 'flex',
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
              // backgroundImage: ${(props: Props) => (props.movie.backdrop_path !== null ? `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`  : '' )}
            }}
          >
            {/* {movie.backdrop_path ? (
              <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
            ) : (
              <div>이미지가 없습니다</div>
            )}*/}
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
