import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/stories/slot');
}

configure(loadStories, module);
