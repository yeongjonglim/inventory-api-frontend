<template>
  <div class="q-pa-md">
    <q-table
        title="Tyres"
        :rows="rows"
        :columns="columns"
        row-key="name">
      <!--          selection="multiple"-->
      <!--          v-model:selected="selected"-->
      <!--      >-->

      <template v-slot:top-row>
        <q-tr>
          <q-td colspan="100%">
            Top row
          </q-td>
        </q-tr>
      </template>

      <template v-slot:bottom-row>
        <q-tr>
          <q-td colspan="100%">
            Bottom row
          </q-td>
        </q-tr>
      </template>

      <template v-slot:bottom>
        Bottom
      </template>

    </q-table>
  </div>
</template>

<script lang="ts" setup>
import {Tyre, tyreService} from "@/services/tyre-data-service";

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

const [error, response] = await tyreService.getTyres()
if (error)
{
  console.log(`Something went wrong: ${error}`)
}
const rows = response && response.tyres
</script>

<style scoped>

</style>