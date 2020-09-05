import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TheFooter from '../../../src/components/TheFooter';
import { BootstrapVue, BNav, BNavItem } from "bootstrap-vue"

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue);

describe('TheFooter.vue', () => {
  let getters;
  let store;
  describe('When logged', () => {
    beforeEach(() => {
      getters = {
        isAuthenticated: () => true,
      }

      store = new Vuex.Store({
        getters
      });
    })

    it('Renders Home and Profile links in the nav bar', () => {
      const wrapper = mount(TheFooter, { store, localVue });
      const nav = wrapper.findComponent(BNav);
      const navItems = wrapper.findAllComponents(BNavItem);
      expect(nav.exists()).toBe(true);
      expect(navItems).toHaveLength(2);
      expect(navItems.at(0).text()).toBe("Home");
      expect(navItems.at(1).text()).toBe("Profile");
    });
  });
  describe('When logged out', () => {
    beforeEach(() => {
      getters = {
        isAuthenticated: () => false,
      }

      store = new Vuex.Store({
        getters
      });
    })

    it('Renders Home, Login and Register links in the nav bar', () => {
      const wrapper = mount(TheFooter, { store, localVue });
      const nav = wrapper.findComponent(BNav);
      const navItems = wrapper.findAllComponents(BNavItem);
      expect(nav.exists()).toBe(true);
      expect(navItems).toHaveLength(3);
      expect(navItems.at(0).text()).toBe("Home");
      expect(navItems.at(1).text()).toBe("Register");
      expect(navItems.at(2).text()).toBe("Login");
    });
  });
})
