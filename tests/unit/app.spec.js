import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Budget from '../../src/components/Budget.vue'

describe('Budget.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Budget)
    expect(wrapper.find(".btn"))
  })
})
