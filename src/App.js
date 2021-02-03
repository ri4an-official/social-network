import { lazy, StrictMode, useEffect } from "react";
import store from "./redux/redux-store";
import { BrowserRouter, Redirect, Route, withRouter } from "react-router-dom";
import "./App.css";
import { Music } from "./components/Menu/Music/Music";
import { Menu } from "./components/Menu/Menu";
import { News } from "./components/Menu/News/News";
import { Settings } from "./components/Menu/Settings/Settings";
import Users from "./components/Menu/Users/UsersContainer";
import Header from "./components/Header/HeaderContainer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import { Preloader } from "./components/common/Preloader/Preloader";
import { withSuspence } from "./components/common/hocs/withSuspence";

const Dialogs = lazy(() =>
    import("./components/Menu/Dialogs/DialogsItems/DialogsContainer")
);
const Profile = lazy(() =>
    import("./components/Menu/Profile/ProfileContainer.jsx")
);
const Login = lazy(() => import("./components/Login/Login"));

const AppContainer = compose(
    connect((state) => ({ initialized: state.app.initialized }), {
        initializeApp,
    }),
    withRouter
)((props) => {
    useEffect(() => props.initializeApp(), []);
    return props.initialized ? (
        <div className="app-wrapper">
            <Header />
            <Menu />
            <div className="app-wrapper-content">
                {/* <Zodiac /> */}
                <Route
                    path="/profile/:userId?"
                    render={withSuspence(Profile)}
                />
                <Route path="/news" render={() => <News />} />
                <Route path="/dialogs" render={withSuspence(Dialogs)} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/users" render={() => <Users />} />
                <Route path="/settings" render={() => <Settings />} />
                <Route path="/login" render={withSuspence(Login)} />
                <Redirect from="/" to="/profile" />
            </div>
        </div>
    ) : (
        <Preloader type="white" />
    );
});

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    </StrictMode>
);
