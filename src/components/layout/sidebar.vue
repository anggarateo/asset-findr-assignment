<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SideBar',
  
  setup() {
    const menu = ref([
      { path: '/', icon: 'pi pi-home', name: 'Home' },
      { path: '/asset', icon: 'pi pi-wallet', name: 'Manage Asset' },
      { path: '/settings', icon: 'pi pi-cog', name: 'Settings' }
    ])

    return {
      menu
    }
  }
})
</script>

<template>
  <aside class="bg-white p-4 border w-1/5 space-y-8 sticky top-0 h-screen">
    <div class="flex justify-center">
      <img src="/image.png" alt="Logo" width="150">
    </div>

    <div class="flex flex-col gap-1">
      <RouterLink
        v-for="(item, i) in menu"
        :key="i"
        :to="item.path"
        :class="{ 'bg-gray-200': item.path !== '/' && $route.path.includes(item.path) }"
        class="flex items-center gap-2 p-2 hover:bg-gray-200"
      >
        <i :class="item.icon" />
        
        <h1>
          {{ item.name }}
        </h1>
      </RouterLink>
    </div>
  </aside>
</template>
