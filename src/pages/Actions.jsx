import ActionsSection from "../components/Actions/ActionsSection";
import { StartPostContent, StartPost } from "../components/Actions/StartPost";
import comeco from "../assets/imgs/PostsImgs/comeco.jpg"

export default function Actions() {
  return (
    <ActionsSection>
      <StartPostContent>
        <h1>ONDE TUDO COMEÇOU!</h1>
        <StartPost src={comeco}/>
      </StartPostContent>
    </ActionsSection>
  );
}
