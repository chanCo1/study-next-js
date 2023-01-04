/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /** next에서 redirect 하기 */
  async redirects() {
    return [
      {
        source: "/old-sexy-blog/:path*",   // 소스찾기 (입력된 초기 주소)
        destination: "/new-sexy-blog/:path*", // form으로 보낸다 (보낼 주소)
        permanent: false      // redirection이 영구적인지 아닌지에 따라
                              // 정보 기억 여부 결정(브라우저 or 검색엔진)
      }
    ]
  }
}

module.exports = nextConfig
