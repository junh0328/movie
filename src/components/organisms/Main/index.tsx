import { SliderName } from '@/components/pages/style';
import { ContentDetail } from '@/types/common';
import React, { useState } from 'react';
import Modal from '../Modal';
import { SliderContainer, SliderItem } from '../Slider';

type Props = {
  name: string;
  genres: ContentDetail[] | undefined;
};

function Main(props: Props) {
  const { name, genres } = props;
  const [selectedContent, setSelectedContent] = useState<number | undefined>(undefined);

  return (
    <>
      <div>
        <SliderName>{name}</SliderName>
        {genres && (
          <SliderContainer>
            {genres.map((genre) => {
              return (
                <SliderItem
                  key={genre.id}
                  movie={genre}
                  showModal={() => {
                    setSelectedContent(genre.id);
                  }}
                />
              );
            })}
          </SliderContainer>
        )}
      </div>
      {selectedContent && <Modal contentId={selectedContent} onClickHandler={() => setSelectedContent(undefined)} />}
    </>
  );
}

export default Main;
