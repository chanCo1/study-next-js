import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import Seo from "../components/Seo";

/**
 * 메인 페이지
 * @returns
 */
export default function Home({ results }) {
  const router = useRouter();

  const onClickDetail = (id, title) => {
    router.push({ pathname: `/movies/${title}/${id}` });
  };

  return (
    <div className="container">
      <Seo title={"Home"} />

      {results?.map(({ id, original_title, poster_path }) => (
        <div
          className="movie"
          key={id}
          onClick={() => onClickDetail(id, original_title)}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
          <h4>
            <Link href={`/movies/${original_title}/${id}`} legacyBehavior>
              <a>{original_title}</a>
            </Link>
          </h4>
        </div>
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }

        .movie {
          cursor: pointer;
        }

        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

/**
 * getServerSideProps
 * @description getServerSideProps는 예약어이다. (절대 바꾸면 안됨)
 *              이 함수 안에서 작성된 코드는 서버에서 돌아간다
 */
export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();

  return {
    props: {
      results,
    },
  };
}
