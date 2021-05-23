import { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieDetail } from '@/apis';
import {
  ButtonWrapper,
  ModalBar,
  ModalImage,
  ModalInfoWrapper,
  ModalTitle,
  ModalWrap,
  PlayButton,
} from '@/components/organisms/Modal/style';
import { ContentDetail } from '@/types/common';
import moment from 'moment';
import { AiFillCaretRight } from 'react-icons/ai';
import CloseButton from '@/components/atoms/CloseButton';
import IconButton from '@/components/atoms/IconButton';

const Modal = ({ contentId, onClickHandler }: { contentId: number; onClickHandler: () => void }) => {
  const [content, setContent] = useState<ContentDetail>();

  const fetchContent = async () => {
    await axios.get(MovieDetail(contentId)).then((result) => {
      setContent(result.data);
    });
  };
  const formatTime = (runtime: number) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours ? `${hours}시간 ` : ''}${minutes}분`;
  };
  useEffect(() => {
    fetchContent();
  }, []);

  return content ? (
    <ModalWrap>
      <ModalImage alt={content.title} src={`https://image.tmdb.org/t/p/original/${content.backdrop_path}`} />
      <section>
        <ModalTitle>{content.title}</ModalTitle>
        <div>
          <ModalBar />총 {content.runtime}분 중 0분
        </div>
        <ButtonWrapper>
          <div>
            <PlayButton
              onClick={() => {
                alert('재생');
              }}
            >
              <AiFillCaretRight />
              재생
            </PlayButton>
            <IconButton iconName="check" />
            <IconButton iconName="like" />
            <IconButton iconName="dislike" />
          </div>
          <div>
            <IconButton iconName="volume" />
          </div>
        </ButtonWrapper>
      </section>
      <ModalInfoWrapper style={{ display: 'flex' }}>
        <section>
          <div>
            <span style={{ color: '#45D369' }}>75% 일치 </span>
            <span>{moment(content.release_date).format('Y')} </span>
            <span>{formatTime(content.runtime)}</span>
          </div>
          <p>{content.overview}</p>
        </section>
        <aside>
          <span>장르: {content.genres.map((genre) => genre.name).join(', ')}</span>
        </aside>
      </ModalInfoWrapper>
      <CloseButton onClickHandler={onClickHandler} />
    </ModalWrap>
  ) : (
    <span>Loading</span>
  );
};

export default Modal;
