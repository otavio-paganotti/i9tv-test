import Vue from 'vue'
import 'moment/locale/pt-br'
const moment = require('moment')

Vue.filter('formatDate', (value) => {
  if (!value) { return '' }
  moment.locale('pt-br')
  return moment.utc(value).format('ll')
})
