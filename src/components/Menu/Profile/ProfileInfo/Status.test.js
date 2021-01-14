import { create } from "react-test-renderer";
import Status from "./Status";

describe("Status component", () => {
    test("testing instance", () => {
        const component = create(<Status status="Vadyara" />);
        const instance = component.root;
        expect(instance.state.status).toBe("Vadyara");
    });
    test("after creation span should be displayed", () => {
        const component = create(<Status status="Vadyara" />);
        const root = component.root;
        expect(root.findByType("span").length).toBe(1);
    });
});
