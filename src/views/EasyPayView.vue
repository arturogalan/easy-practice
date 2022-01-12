<script>
import BaseCarousel from '@/components/BaseCarousel.vue'
import BaseTable from '@/components/BaseTable.vue'
import testData from '@/assets/test_data.json'

export default {
  name: 'easy-pay-view',
  components: {
    BaseCarousel,
    BaseTable,
  },
  data() {
    return {
      columns: [
        'formatted_created_at',
        'status_short_formatted',
        'client_name',
        'formatted_amount',
      ],
      rows: [],
      selectedStatusFilter: 'all',
      selectedTextFilter: '',
    }
  },
  mounted() {
    this.rows = testData.map((el) => {
      const formattedAmount = new Intl.NumberFormat('da-DK', {
        minimumFractionDigits: 2,
      }).format(el.amount / 100)
      const formattedCreatedAt = new Intl.DateTimeFormat('da-DK', {
        day: 'numeric',
        year: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      }).format(new Date(el.created_at))

      return {
        ...el,
        client_name: el.client.name,
        formatted_created_at: formattedCreatedAt,
        formatted_amount: `${el.currency} ${formattedAmount}`,
      }
    })
  },
  computed: {
    filteredRows() {
      const filterByStatusFunction = {
        all: () => {
          return true
        },
        ongoing: (el) => {
          return !['failed', 'paid'].includes(el.status)
        },
        charged: (el) => {
          return el.status === 'charged'
        },
        refunded: (el) => {
          return el.status === 'refunded'
        },
      }[this.selectedStatusFilter]

      const filterByTextFunction = (el) => {
        return (
          !this.selectedTextFilter ||
          el.client.name
            .toLowerCase()
            .indexOf(this.selectedTextFilter.toLowerCase()) !== -1
        )
      }

      const searchRegExp = this.selectedTextFilter
        ? new RegExp(this.selectedTextFilter, 'gi')
        : null

      return this.rows
        .filter(filterByStatusFunction)
        .filter(filterByTextFunction)
        .map((el) => {
          const immutable = { ...el }
          if (searchRegExp) {
            immutable.client_name = el.client_name.replace(
              searchRegExp,
              (match) => `<mark>${match}</mark>`,
            )
          } else {
            immutable.client_name = el.client.name
          }
          return immutable
        })
    },
  },
  methods: {
    getStatusRowColor({ status }) {
      const statusColorMap = {
        charged: 'bg-sky-500',
        refunded: 'bg-neutral-400',
        paid: 'bg-sky-600',
        failed: 'bg-rose-500',
      }
      return statusColorMap[status]
    },
  },
}
</script>

<template>
  <div class="flex flex-col content-between justify-between bg-gray-200">
    <div
      class="w-auto text-left md:ml-8 whitespace-nowrap text-xs md:text-base flex items-center"
    >
      <p class="mt-5 text-lg font-extrabold">
        {{ $t(`dashboard.routes.${$route.name}`) }}
      </p>
    </div>
    <base-carousel />
    <div class="w-auto mx-8 my-2 flex justify-between">
      <select
        name="select"
        class="w-64 py-2 mr-1 indent-4 rounded-md cursor-pointer"
        v-model="selectedStatusFilter"
      >
        <option value="all">All</option>
        <option value="ongoing" selected>Ongoing payments</option>
        <option value="charged">Charged</option>
        <option value="refunded">Refunded</option>
      </select>
      <input
        v-model="selectedTextFilter"
        type="text"
        class="w-64 indent-4 rounded-md"
        :placeholder="$t('easyPayView.paymentsTable.search')"
      />
    </div>
    <base-table
      class="mx-8 h-2/3"
      :columns="columns"
      :rows="filteredRows"
      :conceptWord="$t('easyPayView.paymentsTable.payments')"
      :statusColorMapper="getStatusRowColor"
    />
  </div>
</template>

<style scoped></style>
