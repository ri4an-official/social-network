import React, { lazy, useEffect } from "react";
import store from "./redux/redux-store";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./App.css";
import { Music } from "./components/Menu/Music/Music";
import { Menu } from "./components/Menu/Menu";
import { News } from "./components/Menu/News/News";
import { Settings } from "./components/Menu/Settings/Settings";
// import Dialogs from "./components/Menu/Dialogs/DialogsItems/DialogsContainer";
// import Profile from "./components/Menu/Profile/ProfileContainer.jsx";
import Users from "./components/Menu/Users/UsersContainer";
import Header from "./components/Header/HeaderContainer";
// import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import { PreloaderWhite } from "./components/common/Preloader/Preloader";
import { withSuspence } from "./components/common/hocs/withSuspence";

const Dialogs = lazy(() =>
    import("./components/Menu/Dialogs/DialogsItems/DialogsContainer")
);
const Profile = lazy(() =>
    import("./components/Menu/Profile/ProfileContainer.jsx")
);
const Login = lazy(() => import("./components/Login/Login"));

let AppContainer = compose(
    connect((state) => ({ initialized: state.app.initialized }), {
        initializeApp,
    }),
    withRouter
)((props) => {
    useEffect(() => props.initializeApp(), []);
    return props.initialized ? (
        <div className="app-wrapper">
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossOrigin="anonymous"
            />
            <Header />
            <Menu />
            <div className="app-wrapper-content">
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
            </div>
        </div>
    ) : (
        <PreloaderWhite />
    );
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
