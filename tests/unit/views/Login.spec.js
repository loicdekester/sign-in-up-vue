import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import Login from '../../../src/views/Login';
import { BootstrapVue } from "bootstrap-vue"

const localVue = createLocalVue();

localVue.use(VueRouter);
localVue.use(Vuex);
localVue.use(BootstrapVue);

describe('Login.vue', () => {
  const state = {
    auth: {
      errors: [],
    }
  }
  const actions = {
    onSubmit: jest.fn(),
  }
  const store = new Vuex.Store({
    state,
    actions
  });

  it('Triggers onSubmit function when button is clicked', () => {
    const wrapper = shallowMount(Login, { store, localVue });
    const button = wrapper.find("button");
    button.trigger('click');
    expect(actions.onSubmit.toHaveBeenCalled);
  });

})
