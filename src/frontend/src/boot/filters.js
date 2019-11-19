import dayjs from 'dayjs'

export default async ({
  Vue
}) => {
  Vue.filter('dateFormat', d => dayjs(new Date(d)).format('DD/MM/YY'))

  Vue.filter('getHours', (vetor) => {
    let timeInit, timeFinal
    let i = 0
    while (vetor[i] !== 1 && i !== vetor.length) {
      i++
    }
    timeInit = this.time1[i]
    while (vetor[i] !== 0 && i !== vetor.length) {
      i++
    }
    timeFinal = this.time2[i - 1]
    return `${timeInit} - ${timeFinal}`
  })
}
