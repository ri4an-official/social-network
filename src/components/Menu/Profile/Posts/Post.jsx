import p from "./Post.module.css";
export default function Post(props) {
    return (
        <div className={p.post}>
            <img className="ava" src={props.img} alt="" />
            {props.post}
        </div>
    );
}
