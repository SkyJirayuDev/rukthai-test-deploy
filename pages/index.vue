<template>
  <div class="container">
    <NavigationIndex />
    <NavigationMobile />
    <MainSection />
    <AboutSection />
    <OurWorkSection />
    <PackagesSection />
    <GiftVouchersSection />
    <TestimonialsSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavigationIndex from "~/components/NavigationIndex.vue";
import NavigationMobile from "~/components/NavigationMobile.vue";
import MainSection from "~/components/MainSection.vue";
import AboutSection from "~/components/AboutSection.vue";
import OurWorkSection from "~/components/OurWorkSection.vue";
import PackagesSection from "~/components/PackagesSection.vue";
import GiftVouchersSection from "~/components/GiftVouchersSection.vue";
import TestimonialsSection from "~/components/TestimonialsSection.vue";
import ContactSection from "~/components/ContactSection.vue";
import FooterSection from "~/components/FooterSection.vue";
</script>

<style lang="scss">
:root {
  --spacing-small: 10rem;
  --spacing-large: 14rem;
}

.container {
  display: grid;
  grid-template-rows: 7vh;
  grid-template-columns:
    [full-start] minmax(8rem, 15%) [main-start] repeat(
      2,
      [col-start] 1fr [col-end]
    )
    [main-end] minmax(8rem, 15%) [full-end];
}

.main,
.about,
.contact {
  margin-bottom: var(--spacing-small);
}

.our-work,
.packages,
.gift-vouchers,
.testimonials {
  margin-bottom: var(--spacing-large);
}
</style>
