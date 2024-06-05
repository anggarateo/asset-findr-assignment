<script lang="ts">
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import TextArea from 'primevue/textarea'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import Calendar from 'primevue/calendar'
import InlineMessage from 'primevue/inlinemessage'
import { useToast } from "primevue/usetoast"
import { useStore } from '@/store/index'
import { useRouter } from 'vue-router'
import moment from 'moment'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AddAsset',

  components: {
    FloatLabel,
    InputText,
    TextArea,
    Dropdown,
    InputNumber,
    Calendar,
    InlineMessage
  },

  setup() {
    const form = ref({
      AssetID: { value: '', message: '' },
      AssetName: { value: '', message: '' },
      Category: { value: '', message: '' },
      Status: { value: '', message: '' },
      ModelNumber: { value: '', message: '' },
      SerialNumber: { value: '', message: '' },
      Description: { value: '', message: '' },
      PurchaseCost: { value: null, message: '' },
      PurchaseDate: { value: '', message: '' },
      VendorName: { value: '', message: '' }
    })

    const categories = ref([
      'Vehicle',
      'Tire',
      'Furniture'
    ])

    const toast = useToast()

    const store = useStore()

    const router = useRouter()

    function validation () {
      Object.entries(form.value).forEach(item => {
        if (form.value[item[0]].value) {
          form.value[item[0]].message = ''
        } else {
          form.value[item[0]].message = 'this field is required'
        }
      })

      let valid

      Object.values(form.value).filter(el => !el.value).length
      ? valid = false : valid = true

      return valid
    }

    function onSubmit () {
      if (!validation()) return

      if (store.assetList.filter(el => el.AssetID === form.value.AssetID.value).length) {
        toast.add({ severity: 'warn', summary: 'Warning Message', detail: 'Asset ID already exists', life: 2000 })
        return
      }

      store.$patch({
        assetList: [
          {
            AssetID: form.value.AssetID.value,
            AssetName: form.value.AssetName.value,
            Category: form.value.Category.value,
            Status: form.value.Status.value,
            ModelNumber: form.value.ModelNumber.value,
            SerialNumber: form.value.SerialNumber.value,
            Description: form.value.Description.value,
            PurchaseCost: form.value.PurchaseCost.value,
            PurchaseDate: moment(form.value.PurchaseDate.value).format('YYYY-MM-DD'),
            VendorName: form.value.VendorName.value
          },
          ...store.assetList
        ]
      })

      toast.add({ severity: 'success', summary: 'Success Message', detail: 'Asset has been added successfully', life: 2000 })

      router.push('/asset')
    }

    return {
      form,
      categories,
      router,
      onSubmit
    }
  }
})
</script>

<template>
  <form class="space-y-2" @submit.prevent="onSubmit">
    <div class="flex gap-2 items-center">
      <i class="pi pi-arrow-left cursor-pointer" @click="router.back()" />
      
      <h1 class="font-bold">
        Add Asset
      </h1>
    </div>

    <div class="flex flex-col sm:flex-row">
      <div class="w-full sm:w-1/2 p-4 space-y-6">
        <h1 class="font-semibold">
          Asset Information
        </h1>

        <div class="space-y-1">
          <FloatLabel>
            <label for="id">Asset ID/Tag</label>
            <InputText id="id" v-model="form.AssetID.value" class="focus:outline-gray-500 p-2 w-full border" />
          </FloatLabel>

          <InlineMessage v-if="form.AssetID.message">{{ form.AssetID.message }}</InlineMessage>
        </div>

        <div class="space-y-1">
          <FloatLabel>
            <label for="name">Asset Name</label>
            <InputText id="name" v-model="form.AssetName.value" class="focus:outline-gray-500 p-2 w-full border" />
          </FloatLabel>

          <InlineMessage v-if="form.AssetName.message">{{ form.AssetName.message }}</InlineMessage>
        </div>

        <div class="space-y-1">
          <FloatLabel>
            <Dropdown inputId="category" v-model="form.Category.value" :options="categories" class="focus:outline-gray-500 p-2 w-full border" />
            <label for="category">Category</label>
          </FloatLabel>

          <InlineMessage v-if="form.Category.message">{{ form.Category.message }}</InlineMessage>
        </div>

        <div class="space-y-1">
          <FloatLabel>
            <Dropdown inputId="status" v-model="form.Status.value" :options="['Active', 'Inactive', 'In Repair']" class="focus:outline-gray-500 p-2 w-full border" />
            <label for="status">Status</label>
          </FloatLabel>

          <InlineMessage v-if="form.Status.message">{{ form.Status.message }}</InlineMessage>
        </div>
        
        <div class="space-y-1">
          <FloatLabel>
            <label for="model">ModelNumber</label>
            <InputText id="model" v-model="form.ModelNumber.value" class="focus:outline-gray-500 p-2 w-full border" />
          </FloatLabel>

          <InlineMessage v-if="form.ModelNumber.message">{{ form.ModelNumber.message }}</InlineMessage>
        </div>
        
        <div class="space-y-1">
          <FloatLabel>
            <label for="serial">SerialNumber</label>
            <InputText id="serial" v-model="form.SerialNumber.value" class="focus:outline-gray-500 p-2 w-full border" />
          </FloatLabel>

          <InlineMessage v-if="form.SerialNumber.message">{{ form.SerialNumber.message }}</InlineMessage>
        </div>

        <div class="space-y-1">
          <FloatLabel>
            <TextArea v-model="form.Description.value" rows="2" class="focus:outline-gray-500 p-2 w-full border resize-none" />
            <label>Description</label>
          </FloatLabel>

          <InlineMessage v-if="form.Description.message">{{ form.Description.message }}</InlineMessage>
        </div>
      </div>

      <div class="w-full sm:w-1/2 p-4 space-y-6">
        <h1 class="font-semibold">Purchase Information</h1>

        <div class="space-y-1">
          <FloatLabel>
            <label for="cost">Purchase Cost</label>
            <InputNumber inputId="cost" v-model="form.PurchaseCost.value" mode="currency" currency="IDR" locale="id-ID" inputClass="focus:outline-gray-500 p-2 w-full border" class="w-full" />
          </FloatLabel>

          <InlineMessage v-if="form.PurchaseCost.message">{{ form.PurchaseCost.message }}</InlineMessage>
        </div>

        <div class="space-y-1">
          <FloatLabel>
            <Calendar v-model="form.PurchaseDate.value" inputId="date" inputClass="focus:outline-gray-500 p-2 w-full border" class="w-full"/>
            <label for="data">Purchase Date</label>
          </FloatLabel>

          <InlineMessage v-if="form.PurchaseDate.message">{{ form.PurchaseDate.message }}</InlineMessage>
        </div>

        <div class="space-y-1">
          <FloatLabel>
            <label for="vendor">Vendor Name</label>
            <InputText id="vendor" v-model="form.VendorName.value" class="focus:outline-gray-500 p-2 w-full border" />
          </FloatLabel>

          <InlineMessage v-if="form.VendorName.message">{{ form.VendorName.message }}</InlineMessage>
        </div>
      </div>
    </div>

    <div class="p-4">
      <button class="p-2 w-full sm:w-1/4 bg-blue-600 rounded-md text-white">
        Add Asset
      </button>
    </div>
  </form>
</template>
