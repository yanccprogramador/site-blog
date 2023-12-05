<template>
    <career-component />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

// Components
import CareerComponent from '../components/CareerComponent.vue';

export default defineComponent({
  name: 'CareerView',

  components: {
    CareerComponent,
  },
});
</script>