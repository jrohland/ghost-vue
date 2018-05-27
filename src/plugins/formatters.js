import dayjs from 'dayjs'

export default {
  install (Vue, options) {
    Vue.filter('date', (value) => {
      return dayjs(value).format('MMM D, YYYY')
    })
  }
}
