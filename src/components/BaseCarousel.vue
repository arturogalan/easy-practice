<script>
export default {
  name: 'base-carousel',
  data() {
    return {
      // TODO Pass this as a component prop when app grows
      carouselDescriptor: [
        {
          title: 'easyPayView.statsHeader.account.title',
          quantity: 'DKK 1356,22',
          description: 'easyPayView.statsHeader.account.description',
        },
        {
          title: 'easyPayView.statsHeader.onlinePaymentCount.title',
          quantity: 17,
          description: 'easyPayView.statsHeader.onlinePaymentCount.description',
        },
        {
          title: 'easyPayView.statsHeader.futurePayments.title',
          quantity: 'DKK 476,83',
          description: 'easyPayView.statsHeader.futurePayments.description',
        },
      ],
    }
  },
}
</script>
<template>
  <section>
    <div
      class="grid grid-cols-4 gap-8 my-3 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0 mx-8"
    >
      <div
        v-for="(carouselItem, index) in carouselDescriptor"
        :key="`carouselItem-${index}`"
        class="relative flex flex-col items-center justify-start col-span-4 px-8 py-4 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl border-solid border-2 border-gray-300"
      >
        <p class="text-xl font-bold">{{ $t(carouselItem.title) }}</p>
        <h4 class="text-2xl font-extrabold text-gray-700">
          {{ carouselItem.quantity }}
        </h4>
        <p class="text-base text-center text-gray-500">
          {{ $t(carouselItem.description) }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
