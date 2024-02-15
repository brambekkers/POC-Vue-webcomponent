import { defineCustomElement } from 'vue'

import ProductDetail from './ProductDetail.ce.vue'

const aabProductDetail = defineCustomElement(ProductDetail)
customElements.define('aab-product-detail', aabProductDetail)

// Mount the app only for testing
// createApp(Button).mount('#app')
