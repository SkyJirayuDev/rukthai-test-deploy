<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <a href="/" class="navigation__link--black navigation__link"
          >Ruk Thai Massage</a
        >
      </li>
      <li class="navigation__item">
        <a
          href="/services-and-pricing"
          class="navigation__link navigation__link--black"
          >Services & Pricing</a
        >
      </li>
      <li class="navigation__item">
        <a href="#contact" class="navigation__link navigation__link--black"
          >Contact</a
        >
      </li>
      <li class="navigation__item">
        <a
          href="https://bookings.receptionerapp.com/rukthaimassage"
          class="navigation__link navigation__link--black"
          >Book Online</a
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  background-color: transparent;
  height: 100%;
  grid-column: full-start / full-end;
  grid-row: 1 / 2;
  z-index: 20;

  @include respond(tab-port) {
    display: none;
  }

  &__list {
    height: 100%;
    display: grid;
    grid-template-columns: minmax(max-content, 1fr) repeat(3, max-content);
    align-items: end;
    justify-content: center;
    list-style: none;
    padding: 0 12rem;
  }

  &__item {
    font-size: 3rem;
    padding: 0 1.5rem;
  }

  &__link {
    &--black {
      &:link,
      &:visited {
        color: black !important;
        background-image: linear-gradient(
          120deg,
          transparent 0%,
          transparent 50%,
          $color-primary 50%
        ) !important;
      }

      &:hover,
      &:active {
        color: #506d49 !important;
      }
    }

    &:link,
    &:visited {
      text-decoration: none;
      color: white;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        white 50%
      );
      background-size: 225%;
      transition: all 0.6s;
    }

    &:hover,
    &:active {
      background-position: 180%;
      color: $color-primary;
      transform: translateX(1rem);
    }
  }
}
</style>
