import App from "../src/App";
process.env.NODE_ENV = "test";
const app = App.createApplication();

describe("Test", () => {
    describe("General test", () => {
        test("1 is 1", async (done) => {
            expect(1).toEqual(1);
            done();
        });
    });
});
