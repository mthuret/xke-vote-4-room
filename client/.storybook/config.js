import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/stories/slot');
  require('../src/components/stories/slots');
  require('../src/components/stories/votes');
}

configure(loadStories, module);
