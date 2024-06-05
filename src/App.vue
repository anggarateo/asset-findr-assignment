<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import Sidebar from '@/components/layout/sidebar.vue'
import Navbar from '@/components/layout/navbar.vue'
import MiniSidebar from 'primevue/sidebar'
import Toast from 'primevue/toast'
import { onBeforeMount, ref } from 'vue'

const showSidebar = ref(false)

const router = useRouter()

onBeforeMount(() => {
  router.push('/asset')
})
</script>

<template>
  <main class="flex bg-gray-100 min-h-screen">
    <Toast />

    <Sidebar class="hidden sm:block" />

    <MiniSidebar v-model:visible="showSidebar" class="sm:hidden">
      <template #container>  
        <Sidebar class="w-full" />
      </template>
    </MiniSidebar>

    <section class="w-full">
      <Navbar @sidebar="showSidebar = true" />

      <div class="p-4">
        <RouterView class="bg-white rounded-md p-4" />
      </div>
    </section>
  </main>
</template>
