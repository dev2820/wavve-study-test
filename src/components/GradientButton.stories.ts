import { Story } from "@storybook/vue3";
import GradientButton from './GradientButton.vue';

export default {
  title: 'Components/GradientButton',
  component: GradientButton,
};

const Template:Story = (args) => ({
  components: { GradientButton },
  setup() {
    return { args };
  },
  template: `<GradientButton v-bind="args">Reroll</GradientButton>`,
});

export const Default = Template.bind({});