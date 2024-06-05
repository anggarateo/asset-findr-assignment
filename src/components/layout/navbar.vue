<script lang="ts">
import PButton from 'primevue/button'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',

  components: {
    PButton
  }
})
</script>

<template>
  <nav class="sticky top-0 z-[999] bg-white p-4 border flex justify-between items-center">
    <PButton icon="pi pi-bars" class="sm:hidden" @click="$emit('sidebar')" />

    <h1 class="font-semibold">
      {{ $route.meta.title }}
    </h1>

    <div class="flex gap-4 items-center">
      <i class="relative">
        <i class="absolute right-0 rounded-full border border-white bg-red-400 w-2 h-2" />
        
        <i class="pi pi-bell" />
      </i>

      <div class="rounded-full bg-cover w-8 h-8 bg-[#FFBC99]" :style="{ backgroundImage: `url('/user.png')` }" />
    </div>
  </nav>
</template>
