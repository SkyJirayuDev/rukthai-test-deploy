<template>
  <div class="services">
    <div class="services-header">
      <h1 class="heading services__heading">Service & Pricing</h1>
    </div>
    <div class="services__content">
      <div
        v-for="(service, index) in services"
        :key="index"
        :class="[
          'service-card',
          index % 2 === 0 ? 'service-card--odd' : 'service-card--even',
        ]"
      >
        <img
          :src="service.image"
          :alt="service.title"
          class="service-card__image"
        />
        <h3 class="service-card__title">{{ service.title }}</h3>
        <p class="service-card__text">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { readonly } from "vue";

const services = readonly([
  {
    image: "/img/services/back.jpeg",
    title: "Back, Shoulder & Scalp",
    description:
      "Therapeutic massage that uses firm pressure to help alleviate headaches, back shoulder and neck pain.",
  },
  {
    image: "/img/services/foot.jpeg",
    title: "Foot Reflexology",
    description:
      "Designed to relax and soothe tired aching feet and lower legs using the hand and wooden stick.",
  },
  {
    image: "/img/services/aroma.jpeg",
    title: "Aromatherapy (soft)",
    description:
      "The art of using aromatic essential oils with a soft pressure massage.",
  },
  {
    image: "/img/services/traditional.jpeg",
    title: "Traditional Thai Massage (no oil + hard)",
    description:
      "Thai massage is one of the world's oldest healing modalities. It's a blend of pressure-point massage, acupressure, energy work & gentle yoga stretches.",
  },
  {
    image: "/img/services/swedish.jpeg",
    title: "Swedish Massage (medium)",
    description:
      "A gentle therapeutic massage for relieving muscle tension & alleviating muscle fatigue.",
  },
  {
    image: "/img/services/sport.jpeg",
    title: "Sports Massage (hard)",
    description:
      "An invigorating deep tissue oil massage to help relieve muscle pain from sports.",
  },
  {
    image: "/img/services/ruk-thai.jpeg",
    title: "Ruk Thai Massage (hard)",
    description:
      "A combination of Traditional Thai, Swedish and Sports Massage. Starting with a pressure-point massage followed by a deep tissue oil massage to improve blood & lymph circulation.",
  },
  {
    image: "/img/services/facial.jpeg",
    title: "Aromatic Facial",
    description:
      "Aromatic facial treatment to relieve muscle tension and improve blood and lymph circulation.",
  },
]);
</script>

<style lang="scss">
:root {
  --header-height-large: 40rem;
  --header-height-medium: 30rem;
  --header-height-small: 20rem;
  --heading-position-bottom: 7.5rem;
  --heading-position-left: 8rem;
}

.services-header {
  position: relative;
  height: var(--header-height-large);
  width: 100%;
  background-image: linear-gradient(
      360deg,
      #ffffff 0.72%,
      rgba(255, 255, 255, 0) 98.28%
    ),
    linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    url("../img/services/services-header-bg.jpeg");
  background-size: cover;
  object-position: bottom;

  @media only screen and (max-width: 40em) {
    height: var(--header-height-medium);
  }

  @media only screen and (max-width: 25em) {
    height: var(--header-height-small);
  }
}

.services {
  grid-column: 1 / -1;

  &__heading {
    color: black;
    font-family: "Roboto Condensed", sans-serif;
    position: absolute;
    bottom: var(--heading-position-bottom);
    left: var(--heading-position-left);

    @media only screen and (max-width: 40em) {
      font-size: 5rem;
    }

    @media only screen and (max-width: 25em) {
      font-size: 3.5rem;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media only screen and (max-width: 75em) {
      grid-template-columns: 1fr;
    }
  }
}
.service-card {
  margin: 5rem 4rem;
  display: grid;
  grid-template-columns: minmax(20rem, 30%) repeat(3, 1fr);
  align-items: center;
  justify-items: center;

  @include respond(desktop) {
    grid-template-columns: minmax(30rem, 30%) repeat(3, 1fr);
  }

  @media only screen and (max-width: 37.5em) {
    margin: 5rem 2rem;
    grid-template-columns: minmax(15rem, 30%) repeat(3, 1fr);
  }

  @media only screen and (max-width: 34.25em) {
    grid-template-columns: repeat(6, 1fr);
  }

  &:hover &__image {
    background-color: rgba(white, 0.92);
    border-radius: 2rem;
    transform: scale(1.03);
    box-shadow: 3px 4px 4rem rgba(0, 0, 0, 0.25);
  }

  &--odd {
    img {
      grid-row: 1 / span 3;

      @media only screen and (max-width: 34.25em) {
        grid-row: 1 / 1;
        grid-column: 3 / -3;
      }

      @media only screen and (max-width: 25em) {
        grid-column: 2 / -2;
      }
    }

    h3 {
      grid-row: 1 / 2;
      grid-column: 2 / 5;

      @media only screen and (max-width: 34.25em) {
        grid-row: 2 / 2;
        grid-column: 1 / -1;
      }
    }

    p {
      grid-row: 2 / 4;
      grid-column: 2 / 5;
      align-self: start;

      @media only screen and (max-width: 34.25em) {
        grid-row: 3 / 3;
        grid-column: 1 / -1;
      }
    }
  }

  &--even {
    img {
      grid-row: 1 / span 3;

      @media only screen and (max-width: 34.25em) {
        grid-row: 1 / 1;
        grid-column: 3 / -3;
      }

      @media only screen and (max-width: 25em) {
        grid-column: 2 / -2;
      }
    }

    h3 {
      grid-row: 1 / 2;
      grid-column: 2 / 5;

      @include respond(tab-land) {
        grid-row: 1 / 2;
        grid-column: 1 / 4;
      }

      @media only screen and (max-width: 34.25em) {
        grid-row: 2 / 2;
        grid-column: 1 / -1;
      }
    }

    p {
      grid-row: 2 / 4;
      grid-column: 2 / 5;

      @include respond(tab-land) {
        grid-row: 2 / 4;
        grid-column: 1 / 4;
        align-self: start;
      }

      @media only screen and (max-width: 34.25em) {
        grid-row: 3 / 3;
        grid-column: 1 / -1;
      }
    }
  }

  &__title {
    color: black;
    font-size: 2.2rem;
    font-weight: 700;
    padding: 1rem 5rem;
    text-align: center;
  }

  &__text {
    color: black;
    font-size: 1.8rem;
    font-weight: 400;
    padding: 2rem 5rem;
    text-align: center;
  }

  &__image {
    width: 100%;
    min-width: 20rem;
    object-fit: fill;
    border-radius: 2rem;
    transition: all 0.4s;

    @media only screen and (max-width: 37.5em) {
      min-width: 10rem;
    }
  }
}
</style>
