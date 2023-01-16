# Jeff's BJJ Log

<script setup>
    import {computed} from "vue"
    import bjjBelt from '../components/bjj-belt.vue'

    const pageURL = computed(() => {
      return window.location.href;
   })
</script>

{{pageURL}}}
<bjj-belt imageWidth="200" beltLevel="0" stripeCount="0"></bjj-belt>