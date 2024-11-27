<template>
  <section class="packages" id="packages">
    <h2 class="packages__heading section-title">Packages</h2>
    <div
      v-for="pkg in packages"
      :key="pkg.id"
      :class="`package-card ${pkg.positionClass}`"
      :id="pkg.id"
    >
      <div :class="`package-card__left-bg ${pkg.bgClass}`">&nbsp;</div>
      <div class="package-card__content">
        <h4 class="package-card__title">{{ pkg.title }}</h4>
        <p class="package-card__text">{{ pkg.text }}</p>
        <div class="package-card__pricing">
          <p
            v-for="price in pkg.pricing"
            :key="price.duration"
            class="package-card__pricing-item"
          >
            {{ price.duration }} min - {{ price.price }}
          </p>
        </div>
        <a
          href="https://bookings.receptionerapp.com/rukthaimassage"
          class="btn-primary btn-primary--white package-card__button"
        >
          Book Online
        </a>
      </div>
      <img
        :src="pkg.image"
        :alt="`Package ${pkg.id}`"
        class="package-card__photo"
      />
    </div>
  </section>
</template>

<script setup>
import { readonly, onMounted } from "vue";

const packages = readonly([
  {
    id: "package-1",
    positionClass: "package-card__left",
    bgClass: "package-card__left-bg--1",
    title: "Thai Herbal Compress",
    text: "A special combination of Thai herbs that soften your skin. Hot herbal compresses are well known for treating chronic nuisances such as muscle, joint, fascia, and sinew pain.",
    pricing: [
      { duration: "90", price: "$155" },
      { duration: "120", price: "$195" },
    ],
    image: "/img/packages/package-1.jpg",
  },
  {
    id: "package-2",
    positionClass: "package-card__right",
    bgClass: "package-card__left-bg--2",
    title: "Hot Stone",
    text: "Stone is a unique connection with nature. The penetrating heat from the hot stone helps to relax and heal muscles.",
    pricing: [
      { duration: "90", price: "$165" },
      { duration: "120", price: "$205" },
    ],
    image: "/img/packages/package-2.jpg",
  },
  {
    id: "package-3",
    positionClass: "package-card__left",
    bgClass: "package-card__left-bg--3",
    title: "Ruk Thai Relax",
    text: "Relax and unwind with a Ruk Thai Massage followed by an aromatic facial to relieve tightness, tension, and promote relaxation.",
    pricing: [
      { duration: "90", price: "$130" },
      { duration: "120", price: "$165" },
    ],
    image: "/img/packages/package-3.jpg",
  },
  {
    id: "package-4",
    positionClass: "package-card__right",
    bgClass: "package-card__left-bg--4",
    title: "Ruk Thai De-Stress",
    text: "A combination of treatments that starts with a Ruk Thai massage (+Hot Oil) to release muscular tension.",
    pricing: [
      { duration: "90", price: "$165" },
      { duration: "120", price: "$205" },
    ],
    image: "/img/packages/package-4.jpeg",
  },
]);

onMounted(() => {
  if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              entry.target.classList.contains("package-card__left")
                ? "package-card__left--animated"
                : "package-card__right--animated"
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    packages.forEach((pkg) => {
      const element = document.getElementById(pkg.id);
      if (element) observer.observe(element);
    });
  }
});
</script>

<style lang="scss" scoped>
.packages {
  margin-bottom: var(--spacing-large);
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: repeat(2, minmax(20rem, 1fr));
  justify-content: space-around;
  align-items: stretch;

  @media only screen and (max-width: 62.5em) {
    grid-template-columns: minmax(40%, 1fr);
  }

  &__heading {
    grid-column: 1 / -1;
    font-family: Vidaloka, sans-serif;
    margin-bottom: 6rem;
  }
}
.package-card {
  display: grid;
  grid-template-columns: 1fr 2.53fr;
  justify-items: center;
  align-items: stretch;
  transition: all 5s;

  @media only screen and (max-width: 25em) {
    grid-template-columns: 1fr;
  }

  &:hover &__button {
    opacity: 1;
  }

  &:hover &__photo {
    transform: translateX(-50%) translateY(-12%) scale(1.05);
  }

  &__left {
    opacity: 0;

    &--animated {
      animation: moveFromLeft 1s ease-out;
      animation-fill-mode: forwards;
    }
  }

  &__right {
    opacity: 0;
    &--animated {
      animation: moveFromRight 1s ease-out;
      animation-fill-mode: forwards;
    }
  }

  &__left-bg {
    position: relative;
    grid-row: 1 / 7;
    grid-column: 1 / 1;

    justify-self: stretch;

    @media only screen and (max-width: 25em) {
      grid-row: 1 / 2;
      grid-column: 1 / -1;
      height: 14rem;
    }

    &--1 {
      background-color: #cff6eb;

      &::before {
        position: absolute;
        right: 2rem;
        top: 4rem;

        background-image: url("/img/icons/01.svg");
        background-size: cover;
        content: "";
        width: 10.4rem;
        height: 9.4rem;
        display: inline-block;
      }
    }

    &--2 {
      background-color: #ffeee6;

      &::before {
        position: absolute;
        right: 2rem;
        top: 4rem;

        background-image: url("/img/icons/02.svg");
        background-size: cover;
        content: "";
        width: 11.9rem;
        height: 9.4rem;
        display: inline-block;
      }
    }

    &--3 {
      background-color: #dbeaff;

      &::before {
        position: absolute;
        right: 2rem;
        top: 4rem;

        background-image: url("/img/icons/03.svg");
        background-size: cover;
        content: "";
        width: 11.8rem;
        height: 9.4rem;
        display: inline-block;
      }
    }

    &--4 {
      background-color: #f9e9f8;

      &::before {
        position: absolute;
        right: 2rem;
        top: 4rem;

        background-image: url("/img/icons/04.svg");
        background-size: cover;
        content: "";
        width: 11.9rem;
        height: 9.4rem;
        display: inline-block;
      }
    }
  }

  &__content {
    display: grid;
    padding: 5rem 8rem 3rem 8rem;

    @media only screen and (max-width: 31.25em) {
      padding: 5rem 5rem 3rem 5rem;
    }

    @media only screen and (max-width: 25em) {
      text-align: right;
      transform: translateY(30%) scale(1);
      margin-bottom: -10rem;
    }

    @media only screen and (max-width: 22em) {
      padding: 3rem;
    }
  }

  &__photo {
    width: 24rem;
    height: 24rem;
    object-fit: cover;
    border-radius: 100%;
    justify-self: left;
    align-self: end;
    transition: all 0.5s;
    transform: translateX(-50%) translateY(-10%) scale(1);

    @media only screen and (max-width: 25em) {
      transform: translateX(20%) translateY(-170%) scale(1);
    }
  }

  &__title {
    font-size: 3rem;
    font-weight: 700;
    padding-bottom: 2rem;
  }

  &__text {
    font-size: 2rem;
    font-weight: 300;
    padding-bottom: 2rem;
  }

  &__pricing {
    font-size: 2.4rem;
    font-weight: 300;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    justify-self: left;
    row-gap: 1rem;
    column-gap: 1rem;

    @media only screen and (max-width: 25em) {
      justify-self: right;
    }
  }

  &__pricing-item {
    text-align: left;
  }

  &__button {
    margin-top: 2rem;
    margin-bottom: 2rem;
    opacity: 0;
    align-self: center;
    justify-self: left;
    transition: all 1s ease-in;

    @media only screen and (hover: none) {
      opacity: 1;
    }

    @media only screen and (max-width: 25em) {
      font-size: 1.8rem !important;
      justify-self: right;
    }
  }
}
</style>
