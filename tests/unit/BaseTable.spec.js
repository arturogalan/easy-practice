import { mount } from '@vue/test-utils';
import BaseTable from '../../src/components/BaseTable.vue';
const MOCKS = {
  // Print the key and the params to be able to test them
  $t: (key, params) => `key: ${key} params: {${Object.entries(params)}}`,
  $n: (number) => number,
};

describe('BaseTable.vue component', () => {
  it('it renders the rows', () => {
    const wrapper = mount(BaseTable, {
      props: {
        columns: ['col1', 'col2'],
        rows: [
          { col1: 'col1.1 texts', col2: 'col1.2 texts' },
          { col1: 'col2.1 texts', col2: 'col2.2 texts' },
          { col1: 'col3.1 texts', col2: 'col3.2 texts' },
          { col1: 'col4.1 texts', col2: 'col4.2 texts' },
          { col1: 'col5.1 texts', col2: 'col5.2 texts' },
        ],
        conceptWord: 'CONCEPT',
      },
      global: {
        mocks: MOCKS,
      },
    });
    expect(wrapper.text()).toContain('col1.1 texts');
    expect(wrapper.text()).toContain('col1.2 texts');
    expect(wrapper.text()).toContain('col2.1 texts');
    expect(wrapper.text()).toContain('col2.2 texts');
    expect(wrapper.text()).toContain('col3.1 texts');
    expect(wrapper.text()).toContain('col3.2 texts');
    expect(wrapper.text()).toContain('col4.1 texts');
    expect(wrapper.text()).toContain('col4.2 texts');
    expect(wrapper.text()).toContain('col5.1 texts');
    expect(wrapper.text()).toContain('col5.2 texts');
    expect(wrapper.text()).toContain(
      '{startRowNumber,1,endRowNumber,5,totalRowsNumber,5,concept,CONCEPT}',
    );
  });
  it('it renders the pagination key together with the calculated rows numbers', () => {
    const wrapper = mount(BaseTable, {
      props: {
        columns: ['col1', 'col2'],
        rows: [
          { col1: 'col1.1 texts', col2: 'col1.2 texts' },
          { col1: 'col2.1 texts', col2: 'col2.2 texts' },
          { col1: 'col3.1 texts', col2: 'col3.2 texts' },
          { col1: 'col4.1 texts', col2: 'col4.2 texts' },
          { col1: 'col5.1 texts', col2: 'col5.2 texts' },
        ],
        conceptWord: 'CONCEPT',
      },
      global: {
        mocks: MOCKS,
      },
    });
    expect(wrapper.text()).toContain(
      '{startRowNumber,1,endRowNumber,5,totalRowsNumber,5,concept,CONCEPT}',
    );
  });
});
