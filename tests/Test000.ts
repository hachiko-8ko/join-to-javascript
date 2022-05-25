import { TestCaseViewModel } from './TestCaseViewModel';
import { assert } from './assert';
import { TestCaseView } from './TestCaseView';

class TestViewModel extends TestCaseViewModel {
    constructor() {
        super({
            name: 'Test the test bench',
            descriptionHtml: `<p>Verify that the test bench works before proceeding. The test bench outputs to the log which is shown below and in the dev tools console. If you don't see "Test successful," then it failed, with an error in the log. Hard to
            show the log in the page if the page is broken, so have to check dev tools after all.</p>`
        });
    }
}

// tslint:disable-next-line:max-classes-per-file
export class Test000 extends TestCaseView {
    constructor() {
        super(new TestViewModel());
    }

    testCase() {
        try {
            this.console.log("Hello world.");

            // Component rendering is asynchronous (on the microtask queue), so have to test slightly after
            setTimeout(() => {
                try {
                    const logElement = document.getElementById('consoleLog');
                    if (logElement === null) { throw new Error("Rendering failed."); }

                    assert(logElement.innerHTML.includes("Hello world."), "Log should update the page.");
                    this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
                } catch (err) {
                    this.log(err.toString());
                    throw err;
                }
            }, 10);

        } catch (err) {
            this.log(err.toString());
        }
    }
}
