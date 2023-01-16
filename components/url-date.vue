<template>
    {{ pageURL() }}
</template>

<script setup>
    import {computed} from "vue"

    const pageURL = () => {
      return window.location.href;
   }
</script>