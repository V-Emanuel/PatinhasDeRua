import ActionsSection from "../components/Actions/ActionsSection";
import { StartPostContent, StartPost } from "../components/Actions/StartPost";
import { Posts } from "../components/Actions/Posts";
import comeco from "../assets/imgs/PostsImgs/comeco.jpg";
import posts from "../assets/consts/posts";

export default function Actions() {
  return (
    <ActionsSection>
      <StartPostContent>
        <span>
          <h1>ONDE TUDO COMEÇOU!</h1>
          <StartPost src={comeco} />
        </span>
      </StartPostContent>
      <span>
        <h2>Nossas Atividades</h2>
        <Posts>
          {posts.map((i) => (
            <div className="post" key={i.id}>
              <img src={i.img} />
              <h4>{i.description}</h4>
            </div>
          ))}
        </Posts>
      </span>
    </ActionsSection>
  );
}
