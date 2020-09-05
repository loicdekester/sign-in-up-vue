import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TheHeader from '../../../src/components/TheHeader';
import { BootstrapVue, BootstrapVueIcons, BNavbarNav, BNavItem } from "bootstrap-vue"

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue);
localVue.use(BootstrapVueIcons);

describe('TheHeader.vue', () => {
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

    it('Renders Home, Profile and Logout links in the nav bar', () => {
      const wrapper = mount(TheHeader, { store, localVue });
      const nav = wrapper.findComponent(BNavbarNav);
      const navItems = wrapper.findAllComponents(BNavItem);
      expect(nav.exists()).toBe(true);
      expect(navItems).toHaveLength(3);
      expect(navItems.at(0).text()).toBe("Home");
      expect(navItems.at(1).text()).toBe("Profile");
      expect(navItems.at(2).text()).toBe("Logout");
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
      const wrapper = mount(TheHeader, { store, localVue });
      const nav = wrapper.findComponent(BNavbarNav);
      const navItems = wrapper.findAllComponents(BNavItem);
      expect(nav.exists()).toBe(true);
      expect(navItems).toHaveLength(3);
      expect(navItems.at(0).text()).toBe("Home");
      expect(navItems.at(1).text()).toBe("Register");
      expect(navItems.at(2).text()).toBe("Login");
    });
  });
})
