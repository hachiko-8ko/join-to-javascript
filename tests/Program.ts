import '../src/PrototypeExtension';

import { TestbenchView } from '../tests/TestbenchView';
import { PageRouter } from './Ichigo';
import { Test000 } from './Test000';
import { Test001 } from './Test001';
import { Test002 } from './Test002';
import { Test003 } from './Test003';
import { Test004 } from './Test004';
import { Test005 } from './Test005';
import { Test006 } from './Test006';

function main() {
    PageRouter.configure([
        { route: 'test/:id=0', payload: Test000 },
        { route: 'test/:id=1', payload: Test001 },
        { route: 'test/:id=2', payload: Test002 },
        { route: 'test/:id=3', payload: Test003 },
        { route: 'test/:id=4', payload: Test004 },
        { route: 'test/:id=5', payload: Test005 },
        { route: 'test/:id=6', payload: Test006 },
    ], TestbenchView, true, '<div>There is no page here.</div>', 'test/0');
}

main();
