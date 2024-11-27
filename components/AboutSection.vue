<template>
  <section class="about">
    <p class="about__text about__heading">
      Sawasdeeka, <br />Welcome to Ruk Thai Massage
    </p>
    <p class="about__text about__text--row-1">
      Ruk Thai Massage has been established since 2009 in Ellerslie and is
      currently located in Remuera Auckland.
    </p>
    <p class="about__text about__text--row-2">
      Leave all your worries behind & prepare yourself to be pampered and
      indulged, after all everyone deserves some quality time to relax &
      rejuvenate at Ruk Thai Massage.
    </p>
    <div v-for="n in 4" :key="n" :class="`about__shape-${n}`">&nbsp;</div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  margin-bottom: var(--spacing-small);
  grid-column: main-start / main-end;
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-content: space-around;
  position: relative;

  @media only screen and (max-width: 50em) {
    grid-column: full-start / full-end;
  }

  &__text,
  &__heading {
    font-family: Roboto, sans-serif;
    text-align: center;
    grid-column: 1 / -1;
    display: inline-block;
    padding: 4.5rem;
    color: #333;
  }

  &__text {
    font-size: 3.8rem;
    line-height: 8rem;
    font-weight: 300;

    @media only screen and (max-width: 68.75em) {
      font-size: 3rem;
      line-height: 5rem;
    }

    &--row-1 {
      grid-row: 2 / 3;
    }

    &--row-2 {
      grid-row: 3 / 4;
    }
  }

  &__heading {
    font-family: Vidaloka, sans-serif;
    font-size: 5rem;
    font-weight: 400;
    line-height: 6rem;
    justify-self: center;
    width: 100%;
    grid-row: 1 / 2;

    @media only screen and (max-width: 68.75em) {
      font-size: 3.5rem;
      line-height: 4rem;
    }
  }

  &__shape-1,
  &__shape-2,
  &__shape-3,
  &__shape-4 {
    position: absolute;
    width: 18rem;
    height: 9rem;
    z-index: -1;
    border-top-left-radius: 11rem;
    border-top-right-radius: 11rem;
  }

  &__shape-1 {
    left: -10%;
    top: 72%;
    background-color: #f9e9f8;
    transform: rotate(172deg);
  }

  &__shape-2 {
    left: -12%;
    top: 85%;
    background-color: #edfdef;
    transform: rotate(188deg);
  }

  &__shape-3 {
    right: 5%;
    top: 35.7%;
    background-color: #dbeaff;
    transform: rotate(153deg);
  }

  &__shape-4 {
    right: 5%;
    top: 46.5%;
    background-color: #edfdef;
    transform: rotate(175deg);
  }
}
</style>
