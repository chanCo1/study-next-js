import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * _document는 서버에서만 렌더링 되고 onClick 같은 이벤트 핸들러는 작동하지 않는다
 * CSS도 사용하지 않는다
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
