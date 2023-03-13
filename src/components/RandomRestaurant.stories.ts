import { Story } from "@storybook/vue3";
import RandomRestaurant from './RandomRestaurant.vue';
import restaurantsMock from "@mocks/restaurants.mock"

export default {
  title: 'Components/RandomRestaurant',
  component: RandomRestaurant,
};

const Template:Story = (args) => ({
  components: { RandomRestaurant },
  setup() {
    return { args };
  },
  template: `<div id="app">
    <RandomRestaurant v-bind="args" />
  </div>`,
});

export const Default = Template.bind({});
Default.args = {
  options: restaurantsMock,
};