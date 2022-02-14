<template>
  <div class="q-pa-md">
    <q-table
        title="Tyres"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :loading="loading"
        :filter="filter"
    >
      <!--          selection="multiple"-->
      <!--          v-model:selected="selected"-->
      <!--      >-->

      <template v-slot:top-right>
        <q-input dense debounce="300" v-model="filter" label="Search by tyre size" mask="###-##-##" pattern="[0-9]*">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      
<!--      <template v-slot:top-row>-->
<!--        <q-tr>-->
<!--          <q-td colspan="100%">-->
<!--            Top row-->
<!--          </q-td>-->
<!--        </q-tr>-->
<!--      </template>-->


    </q-table>
<!--    <q-grouped-table-->
<!--        title="Tyres"-->
<!--        :rows="rows"-->
<!--        :columns="columns"-->
<!--        row-key="name">-->
<!--      &lt;!&ndash;          selection="multiple"&ndash;&gt;-->
<!--      &lt;!&ndash;          v-model:selected="selected"&ndash;&gt;-->
<!--      &lt;!&ndash;      >&ndash;&gt;-->

<!--&lt;!&ndash;      <template v-slot:top-right>&ndash;&gt;-->
<!--&lt;!&ndash;        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">&ndash;&gt;-->
<!--&lt;!&ndash;          <template v-slot:append>&ndash;&gt;-->
<!--&lt;!&ndash;            <q-icon name="search" />&ndash;&gt;-->
<!--&lt;!&ndash;          </template>&ndash;&gt;-->
<!--&lt;!&ndash;        </q-input>&ndash;&gt;-->
<!--&lt;!&ndash;      </template>&ndash;&gt;-->

<!--      <template v-slot:top-row>-->
<!--        <q-tr>-->
<!--          <q-td colspan="100%">-->
<!--            Top row-->
<!--          </q-td>-->
<!--        </q-tr>-->
<!--      </template>-->
<!--    </q-grouped-table>-->
  </div>
</template>

<script lang="ts" setup>
import {Ref, ref} from 'vue'
import {Tyre, tyreService} from "@/services/tyre-data-service"

const columns = [
  {
    name: 'name',
    label: 'Tyre Kind',
    align: 'left',
    field: (row: Tyre): string => row.brand + ' ' + row.series,
    format: (val: string): string => val,
    sortable: true
  },
  {
    name: 'size',
    label: 'Tyre Size',
    align: 'left',
    field: (row: Tyre): string => row.width + '-' + row.profile + '-' + row.diameter,
    format: (val: string): string => val,
    sortable: true
  },
  {
    name: 'price',
    label: 'Selling Price',
    align: 'right',
    field: (row: Tyre): number => row.sellingPrice,
    format: (val: number): string => `RM ${val}.00`,
    sortable: true
  }
]
const loading = ref(true)
const filter = ref('')
const rows: Ref<Tyre[] | undefined> = ref()

tyreService.getTyres()
    .then(x => {
      const [error, data] = x
      if (error) {
        console.log(`Something went wrong ${error}`)
      }
      rows.value = data && data.tyres
    })
    .finally(() => {
      loading.value = false
    })
</script>

<style scoped>

</style>