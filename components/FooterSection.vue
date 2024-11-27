<template>
  <footer class="footer">
    <div class="footer__copyright">
      <div class="footer__designed">
        <p class="footer__built">
          Built and Designed by
          <span>
            <a href="https://brightdesignth.com" class="footer__bright"
              >Bright Design Thailand</a
            >
          </span>
        </p>
      </div>
      <div class="footer__built"></div>
    </div>
    <div class="footer__bg-image-container">
      <img
        src="/img/footer-bg.jpeg"
        alt="Footer background"
        class="footer__bg-image"
      />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  grid-column: main-start / full-end;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  &__copyright {
    align-self: end;
    padding-bottom: 2rem;
    justify-self: start;
  }

  &__designed {
    font-size: 2.5rem;
    font-weight: 300;
  }

  &__built {
    font-size: 1.5rem;
    color: black;
  }

  &__bright {
    text-decoration: none;
    color: black;
    font-weight: 500;
  }

  &__bg-image-container {
    height: 100%;
  }

  &__bg-image {
    width: 100%;
    object-fit: fill;
  }
}
</style>
