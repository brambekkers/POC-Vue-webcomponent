<script setup lang="ts">
import { computed } from 'vue';
import Svg from './Svg.vue';
defineProps({
  productId: {
    type: String,
    default: 'primary',
  },
  contractId: {
    type: String,
    default: 'lg',
  },
});

const items = computed(() => [
  {
    name: 'Reference number',
    value: 'xxx',
  },
  {
    name: 'Personal reference number',
    value: 'xxx',
  },
  {
    name: 'Currency',
    value: 'EUR',
  },
  {
    name: 'Amount',
    value: '€ 2.183.232,10',
  },
  {
    name: 'Remaining amount',
    value: '€ 501.495,21',
  },
  {
    name: 'Issue date',
    value: 'dd/mm/yyyy',
  },
  {
    name: 'Expiration date',
    value: 'dd/mm/yyyy',
  },
  {
    name: 'Recipient',
    value: 'xxx',
  },
  {
    name: 'Fees and commission',
    value: 'xxx',
  },
]);
</script>

<template>
  <section class="card">
    <div class="card-body">
      <div class="product-head">
        <Svg />
        <div class="title-container">
          <h1 class="title">Bank guarantee</h1>
          <h3 class="subtitle">{{ productId }} - {{ contractId }}</h3>
        </div>
      </div>
      <hr />
      <div>
        <div class="detail-field" v-for="(item, key) of items" :key="key">
          <p class="detail-name">{{ item.name }}</p>
          <p class="detail-value">{{ item.value }}</p>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.167 5.99997L18.7528 4.58579C17.9718 3.80474 16.7054 3.80474 15.9244 4.58578L4.84713 15.663C4.69364 15.8165 4.59425 16.0157 4.56397 16.2307L4.00502 20.1975C3.95851 20.5276 4.2419 20.8099 4.57179 20.7621L8.52442 20.1897C8.73793 20.1588 8.93572 20.0597 9.08827 19.9071L20.167 8.8284C20.9481 8.04735 20.9481 6.78102 20.167 5.99997ZM8.85335 17.3137L7.43911 15.8995L14.5102 8.8284L15.9244 10.2426L8.85335 17.3137ZM17.3386 8.8284L15.9244 7.41422L17.3386 5.99997L18.7528 7.41422L17.3386 8.8284Z"
            fill="#00716B"
          />
        </svg>
        <a href="/">Modify</a>
      </div>
      <div class="link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 11V5C11 4.447 11.448 4 12 4C12.552 4 13 4.447 13 5V11H19C19.553 11 20 11.448 20 12C20 12.552 19.553 13 19 13H13V19C13 19.553 12.552 20 12 20C11.448 20 11 19.553 11 19V13H5C4.447 13 4 12.552 4 12C4 11.448 4.447 11 5 11H11Z"
            fill="#00716B"
          />
        </svg>
        <a href="/">Request new bank guarantee</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import url('./scss/styles.scss');
</style>
