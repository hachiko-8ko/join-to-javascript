import { escapeHtml, PageRouter } from "./Ichigo";

export abstract class TestCaseViewModel {
    name?: string;
    description?: string;
    testNumber: string;

    constructor({ name, descriptionHtml }: IOptions = {}) {
        this.name = escapeHtml(name);
        this.description = descriptionHtml;
        this.testNumber = PageRouter.params.get('id') || '?';
    }
}

interface IOptions {
    name?: string;
    descriptionHtml?: string;
}
