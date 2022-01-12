<script>
export default {
  name: 'base-footer',
  components: {},
  data() {
    return {
      currentYear: new Intl.DateTimeFormat('da-DK', {
        year: 'numeric',
      }).format(new Date()),
    }
  },
}
</script>
<template>
  <footer
    class="py-3 bg-gray-200 text-center border-y-solid border-y-2 border-gray-300"
  >
    <div class="md:flex md:items-center md:justify-between mx-5">
      <p>
        {{
          $t('baseComponents.baseFooter.yearAndBrand', {
            currentYear: `${currentYear}`,
          })
        }}
      </p>
      <p>{{ $t('baseComponents.baseFooter.contactMail') }}</p>
    </div>
  </footer>
</template>

<style scoped></style>
