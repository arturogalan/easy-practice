<script>

  export default {
    name: 'base-header',
    components: {
    },
    data() {
      return {
        routes: [
          {name:'calendarView', icon:'calendar'},
          {name:'clientView', icon:'accounts-alt'},
          {name:'servicesView', icon:'assignment-check'}, //case-check
          {name:'invoicesView', icon:'file-text'},
          {name:'giftCardsView', icon:'card-giftcard'},
          {name:'onlineCoursesView', icon:'graduation-cap'},
          {name:'statisticsView', icon:'chart'},
          {name:'easyPayView', icon:'card'},
          {name:'settingsView', icon:'settings'},
          {name:'appsView', icon:'apps'},
        ],
      }
    },
    methods: {
      isSelected(viewName) {
        return this.$route.name === viewName;
      }
    },
  }
</script>
<template>
<header class="pt-4 bg-white text-gray-700 text-center mx-5">
  <nav class="flex items-center justify-between mx-5">
    <div
      class="h-10 min-w-fit px-4 cursor-pointer select-test"
      v-for="routeItem in routes"
      :key="routeItem.name"
      :class="[isSelected(routeItem.name) && 'border-b-solid border-b-2 border-emerald-600']"
    >
    <p :class="[isSelected(routeItem.name) && 'text-emerald-600']">
      <i
      class="zmdi zmdi-hc-lg mr-2"
      :class="[`zmdi-${routeItem.icon}`, isSelected(routeItem.name) && 'text-emerald-600']"
      ></i>
      {{$t(`dashboard.routes.${routeItem.name}`)}}
    </p>
    </div>
  </nav>
</header>
</template>

<style scoped>
</style>
