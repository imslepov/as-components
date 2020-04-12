<template>
  <div class="layout">
    <AppHeader />
    <div class="container py-9">
      <as-row gutters="xl" gutters-sm="sm">
        <as-col tag="aside" sm="5">
          <AppExplorer />
        </as-col>
        <as-col tag="main" sm="19">
          <nuxt />
        </as-col>
      </as-row>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppExplorer from "@/components/AppExplorer";

export default {
  components: {
    AppHeader,
    AppExplorer
  }
};
</script>
