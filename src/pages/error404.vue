<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorPage404'
})
</script>

<template>
  <div class="flex justify-center items-center h-[calc(100vh/2)]">
    <div class="text-center">
      <h1 class="text-xl">
        404 | Page Not Found
      </h1>
  
      <RouterLink to="/">
        Return to home
      </RouterLink>
    </div>
  </div>
</template>
