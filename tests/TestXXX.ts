import { TestCaseViewModel } from './TestCaseViewModel';
import { assert } from './assert';
import { TestCaseView } from './TestCaseView';

class TestViewModel extends TestCaseViewModel {
    constructor() {
        super({
            name: '',
            descriptionHtml: `<p></p>`
        });
    }
}

// tslint:disable-next-line:max-classes-per-file
export class TestXXX extends TestCaseView {
    constructor() {
        super(new TestViewModel());
    }

    testCase() {
        try {
            // Do your testing here


            this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
        } catch (err) {
            this.log(err.toString());
        }
    }
}
