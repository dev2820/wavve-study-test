import { Story } from "@storybook/vue3";
import ResultPage from './ResultPage.vue';

export default {
  title: 'pages/ResultPage',
  component: ResultPage,
};

const Template:Story = () => ({
  components: { ResultPage },
  setup() {
    return { };
  },
  template: `<div id="app">
    <ResultPage/>
  </div>`,
});

export const Default = Template.bind({});