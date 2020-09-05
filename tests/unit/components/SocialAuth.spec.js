import { shallowMount } from '@vue/test-utils'
import SocialAuth from '../../../src/components/SocialAuth';

describe('SocialAuth', () => {
  it('renders links with message corresponding to the prop', () => {
    const wrapper = shallowMount(SocialAuth, {
      propsData: {
        text: `Login with`
      }
    })

    // see if the message renders
    expect(wrapper.find('#googleLink').text()).toEqual('Login with Google')
    expect(wrapper.find('#facebookLink').text()).toEqual('Login with Facebook')
  })
})
