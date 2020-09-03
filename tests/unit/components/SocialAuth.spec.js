import { shallowMount } from '@vue/test-utils'
import SocialAuth from '../../../src/components/SocialAuth';

describe('SocialAuth', () => {
  it('renders a message and responds correctly to user input', () => {
    const wrapper = shallowMount(SocialAuth, {
      propsData: {
        text: `Login with`
      }
    })

    // see if the message renders
    expect(wrapper.find('#googleLink').text()).toEqual('Login with Google')
  })
})
