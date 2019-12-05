import dayjs from 'dayjs'

export default async ({
  Vue
}) => {
  Vue.filter('dateFormat', d => {
    const date = d.split('-')
    const newData = new Date()
    newData.setDate(parseInt(date[0]) + 1)
    newData.setMonth(parseInt(date[1]) - 1)
    newData.setFullYear(date[2])

    return dayjs(newData).format('DD/MM/YY')
  })

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
