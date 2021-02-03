import { Content } from "./Content.jsx";
import Status from "./Status.jsx";
import userPhoto from "../../../../assets/images/user-img-1.png";
export function ProfileInfo(props) {
    return (
        <div>
            <span>
                <img src={props.photo ?? userPhoto} width="200" />
                <h2 className="noblock">{props.fullName ?? "No full name"}</h2>
                <Status
                    updateStatus={props.updateStatus}
                    status={props.status ?? "No status"}
                />
            </span>
            {props.isOwner && (
                <div class="input-group mb-3 custom-file">
                    <input
                        type="file"
                        class="custom-file-input"
                        id="inputGroupFile02"
                        onChange={(e) =>
                            e.target.files
                                ? props.savePhoto(e.target.files[0])
                                : console.error("ФАЙЛ НЕ НАЙДЕН")
                        }
                    />
                    <label
                        class="custom-file-label"
                        for="inputGroupFile02"
                        aria-describedby="inputGroupFileAddon02"
                    >
                        Choose avatar
                    </label>
                </div>
            )}
            <Content content="Main Content" />
        </div>
    );
}
