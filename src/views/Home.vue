<template>
  <main class="home">
    <Suspense>
      <TyreTable/>
    </Suspense>
  </main>
</template>

<script lang="ts" setup>
import TyreTable from "@/components/TyreTable.vue";
</script>
