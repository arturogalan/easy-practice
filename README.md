# Easy practice challenge

A payment management example project, deployed in netlify:

## <a href="https://easy-practice.netlify.app/" target="_blank">easy-practice.netlify.app</a>

### 1. Install the project (npm is required)

- `npm install`

### 2. run the project

- `npm run dev`

## Decisions taken and other notes

- The navbar at the top has a min-width to just maintain the look, if the page is going to be responsive in mobiles etc a more precise styling should be done (with tailwind selectors md: sm: etc to collapse menu in smaller screens with media queries, and with the help of an appearance design describing how that collapsed status should be).
- Didn't find the colors for other payments statuses in the example, so I selected a darker blue for Paid and red for Failed ones.
- The dates months are not capitalized cause is the standard format retrieved by Intl.DateTimeFormat('da-DK'). If we want them capitalized then a more customized format of the date should be done.
- As the results JSON is 'small' there is no debounce in the search or other mechanisms to ensure responsiveness. If the tables can have thousands of rows, the search in the table can be optimized.
- Just imported the JSON in the vue component for testing purposes, a state management and an API services layer should be added when calling to real endpoints to retrieve the results.
- Also an Accessible Rich Internet Applications (ARIA) tags of the html more important elements should be done for proper accesibility.
- Formatted with prettier. Any other tool or presets can be applied to format code.

## Testing

- Unit testing: command `npm run test:unit`. For unit testing I've choosen Vue test utils https://next.vue-test-utils.vuejs.org/, a library to easily test Vue components and Jest as the runner for this tests. I've made an example test for TableBase.vue, you can see that I test the existence of rows and pagination fields. Next step will be also to connect the execution to a ci to see the coverage of the code and stablish a coverage minimum for all the app, currently you can see it the report in text format when running `npm run test:unit`
- End-to-end testing: command `npm run test:e2e`. For e2e testing I selected Cypress, it allows you to test elements in the screen, you can search for content as a result of some endpoint call, you can test navigationetc... It also makes an screenshot when the test fails.

## Project structure

```
????????? cypress                   # Cypress folder for snapshots
????????? dist                      # Generated files of the app
????????? src                       # Source code
|         ????????? assets          # Static images folder
|         ????????? components      # Vue reusable components
|         ????????? router          # The app routes and the definition of components that render them as well as the url queries and params
|         ????????? utils           # Constants and utilities javascript functions
|         ????????? views           # Vue views components, each one corresponding to one route path
????????? test                      # Unit and e2e tests
|         ????????? e2e             # Unit tests with jest and Vue test utils, you can also add simple jest tests of vanilla functions
|         ????????? unit            # e2e tests with cypress

```
