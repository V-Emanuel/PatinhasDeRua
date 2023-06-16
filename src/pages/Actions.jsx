import ActionsSection from "../components/Actions/ActionsSection";
import { Posts } from "../components/Actions/Posts";
import posts from "../assets/consts/posts";

export default function Actions() {
  return (
    <ActionsSection name="actions">
      <h2>Nossas Atividades</h2>
      <Posts>
        {posts.map((i) => (
          <div className="post" key={i.id}>
            <img src={i.img} />
            <h4>{i.description}</h4>
          </div>
        ))}
      </Posts>
    </ActionsSection>
  );
}
