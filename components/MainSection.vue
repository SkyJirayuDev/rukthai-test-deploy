<template>
  <main class="main">
    <div class="main__content">
      <h1 class="heading main__heading">Ruk Thai Massage</h1>
      <h2 class="heading heading-medium main__text">
        Gentle pressure and stretching techniques to relax the whole body
      </h2>
      <a
        href="https://bookings.receptionerapp.com/rukthaimassage"
        class="btn-primary btn-primary--white main__button"
      >
        Book Online
      </a>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  margin-bottom: var(--spacing-small);
  background-image: linear-gradient(
      to right bottom,
      rgba($color-dark, 0.4),
      rgba($color-dark, 0.4)
    ),
    url(/img/main-background.jpg);
  background-size: cover;
  background-position: 50% 50%;
  height: 100vh;
  grid-column: full-start / full-end;
  grid-row: 1 / 3;
  z-index: 10;
  display: grid;
  align-items: center;

  &__content {
    display: grid;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: start;
    padding: 6rem 12rem 0;

    @media only screen and (max-width: 53em) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 31.25em) {
      grid-template-columns: 1fr;
      padding: 6rem;
    }
  }

  &__heading,
  &__text {
    grid-column: 1 / 3;
  }

  &__heading {
    font-size: 8.6rem;
    font-weight: 400;

    @media only screen and (max-width: 47em) {
      font-size: 7rem;
    }
    @media only screen and (max-width: 41em) {
      font-size: 6rem;
    }
    @media only screen and (max-width: 36.25em) {
      font-size: 5rem;
    }
    @media only screen and (max-width: 31.25em) {
      font-size: 4rem;
    }
  }

  &__text {
    padding-bottom: 2rem;
    font-size: 4.2rem;

    @media only screen and (max-width: 47em) {
      font-size: 3.5rem;
    }
    @media only screen and (max-width: 41em) {
      font-size: 3rem;
    }
    @media only screen and (max-width: 36.25em) {
      font-size: 2.5rem;
    }
    @media only screen and (max-width: 31.25em) {
      font-size: 2rem;
    }
  }

  &__button {
    grid-column: 1 / 3;
  }
}
</style>
