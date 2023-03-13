import { Story } from "@storybook/vue3";
import CustomButton from './CustomButton.vue';

export default {
  title: 'Components/CustomButton',
  component: CustomButton,
};

const Template:Story = (args) => ({
  components: { CustomButton },
  setup() {
    return { args };
  },
  template: `<CustomButton v-bind="args">Reroll</CustomButton>`,
});

export const Default = Template.bind({});