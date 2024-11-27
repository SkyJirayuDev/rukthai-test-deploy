<template>
  <address class="contact" id="contact">
    <h2 class="contact__heading section-title">Contact us</h2>

    <div class="contact__main-info">
      <img src="/img/icons/phone.svg" class="contact__icon" />
      <p class="contact__text">Phone : 09 529 5551</p>
      <img src="/img/icons/mobile.svg" class="contact__icon" />
      <p class="contact__text">Mobile : 021 0681514</p>
      <img src="/img/icons/email.svg" class="contact__icon" />
      <p class="contact__text">rukthaimassage@hotmail.com</p>

      <div class="contact__text contact__open-hours">
        <p>Open Hours :</p>
        <p>7 days 9:30 am - 7.00 pm</p>
      </div>
    </div>

    <div class="contact__location">
      <img src="/img/icons/location.svg" class="contact__icon" />
      <p class="contact__text">369A Remuera rd, Remuera, Auckland, 1050</p>
      <div class="contact__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12765.581291644741!2d174.797857!3d-36.88089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ba7dde2c2c6c1a6!2sRuk%20Thai%20Massage!5e0!3m2!1sen!2snz!4v1608564712025!5m2!1sen!2snz"
          width="100%"
          height="100%"
          allowfullscreen
          frameborder="0"
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>

    <div class="contact__text contact__open-hours contact__open-hours--small">
      <p>Open Hours :</p>
      <p>7 days 9:30 am - 7.00 pm</p>
    </div>
  </address>
</template>

<style lang="scss" scoped>
.contact {
  margin-bottom: var(--spacing-small);
  grid-column: main-start / main-end;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 68em) {
    grid-column: full-start / full-end;
    padding: 0 8rem;
    row-gap: 2rem;
  }

  @media only screen and (max-width: 56.25em) {
    grid-column: full-start / full-end;
    grid-template-columns: 1fr;
  }

  &__heading {
    font-family: Vidaloka, sans-serif;
    font-size: 3.5rem;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 6rem;
    grid-column: 1 / -1;
  }

  &__main-info {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    align-items: center;
    border-right: 1px solid #dbd8d8;
    row-gap: 4rem;

    @media only screen and (max-width: 56.25em) {
      grid-row: 2 / 3;
      border-right: none;
    }
  }

  &__location {
    padding-left: 4rem;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    align-items: center;
    row-gap: 2rem;

    @media only screen and (max-width: 56.25em) {
      padding-left: 0;
      grid-row: 3 / 4;
    }
  }

  &__text {
    font-size: 2rem;
    font-weight: 300;
    font-style: normal;
    text-decoration: none;
    grid-column: 3 / 11;

    @media only screen and (max-width: 25em) {
      font-size: 1.8rem;
    }
  }

  &__open-hours {
    grid-column: 1 / 8;
    justify-self: center;
    display: flex;

    @media only screen and (max-width: 56.25em) {
      display: none;
      grid-row: 4 / 5;
    }

    &--small {
      display: none;

      @media only screen and (max-width: 56.25em) {
        display: flex;
        grid-row: 4 / 5;
      }

      @media only screen and (max-width: 25em) {
        flex-direction: column;
      }
    }
  }

  &__icon {
    grid-column: 1 / 2;
    justify-self: center;
  }

  &__map {
    width: 80%;
    height: 100%;
    border: 0;
    border-radius: 3rem;
    overflow: hidden;
    grid-column: 1 / -1;
    justify-self: center;
  }
}
</style>
