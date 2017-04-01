import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
    name: 'ATLauncher Style Guide',
    url: 'https://github.com/ATLauncher/style-guide',
    downPanelInRight: true
});

const req = require.context('../components', true, /.stories.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);