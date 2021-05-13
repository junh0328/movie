import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useRootState } from "@/hooks/useRootState";
import { genreAsync, getGenre } from "@/store/genre/genreSlice";

const About: FC = () => {
  const dispatch = useDispatch();
  const { genre } = useRootState(getGenre);

  useEffect(() => {
    dispatch(genreAsync());
  }, [dispatch]);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {true ? (
        <div
          style={{
            display: " flex",
            flexWrap: "wrap",
            alignItems: "center",
            width: "160px",
          }}
        >
          <h2>데이터 로딩 완료</h2>
          {genre.map((movie) => (
            <div key={movie.id}>
              {movie.id}, {movie.name}
            </div>
          ))}
        </div>
      ) : (
        <div>로딩중</div>
      )}
    </div>
  );
};

export default About;
