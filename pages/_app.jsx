import "semantic-ui-css/semantic.min.css";
import Footer from "../components/Footer";
import Top from "../components/Top";

/**
 * _app은 글로벌 css를 적용하거나 레이아웃을 잡는 용도로 주로 사용
 * @param {*} Component 페이지 전환 시 현재 페이지를 받는다.
 * @param {*} pageProps 데이터 패치 메소드를 통해 미리 가져오는 초기 객체
 * @returns 
 */
export default function App({ Component, pageProps }) {
  return (
    <>
      <Top />
      <Component {...[pageProps]} />
      <Footer />
    </>
  )
};
