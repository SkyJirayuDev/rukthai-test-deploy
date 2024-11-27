<template>
  <div class="services-pricing">
    <img
      src="/img/icons/burning-oil.svg"
      alt="Burning Oil"
      class="services-pricing__icon"
    />
    <h2 class="services-pricing__heading">Prices</h2>
    <div class="services-pricing__table">
      <p
        v-for="price in prices"
        :key="price.duration"
        class="services-pricing__text"
      >
        {{ price.duration }} <span>{{ price.amount }}</span>
      </p>
    </div>
    <a
      href="https://bookings.receptionerapp.com/rukthaimassage"
      class="btn-primary btn-primary--white services-pricing__button u-margin-bottom-big"
    >
      Book Online
    </a>
  </div>
</template>

<script setup>
import { readonly } from "vue";

const prices = readonly([
  { duration: "10 min", amount: "$20" },
  { duration: "20 min", amount: "$40" },
  { duration: "30 min", amount: "$55" },
  { duration: "45 min", amount: "$75" },
  { duration: "60 min", amount: "$90" },
  { duration: "75 min", amount: "$110" },
  { duration: "90 min", amount: "$130" },
  { duration: "120 min", amount: "$165" },
  { duration: "150 min", amount: "$205" },
  { duration: "180 min", amount: "$245" },
]);
</script>

<style lang="scss" scoped>
.services-pricing {
  grid-column: main-start / main-end;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media only screen and (max-width: 37.5em) {
    grid-column: 1 / -1;
  }

  @media only screen and (max-width: 28.25em) {
    padding: 0 3rem;
  }

  @media only screen and (max-width: 22em) {
    justify-items: stretch;
  }

  &__icon {
    grid-column: 1 / -1;
    width: 15rem;
    padding-bottom: 7rem;

    @media only screen and (max-width: 22em) {
      justify-self: center;
    }
  }

  &__heading {
    grid-column: 1 / -1;
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 9rem;

    @media only screen and (max-width: 22em) {
      justify-self: center;
    }
  }

  &__table {
    grid-column: 1 / -1;
    font-size: 5rem;
    font-weight: 700;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10rem;
    row-gap: 5rem;
    text-align: center;
    padding-bottom: 10rem;

    @media only screen and (max-width: 43.75em) {
      column-gap: 7rem;
    }

    @media only screen and (max-width: 40em) {
      column-gap: 6rem;
    }

    @media only screen and (max-width: 37.5em) {
      column-gap: 5rem;
    }

    @media only screen and (max-width: 25em) {
      column-gap: 3rem;
    }

    @media only screen and (max-width: 22em) {
      grid-template-columns: 1fr;
      padding-bottom: 5rem;
      justify-items: stretch;
    }
  }

  &__text {
    font-size: 5rem;
    font-weight: 300;
    padding: 2rem 3rem;
    border-radius: 3rem;
    box-shadow: $default-box-shadow;

    @media only screen and (max-width: 62.5em) {
      font-size: 4rem;
    }

    @media only screen and (max-width: 50em) {
      font-size: 3rem;
    }

    @media only screen and (max-width: 37.5em) {
      font-size: 2.5rem;
    }

    @media only screen and (max-width: 28.25em) {
      font-size: 2rem;
    }
  }

  &__button {
    text-align: center;
    justify-self: center;
    grid-column: 1 / -1;
  }
}
</style>
