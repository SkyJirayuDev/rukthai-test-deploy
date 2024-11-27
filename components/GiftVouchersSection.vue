<template>
  <section class="gift-vouchers">
    <div class="gift-vouchers__image-container">&nbsp;</div>
    <div class="gift-vouchers__text-container">
      <div class="gift-vouchers__inner-container">
        <img src="/img/gift-voucher-icon.svg" class="gift-vouchers__logo" />
        <h3 class="gift-vouchers__text">Gift Vouchers Available</h3>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gift-vouchers {
  margin-bottom: var(--spacing-large);
  background-color: #cff6eb;
  grid-column: main-start / main-end;
  background-size: cover;
  height: 40rem;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  align-items: center;

  @media only screen and (max-width: 62.5em) {
    grid-column: full-start / full-end;
    margin: 0 2rem 14rem 2rem;
  }

  @media only screen and (max-width: 34.5em) {
    grid-column: full-start / full-end;
    height: 25rem;
    margin: 0 5rem 14rem 5rem;
  }

  @media only screen and (max-width: 22em) {
    margin: 0 2rem 14rem 2rem;
  }

  &__image-container {
    grid-column: 1 / 7;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        to right bottom,
        rgba(253, 204, 204, 0.5),
        rgba(253, 204, 204, 0.5)
      ),
      url("/img/gift-vouchers-bg.jpeg");
    background-size: cover;
    background-position: top right;

    @media only screen and (max-width: 34.5em) {
      display: none;
    }
  }

  &__text-container {
    grid-column: 7 / 11;
    display: grid;
    align-items: stretch;
    height: 100%;

    @media only screen and (max-width: 34.5em) {
      grid-column: 1 / -1;
    }
  }

  &__inner-container {
    border: white solid 1px;
    margin: 1.4rem;

    display: grid;
    justify-items: center;
    align-items: center;
  }

  &__logo {
    align-self: end;
  }

  &__text {
    font-family: Vidaloka, sans-serif;
    font-size: 3.3rem;
    font-weight: 400;
    align-self: start;
    text-align: center;

    @media only screen and (max-width: 83em) {
      font-size: 2.5rem;
    }
  }
}
</style>
