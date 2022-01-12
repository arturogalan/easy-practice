<script>
const pageSize = 10
const maxPagesNumber = 4
const pagesSizes = [10, 25, 50, 100]
export default {
  name: 'base-table',
  props: {
    /**
     * Array of strings with the column name to get retrieved for each row
     */
    columns: {
      type: Array,
      default: () => [],
    },
    /**
     * An array containg the rows, each row should be an object with the properties named in columns prop
     */
    rows: {
      type: Array,
      required: true,
    },
    /**
     * The concept to show in the pagination texts
     */
    conceptWord: {
      type: String,
      required: true,
    },
    /**
     * A function to get the bg-color CSS class for each row
     */
    statusColorMapper: {
      type: Function,
      default: () => {
        return 'bg-sky-500'
      },
    },
  },
  data() {
    return {
      pagesSizes: pagesSizes,
      pageSize: pageSize,
      currentPage: 1,
      selectedPageSize: 10,
    }
  },
  computed: {
    // The minimun between: The rows page numbers or maxPagesNumber
    pagesNumber() {
      return Math.min(
        Math.ceil(this.rows.length / this.selectedPageSize),
        maxPagesNumber,
      )
    },
    startRowNumber() {
      return (this.currentPage - 1) * this.selectedPageSize
    },
    endRowNumber() {
      return this.currentPage * this.selectedPageSize
    },
    visibleRows() {
      return this.rows.slice(this.startRowNumber, this.endRowNumber)
    },
  },
  methods: {
    selectPage(selectedPage) {
      this.currentPage = selectedPage
    },
    decreasePage() {
      this.currentPage = Math.max(1, this.currentPage - 1)
    },
    increasePage() {
      this.currentPage = Math.min(this.pagesNumber, this.currentPage + 1)
    },
  },
  watch: {
    rows(newValue, oldValue) {
      this.currentPage = 1
    },
    selectedPageSize(newValue, oldValue) {
      this.currentPage = 1
    },
  },
}
</script>
<template>
  <div class="min-h-1/3 flex flex-col justify-between" :class="$attrs.class">
    <div class="mt-20" v-if="!visibleRows.length">
      {{ $t('baseComponents.baseTable.noResults') }}
    </div>
    <div v-else>
      <div
        v-for="(row, rowIndex) in visibleRows"
        :key="`row-${rowIndex}`"
        class="mt-3 bg-white rounded-md shadow-lg shadow-gray-400/10"
      >
        <div class="grid grid-cols-4 gap-4 text-left relative">
          <div
            class="absolute before:content-[''] before:block w-3 h-full rounded-l-md"
            :class="statusColorMapper(row)"
          />
          <div
            v-for="(column, columnIndex) in columns"
            :key="`column-${columnIndex}`"
            class="pl-5 py-4 whitespace-nowrap text-ellipsis overflow-hidden"
            :class="columnIndex === 0 ? 'text-black' : 'text-gray-500'"
            :title="row[column]"
            v-html="row[column]"
          ></div>
        </div>
      </div>
    </div>
    <div class="w-auto mx-8 my-2 flex justify-between">
      <section class="grid grid-2 gap-2 grid-flow-col">
        <div
          class="grid text-left grid-flow-col"
          :class="`grid-cols-${pagesNumber + 2}`"
        >
          <div
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer"
            @click="decreasePage(page)"
          >
            &lt;
          </div>
          <div
            v-for="page in pagesNumber"
            :key="page"
            class="border-gray-300 text-gray-500 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            :class="
              page === currentPage
                ? 'bg-green-800 text-white'
                : 'bg-white hover:bg-gray-50 text-black cursor-pointer'
            "
            @click="selectPage(page)"
          >
            {{ page }}
          </div>
          <div
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer"
            @click="increasePage(page)"
          >
            &gt;
          </div>
        </div>

        <select
          class="py-2 px-4 rounded-md pr-10 cursor-pointer"
          v-model="selectedPageSize"
        >
          <option
            v-for="pageSize in pagesSizes"
            :key="`option-${pageSize}`"
            :value="pageSize"
          >
            {{
              $t('baseComponents.baseTable.selectPagintacionSize', {
                pageSize,
                concept: conceptWord,
              })
            }}
          </option>
        </select>
      </section>
      <div>
        {{
          $t('baseComponents.baseTable.showPagination', {
            startRowNumber: startRowNumber + 1,
            endRowNumber: rows.length < pageSize ? rows.length : endRowNumber,
            totalRowsNumber: rows.length,
            concept: conceptWord,
          })
        }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
