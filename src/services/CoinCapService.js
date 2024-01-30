import api from '@/lib/coinCapApi'

export default {
  getCryptos() {
    return api.get('')
  },

  getCrypto(id) {
    return api.get(`/${id}`)
  },
}
