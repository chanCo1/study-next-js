import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <img src="/next.svg" alt="" />
      <Header as="h1">chanCo</Header>
      <Gnb />
    </div>
  );
}
