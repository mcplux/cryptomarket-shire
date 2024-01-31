import api from '@/lib/coinCapApi'

export default {
  getCryptos() {
    return api.get('')
  },

  getCrypto(id) {
    return api.get(`/${id}`)
  },

  getHistory(id) {
    return api.get(`/${id}/history?interval=d1`)
  }
}
