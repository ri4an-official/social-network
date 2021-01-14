import { connect } from "react-redux";
import { compose } from "redux";
import { sendMessage } from "../../../../redux/dialogs-reducer";
import { withRedirect } from "../../../common/hocs/withRedirect";
import Dialogs from "./Dialogs";

export default compose(
    connect(
        (state) => ({
            dialogsPage: state.dialogsPage,
        }),
        { sendMessage }
    ),
    withRedirect
)(Dialogs);
