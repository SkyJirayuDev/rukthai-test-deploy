<template>
  <section class="our-work">
    <h2 class="our-work__heading section-title">What we do</h2>
    <div class="our-work-card" v-for="(work, index) in works" :key="index">
      <img :src="work.icon" :alt="work.title" class="our-work-card__icon" />
      <h3 class="our-work-card__title">{{ work.title }}</h3>
      <p class="our-work-card__text">{{ work.text }}</p>
    </div>
    <nuxt-link
      to="/services-and-pricing"
      class="our-work-card__button btn-primary btn-primary--white"
    >
      Our Services & Pricing
    </nuxt-link>
  </section>
</template>

<script setup>
import { readonly } from "vue";

const works = readonly([
  {
    icon: "/img/icon-traditional.png",
    title: "Traditional Thai Massage",
    text: "Thai massage is one of the world's oldest healing modalities. It's a blend of pressure-point massage, acupressure, energy work & gentle yoga stretches.",
  },
  {
    icon: "/img/icon-aroma.png",
    title: "Aromatherapy",
    text: "The art of using aromatic essential oils with a soft pressure massage.",
  },
  {
    icon: "/img/icon-spa.png",
    title: "Swedish Massage (Medium)",
    text: "A gentle therapeutic massage for relieving muscle tension & alleviating muscle fatigue.",
  },
  {
    icon: "/img/icon-physical.png",
    title: "Sports Massage (Hard)",
    text: "An invigorating deep tissue oil massage to help relieve muscle pain from sports.",
  },
  {
    icon: "/img/icon-foot.png",
    title: "Foot Reflexology",
    text: "Designed to relax and soothe tired aching feet and lower legs using the hand and wooden stick.",
  },
  {
    icon: "/img/icon-aromatic-facial.png",
    title: "Aromatic Facial",
    text: "Aromatic facial treatment to relieve muscle tension and improve blood and lymph circulation.",
  },
]);
</script>

<style lang="scss" scoped>
.our-work {
  margin-bottom: var(--spacing-large);
  padding: 0 5rem;
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: repeat(3, minmax(25%, 1fr));

  @media only screen and (max-width: 53em) {
    grid-template-columns: repeat(2, minmax(40%, 1fr));
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: minmax(40%, 1fr);
    padding: 0 2rem;
  }

  &__heading {
    grid-column: 1 / -1;
    font-family: Vidaloka, sans-serif;
  }
}
.our-work-card {
  margin: 5rem 4rem;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  justify-items: center;
  background-color: rgba(white, 0.92);
  border-radius: 2rem;
  box-shadow: 2px 3px 1.5rem rgba(0, 0, 0, 0.25);
  transition: all 0.4s;

  @media only screen and (max-width: 37.5em) {
    margin: 3rem 2rem;
  }

  &:hover {
    background-color: rgba(white, 0.92);
    border-radius: 2rem;
    transform: scale(1.03);
    box-shadow: 3px 4px 4rem rgba(0, 0, 0, 0.25);
  }

  &__icon {
    height: 5rem;
  }

  &__title {
    color: black;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2rem;
    padding: 1rem 0;
    text-align: center;
  }

  &__text {
    color: black;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.8rem;
    padding: 1rem 3rem;
    text-align: center;
    align-self: start;
  }

  &__button {
    grid-column: 1 / -1;
    align-self: center;
    justify-self: center;

    @media only screen and (max-width: 18.75em) {
      font-size: 1.8rem !important;
    }
  }
}
</style>
