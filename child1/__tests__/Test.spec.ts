import { mount } from '@vue/test-utils'
import Test from '../src/views/test.vue'

describe('page Test', () => {
  test('increment', async () => {
    const wrapper = mount(Test)
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('count:1')
  })
  test('check', async () => {
    const wrapper = mount(Test)
    await wrapper.find('.name-input').setValue('12345')
    expect(wrapper.find('.name').text()).toBe('12345') // 是否改值成功
    expect(wrapper.find('.check-tip').exists()).toBe(true)
  })
})
