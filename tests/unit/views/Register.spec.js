import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import Register from '../../../src/views/Register';
import { BootstrapVue } from "bootstrap-vue"

const localVue = createLocalVue();

localVue.use(VueRouter);
localVue.use(Vuex);
localVue.use(BootstrapVue);

describe('Register.vue', () => {
  const actions = {
    onSubmit: jest.fn(),
  }
  const state = {
    auth: {
      errors: [],
    }
  }
  const store = new Vuex.Store({
    actions, state
  });
  const wrapper = shallowMount(Register, { store, localVue });

  it('Triggers onSubmit function when button is clicked', () => {
    const button = wrapper.find("button");
    button.trigger('click');
    expect(actions.onSubmit.toHaveBeenCalled);
  });
  describe('Form error checker', () => {
    it('Passes the form input check', () => {
      wrapper.setData({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@test.com',
        password1: 'Password1!',
        password2: 'Password1!',
      });
      expect(wrapper.vm.formCheck()).toBe(true);
    })

    it('Doesn\'t pass the form input check when firstName blank', () => {
      wrapper.setData({
        firstName: '',
        lastName: 'Doe',
        email: 'john.doe@test.com',
        password1: 'Password1!',
        password2: 'Password1!',
      });
      expect(wrapper.vm.formCheck()).toBe(false);
    })

    it('Doesn\'t pass the form input check when lastName blank', () => {
      const wrapper = shallowMount(Register, { store, localVue });
      wrapper.setData({
        firstName: 'John',
        lastName: '',
        email: 'john.doe@test.com',
        password1: 'Password1!',
        password2: 'Password1!',
      });
      expect(wrapper.vm.formCheck()).toBe(false);
    })

    it('Doesn\'t pass the form input check when email is blank or is not valid', () => {
      const wrapper = shallowMount(Register, { store, localVue });
      wrapper.setData({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe',
        password1: 'Password1!',
        password2: 'Password1!',
      });
      expect(wrapper.vm.formCheck()).toBe(false);
      wrapper.setData({
        firstName: 'John',
        lastName: 'Doe',
        email: '',
        password1: 'Password1!',
        password2: 'Password1!',
      });
      expect(wrapper.vm.formCheck()).toBe(false);
    })

    it('Doesn\'t pass the form input check when the passwords are blank, not matching or not valid', () => {
      const wrapper = shallowMount(Register, { store, localVue });
      wrapper.setData({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@test.com',
        password1: '',
        password2: 'Password1!',
      });
      expect(wrapper.vm.formCheck()).toBe(false);
      wrapper.setData({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@test.com',
        password1: 'Password2!',
        password2: 'Password1!',
      });
      expect(wrapper.vm.formCheck()).toBe(false);

      wrapper.setData({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@test.com',
        password1: 'Password',
        password2: 'Password',
      });
      expect(wrapper.vm.formCheck()).toBe(false);
    })
  });

})
