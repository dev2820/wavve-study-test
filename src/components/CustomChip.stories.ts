import { Story } from "@storybook/vue3";
import CustomChip from './CustomChip.vue';

export default {
  title: 'Components/CustomChip',
  component: CustomChip,
};

const Template:Story = (args) => ({
  components: { CustomChip },
  setup() {
    return { args };
  },
  template: `<CustomChip v-bind="args">Reroll</CustomChip>`,
});

export const Default = Template.bind({});
Default.args = {
  label: '두부'
}