import { mount } from '@vue/test-utils'
import BaseTable from '../../src/components/BaseTable.vue'
const MOCKS = {
  $t: (key)=> key,
  $n: (number)=> number,
}

describe('BaseTable.vue component', () => {
  it('it renders a prop and its content', () => {
    const wrapper = mount(BaseTable, {
      props: { 
        columns: ['col1', 'col2'],
        rows: [
          {col1: 'col1 texts', col2: 'col2 texts'},
          {col1: 'col1 texts', col2: 'col2 texts'},
          {col1: 'col1 texts', col2: 'col2 texts'},
          {col1: 'col1 texts', col2: 'col2 texts'},
          {col1: 'col1 texts', col2: 'col2 texts'},
        ],
        conceptWord: 'CONCEPT',
      },
      global: {
        mocks: MOCKS,
      }      
    })
    expect(wrapper.text()).toContain('CONCEPT')
  })
})