<template>
  <section class="testimonials">
    <h2 class="testimonials__heading section-title">What Our Clients Say</h2>
    <div class="testimonials__content ruk-carousel">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonial"
      >
        <p class="testimonial__quote">
          “ <br />{{ testimonial.text }}<br />
          ”
        </p>
        <p class="testimonial__author">- {{ testimonial.author }} -</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

const testimonials = [
  {
    text: "The rooms are clean and calming. Dim lighting and nice smell. Any masseuse you get will provide a professional massage. The deep tissue option is really effective if you have sore or tight muscles. Highly recommended.",
    author: "Catherine Hellyer",
  },
  {
    text: "Excellent service every time, lovely friendly staff and usually able to accommodate same day requests if needed.",
    author: "Amanda Jordan",
  },
  {
    text: "I've visited Ruk Thai for many years because the massages are always amazing! It is reasonably priced and I always seem to be able to get an appointment when needed. I walk out after my 1-hour massage feeling a lot more relaxed, taller, and lighter.",
    author: "Nikki S",
  },
];

onMounted(() => {
  if (window.$) {
    $(".ruk-carousel").slick({
      dots: true,
      autoplay: true,
      arrows: false,
    });
  }
});
</script>

<style lang="scss" scoped>
.testimonials {
  margin-bottom: var(--spacing-large);
  grid-column: main-start / main-end;
  display: grid;
  grid-template-columns: 75vw;
  grid-row-gap: 3rem;

  @media only screen and (max-width: 25em) {
    grid-column: 1 / -1;
    justify-self: center;
  }

  &__heading {
    font-family: Vidaloka, sans-serif;
    font-size: 3.5rem;
    padding-bottom: 5rem;
    border-bottom: 1px solid #a9c6a2;
    justify-self: center;

    @media only screen and (max-width: 25em) {
      font-size: 2.4rem;
    }
  }

  &__content {
    font-size: 2.8rem;
    text-align: center;
    font-weight: 300;
  }
}
</style>
