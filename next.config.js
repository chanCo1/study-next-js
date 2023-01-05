const API_KEY = process.env.API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /** 
   * redirect 
   * @description 입력 받은 주소를 다른 주소로 보낸다
   */
  async redirects() {
    return [
      {
        source: "/old-sexy-blog/:path*",   // 소스찾기 (입력된 초기 주소)
        destination: "/new-sexy-blog/:path*", // 보낼 주소
        permanent: false      // redirection이 영구적인지 아닌지에 따라
                              // 정보 기억 여부 결정(브라우저 or 검색엔진)
      }
    ]
  },

  /** 
   * rewrite
   * @description redirect와 비슷하지만 유저가 url 변화를 볼 수 없다
   */
  async rewrites() {
    return [
      {
        source: "/api/movies",  // 소스찾기
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`  // 요청 할 API 주소
      }
    ]
  }
}

module.exports = nextConfig
