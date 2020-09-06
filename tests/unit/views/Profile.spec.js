import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import Profile from '../../../src/views/Profile';
import { BootstrapVue, BCardText } from "bootstrap-vue"

const localVue = createLocalVue();

localVue.use(VueRouter);
localVue.use(Vuex);
localVue.use(BootstrapVue);

describe('Profile.vue', () => {
  const actions = {
    fetchUser: jest.fn(),
  }
  const getters = {
    user: () => {
      return {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@gmail.com",
      }
    }
  }
  const store = new Vuex.Store({
    getters, actions
  });

  it('Renders the user name and email', () => {
    const wrapper = mount(Profile, { store, localVue });
    const cardTextItems = wrapper.findAllComponents(BCardText);
    expect(cardTextItems).toHaveLength(3);
    expect(cardTextItems.at(1).text()).toBe("Name: John Doe");
    expect(cardTextItems.at(2).text()).toBe("email: john.doe@gmail.com");
  });

})
