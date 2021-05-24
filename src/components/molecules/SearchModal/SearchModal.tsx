import { QueryType } from '@/types/common';
import React from 'react';
// import { SearchModalWrapper } from './style';
import { GithubOutlined } from '@ant-design/icons';

type Props = {
  data: QueryType;
};

function SearchModal(props: Props) {
  // const [fetchedData, setFetchedData] = useState<QueryType[]>([]) 의 데이터를 props로 가져오는 행위
  const { data } = props;
  return (
    <ul key={data.id} style={{ listStyle: 'none', paddingLeft: 0, marginTop: 0 }}>
      <li key={data.id}>
        <div style={{ width: 310, marginRight: 5 }}>
          {data.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
              alt={data.original_title}
              style={{ width: 300 }}
            />
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '168.750px',
                fontSize: '8rem',
                paddingTop: 0,
              }}
            >
              <GithubOutlined />
            </div>
          )}
        </div>
      </li>
    </ul>
  );
}

export default SearchModal;
