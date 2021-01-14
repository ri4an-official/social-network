import { Suspense } from "react";
import { Preloader } from "../Preloader/Preloader";

export const withSuspence = (Component) => (props) => (
    <Suspense fallback={<Preloader />}>
        <Component {...props} />
    </Suspense>
);
