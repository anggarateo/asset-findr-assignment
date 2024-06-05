<script lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import { FilterMatchMode } from 'primevue/api'
import idr from '@/utils/idrFormat'
import { useStore } from '@/store/index'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'ListAsset',

  components: {
    DataTable,
    Column,
    Tag
  },

  setup() {
    const cols = ref([
      { field: 'AssetID', header: 'Asset ID/Tag'},
      { field: 'AssetName', header: 'Asset Name'},
      { field: 'Category', header: 'Category'},
      { field: 'Description', header: 'Description'},
      { field: 'PurchaseCost', header: 'Purchase Cost'},
      { field: 'PurchaseDate', header: 'Purchase Date'},
      { field: 'Status', header: 'Status'}
    ])

    const store = useStore()

    const assetList = ref()

    const filter = ref({
      global: {
        value: '',
        matchMode: FilterMatchMode.CONTAINS
      }
    })

    onMounted(() => {
      assetList.value = store.assetList
    })

    return {
      cols,
      assetList,
      filter,
      idr
    }
  }
})
</script>

<template>
  <div class="space-y-4">
    <h1 class="font-bold">
      List Asset
    </h1>

    <div class="flex flex-col sm:flex-row gap-4">
      <RouterLink to="/asset/add" class="w-fit flex items-center gap-1 rounded-md bg-blue-600 text-white p-1 px-4">
        <i class="pi pi-plus text-xs" />

        <h1>
          Add Asset
        </h1>
      </RouterLink>

      <input
        type="search"
        v-model="filter['global'].value"
        class="rounded-md border focus:outline-none p-1 px-2"
        placeholder="Search Asset..."
      >
    </div>

    <DataTable
      v-model:filters="filter"
      :value="assetList"
      :global-filter-fields="['AssetName']"
      table-class="w-full text-sm"
    >
      <Column
        v-for="col in cols"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        header-class="bg-gray-100 p-4"
        body-class="p-4"
      >
        <template v-if="col.field === 'AssetID'" #body="props">
          <h1 class="text-gray-500">
            {{ props.data.AssetID }}
          </h1>
        </template>

        <template v-else-if="col.field === 'PurchaseCost'" #body="props">
          <h1 class="font-semibold">
            {{ idr(props.data.PurchaseCost) }}
          </h1>
        </template>

        <template v-else-if="col.field === 'PurchaseDate'" #body="props">
          <h1 class="text-gray-500">
            {{ props.data.PurchaseDate }}
          </h1>
        </template>

        <template v-else-if="col.field === 'Status'" #body="props">
          <Tag v-if="props.data.Status === 'Inactive'" severity="danger" :value="props.data.Status" rounded />
          <Tag v-else-if="props.data.Status === 'In Repair'" severity="warning" :value="props.data.Status" rounded />
          <Tag v-else :value="props.data.Status" rounded />
        </template>
      </Column>

      <template #empty>
        <h1 class="text-center">
          No data found.
        </h1>
      </template>
    </DataTable>
  </div>
</template>
