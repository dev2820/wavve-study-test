import { Story } from "@storybook/vue3";
import HomePage from './HomePage.vue';

export default {
  title: 'pages/HomePage',
  component: HomePage,
};

const Template:Story = (args) => ({
  components: { HomePage },
  setup() {
    return { };
  },
  template: `<div id="app">
    <HomePage/>
  </div>`,
});

export const Default = Template.bind({});
Default.args = {
  options: HomePage,
};