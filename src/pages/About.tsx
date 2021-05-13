import React, { FC, useEffect } from "react";
import dotenv from "dotenv";

import { useRootState } from "@/hooks/useRootState";
import { useDispatch } from "react-redux";
import { genreAsync, getGenre } from "@/store/genre/genreSlice";

dotenv.config();

const About: FC = () => {
  const dispatch = useDispatch();
  const { genre } = useRootState(getGenre);

  console.log(genre);

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
