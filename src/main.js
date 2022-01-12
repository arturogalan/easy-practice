import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import { createI18n } from 'vue-i18n'
import { pinia } from './store'

// 1. Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const messages = {
  en: {
    dashboard: {
      routes: {
        calendarView: 'Calendar',
        clientView: 'Clients',
        servicesView: 'Services',
        invoicesView: 'Invoices',
        giftCardsView: 'Gift cards',
        onlineCoursesView: 'Online courses',
        statisticsView: 'Statistics',
        easyPayView: 'EasyPay',
        settingsView: 'Settings',
        appsView: 'Apps',
      },
    },
    easyPayView: {
      statsHeader: {
        account: {
          title: 'Account',
          description:
            'Amount has not been transferred to your bank account yet.',
        },
        onlinePaymentCount: {
          title: 'Online payment count',
          description:
            'Total amount of online payments you have received via EasyPay.',
        },
        futurePayments: {
          title: 'Future Payments',
          description: 'Amount that will be charged in the future via EasyPay.',
        },
      },
      paymentsTable: {
        payments: 'payments',
        search: 'Search',
      },
    },
    baseComponents: {
      baseTable: {
        showPagination:
          'Showing {startRowNumber} - {endRowNumber} of {totalRowsNumber} {concept}',
        selectPagintacionSize: 'Show {pageSize} {concept} per page',
        noResults: 'There are no results',
      },
      baseFooter: {
        yearAndBrand: '{currentYear} EasyPractice',
        contactMail: 'kontact@terapeutbooking.dk',
      },
    },
  },
}

const numberFormats = {
  en: {
    integer: {
      style: 'decimal',
      useGrouping: true,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      locale: 'de',
    },
    currency: {
      style: 'currency',
      currency: 'DKK',
      locale: 'de-DE',
      // style: 'currency', currency: "DKK", useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 2, locale: 'de',
    },
    decimalNG: {
      style: 'decimal',
      useGrouping: false,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  },
}
const datetimeFormats = {
  short: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
  en: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    long: {
      day: 'numeric',
      year: 'numeric',
      month: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      locale: 'de-DE',
    },
  },
}
// 2. Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  numberFormats,
  datetimeFormats,
})

const app = createApp(App).use(pinia).use(router)
app.use(i18n)
app.mount('#app')
