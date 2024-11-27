<template>
  <div class="services-container">
    <NavigationServices />
    <NavigationMobile />
    <Services />
    <PricingTable />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavigationServices from "~/components/NavigationServices.vue";
import NavigationMobile from "~/components/NavigationMobile.vue";
import Services from "~/components/Services.vue";
import PricingTable from "~/components/PricingTable.vue";
import ContactSection from "~/components/ContactSection.vue";
import FooterSection from "~/components/FooterSection.vue";
</script>

<style lang="scss">
.services-container {
  display: grid;
  grid-template-rows: 7vh;
  grid-template-columns:
    [full-start] minmax(8rem, 15%) [main-start] repeat(
      2,
      [col-start] 1fr [col-end]
    )
    [main-end] minmax(8rem, 15%) [full-end];
}
</style>
