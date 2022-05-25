import { span, paragraph, Component } from './Ichigo';

export class TestHeader extends Component {
    constructor(vm: any) {
        super();
        if (vm.name) {
            this.appendChild(paragraph(`<h1>Test ${vm.testNumber}: ${vm.name}</h1>`));
        }
        if (vm.description) {
            this.appendChild(span(vm.description));
        }
    }
}
