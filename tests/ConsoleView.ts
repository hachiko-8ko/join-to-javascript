import { Component, ObservableProxy, BoundComponent } from './Ichigo';

export class ConsoleView extends Component {
    constructor() {
        super({
            innerHtml: `
                <h2>Log</h2>
                <div id="consoleLog" :loop=".">
                    <div style="min-height: 10px;"><i-v>.</i-v></div>
                </div>`
        });
        this.viewModel = ObservableProxy.proximate([]);
        this.entries = new BoundComponent(this.viewModel, {
            parent: this.content,
            selector: '#consoleLog',
            observeAllViewModel: true
        });
    }

    log(thing: any, result = false) {
        // tslint:disable-next-line:no-console
        console.log(thing);
        this.viewModel.push((result ? '>> ' : '') + clean(thing));
        if (result) {
            this.viewModel.push('');
        }

        function clean(val: any): string {
            if (val === null || val === undefined) {
                return '';
            }
            if (typeof val === 'string') {
                return val;
            }
            return JSON.stringify(val);
        }
    }
}
