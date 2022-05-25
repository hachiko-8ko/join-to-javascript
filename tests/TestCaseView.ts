import { TestHeader } from './TestHeader';
import { ConsoleView } from './ConsoleView';
import { Component } from './Ichigo';

export class TestCaseView extends Component {
    constructor(viewModel: any) {
        super();
        this.viewModel = viewModel;

        this.appendChild(new TestHeader(viewModel));
        this.console = new ConsoleView();
        this.appendChild(this.console);

        // Note: This component is added to the DOM by the PageRouter immediately after construction.
        // Nothing in the inheriting class can reference this component until after it is constructed.
        // Here we don't care.
        this.testCase();
    }

    log(thing: any, result = false) {
        this.console.log(thing, result);
    }
}
