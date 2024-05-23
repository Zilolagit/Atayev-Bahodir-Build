<template>
  <!-- Header Start -->
  <header class="header">
    <div class="container">
      <ul class="header__menu d-none d-md-flex">
        <li class="header__item">
          <a href="#">{{ $t("header.menu1") }}</a>
        </li>
        <li class="header__item">
          <a href="#">{{ $t("header.menu2") }}</a>
        </li>
        <li class="header__item">
          <a href="#">{{ $t("header.menu3") }}</a>
        </li>
        <li class="header__item">
          <a href="/" class="header__logo">
            <img src="/logo.png" alt="logo" />
          </a>
        </li>
        <li class="header__item">
          <a href="#">{{ $t("header.menu4") }}</a>
        </li>
        <li class="header__item">
          <a href="#">{{ $t("header.menu5") }}</a>
        </li>
        <li class="header__item">
          <a href="#">{{ $t("header.menu6") }}</a>
        </li>
        <li class="header__item header__dropdown">
          <a href="#" class="header__main">{{ $i18n.locale }}</a>
          <ul class="header__dropdown-lang">
            <li @click="changeLanguage('uz')" class="header__switch"><a href="#">UZ</a></li>
            <li @click="changeLanguage('en')" class="header__switch"><a href="#">EN</a></li>
            <li @click="changeLanguage('ru')" class="header__switch"><a href="#">RU</a></li>
          </ul>
        </li>
      </ul>
      <div class="row d-md-none">
        <div class="col-3 d-flex align-items-center">
          <div class="btn header__toggle" data-bs-toggle="offcanvas" data-bs-target="#headerMenu"
            aria-controls="offcanvasExample">
            <i class="fa-solid fa-bars"></i>
          </div>

          <div class="offcanvas offcanvas-start header__offcanvas" tabindex="-1" id="headerMenu"
            aria-labelledby="headerMenu">
            <div class="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="header__collect">
                <li class="header__nav">
                  <a href="#">{{ $t("header.menu1") }}</a>
                </li>
                <li class="header__nav">
                  <a href="#">{{ $t("header.menu2") }}</a>
                </li>
                <li class="header__nav">
                  <a href="#">{{ $t("header.menu3") }}</a>
                </li>
                <li class="header__nav">
                  <a href="#">{{ $t("header.menu4") }}</a>
                </li>
                <li class="header__nav">
                  <a href="#">{{ $t("header.menu5") }}</a>
                </li>
                <li class="header__nav">
                  <a href="#">{{ $t("header.menu6") }}</a>
                </li>
                <li class="header__nav">
                  <ul class="header__change">
                    <li @click="changeLanguage('uz')" class="header__switch"><a href="#">UZ</a></li>
                    <li @click="changeLanguage('en')" class="header__switch"><a href="#">EN</a></li>
                    <li @click="changeLanguage('ru')" class="header__switch"><a href="#">RU</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-6">
          <a href="/" class="header__mobile d-flex justify-content-center align-items-center">
            <img src="/logo.png" alt="logo">
          </a>
        </div>
        <div class="col-3 d-flex justify-content-end align-items-center">
          <div class="header__call">
            <i class="fa-solid fa-phone"></i>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->

  <!-- Hero Start -->
  <section class="hero">
    <div class="container">
      <h1 class="hero__title">
        {{ $t('hero.company') }}
      </h1>
      <p class="hero__desc">
        {{ $t('hero.text') }}
      </p>
      <div class="hero__buttons d-flex align-items-center">
        <!-- <a class="button custom-btn btn-3 request-loader" href="#projects">
        </a> -->
        <a class="button" href="#projects">
          <span class="label">{{ $t('hero.button1') }}</span>
          <span class="icon">
            <span></span>
          </span>
          <span class="icon2">
          </span>
        </a>
        <a class="button" href="tel: +998 789 6363">
          <span class="label">{{ $t('hero.button2') }}</span>
          <span class="icon">
            <span></span>
          </span>
          <span class="icon2">
          </span>
        </a>
      </div>
    </div>
  </section>
  <!-- Hero End -->

  <!-- Service Start -->
  <section class="service">
    <div class="container">
      <div class="service__headline">
        <h2 data-aos="fade-up">
          {{ $t('service.main') }}
        </h2>
      </div>
      <div class="row">
        <div class="col-md-8 mb-4 mb-md-0">
          <div data-aos="fade-up" class="service__box service__box-1"
            style="background-image: url(/s1.png); transition: all .3s ease; ">
            <div class="service__title">
              <h2>{{ $t('service.service1') }}</h2>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div data-aos="fade-up" class="service__box service__box-2"
            style="background-image: url(/s2.png); transition: all .3s ease;">
            <div class="service__title">
              <h2>{{ $t('service.service2') }}</h2>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div data-aos="fade-up" class="service__box service__box-3"
            style="background-image: url(/s3.png); transition: all .3s ease;">
            <div class="service__title">
              <h2>{{ $t('service.service3') }}</h2>
            </div>
          </div>
        </div>
        <div class="col-md-8 mt-4">
          <div data-aos="fade-up" class="service__box service__box-4"
            style="background-image: url(/s4.png); transition: all .3s ease;">
            <div class="service__title">
              <h2>{{ $t('service.service4') }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Service End -->

  <!-- Company Start -->
  <section class="company">
    <div class="container">
      <div class="company__title">
        <h3>{{ $t('company.text') }}</h3>
      </div>
      <div class="company__flex">
        <div class="company__box">
          <h2 ref="counterEmployee">120+</h2>
          <span>{{ $t('company.employee') }}</span>
        </div>
        <div class="company__box">
          <h2 ref="counterObjects">40+</h2>
          <span>{{ $t('company.objects') }}</span>
        </div>
        <div class="company__box">
          <h2 ref="counterEquipment">340+</h2>
          <span>{{ $t('company.equipment') }}</span>
        </div>
        <div class="company__box">
          <h2 ref="counterYear">2+</h2>
          <span>{{ $t('company.year') }}</span>
        </div>
      </div>
    </div>
  </section>
  <!-- Company End -->

  <!-- Dream Start -->
  <section class="dream">
    <div class="container-fluid">
      <div class="dream__title text-center">
        <h3>{{ $t('dream') }}</h3>
      </div>
      <div class="row">
        <div data-aos="zoom-in" class="col-6 col-lg-4">
          <img src="/bg1.jpg" alt="bg">
        </div>
        <div data-aos="zoom-in" class="col-6 col-lg-4">
          <img src="/bg2.jpg" alt="bg">
        </div>
        <div data-aos="zoom-in" class="col-6 col-lg-4">
          <img src="/bg3.jpg" alt="bg">
        </div>
        <div data-aos="zoom-in" class="col-6 col-lg-4">
          <img src="/bg4.jpg" alt="bg">
        </div>
        <div data-aos="zoom-in" class="col-6 col-lg-4">
          <img src="/bg5.jpg" alt="bg">
        </div>
        <div data-aos="zoom-in" class="col-6 col-lg-4">
          <img src="/bg6.jpg" alt="bg">
        </div>
      </div>
    </div>
  </section>
  <!-- Dream End -->

  <!-- Projects Start -->
  <section class="project">
    <div class="container">
      <div class="project__title">
        <h3>{{ $t('project.text') }}</h3>
      </div>
      <div class="row">
        <div data-aos="fade-right" class="col-md-6 mb-4">
          <div class="project__card"
            style="background-image: linear-gradient(rgba(0, 0, 0, 0.3) 60%, rgb(0, 0, 0)), url(/p1.webp);">
            <div class="project__box">
              <h3>{{ $t('project.card1.text') }}</h3>
              <p>{{ $t('project.card1.desc') }}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" class="col-md-6 mb-4">
          <div class="project__card"
            style="background-image: linear-gradient(rgba(0, 0, 0, 0.3) 60%, rgb(0, 0, 0)), url(/p2.webp);">
            <div class="project__box">
              <h3>{{ $t('project.card2.text') }}</h3>
              <p>{{ $t('project.card2.desc') }}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" class="col-md-6 mb-4">
          <div class="project__card"
            style="background-image: linear-gradient(rgba(0, 0, 0, 0.3) 60%, rgb(0, 0, 0)), url(/p3.webp);">
            <div class="project__box">
              <h3>{{ $t('project.card3.text') }}</h3>
              <p>{{ $t('project.card3.desc') }}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" class="col-md-6 mb-4">
          <div class="project__card"
            style="background-image: linear-gradient(rgba(0, 0, 0, 0.3) 60%, rgb(0, 0, 0)), url(/p4.webp);">
            <div class="project__box">
              <h3>{{ $t('project.card4.text') }}</h3>
              <p>{{ $t('project.card4.desc') }}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" class="col-md-6 mb-4 mb-md-0">
          <div class="project__card"
            style="background-image: linear-gradient(rgba(0, 0, 0, 0.3) 60%, rgb(0, 0, 0)), url(/p5.webp);">
            <div class="project__box">
              <h3>{{ $t('project.card5.text') }}</h3>
              <p>{{ $t('project.card5.desc') }}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" class="col-md-6 mb-4 mb-md-0">
          <div class="project__card"
            style="background-image: linear-gradient(rgba(0, 0, 0, 0.3) 60%, rgb(0, 0, 0)), url(/p6.webp);">
            <div class="project__box">
              <h3>{{ $t('project.card6.text') }}</h3>
              <p>{{ $t('project.card6.desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Projects End -->

  <!-- News Start  -->
  <section class="news">
    <div class="container">
      <div class="news__title">
        <h2>{{ $t('news.text') }}</h2>
      </div>
      <div class="row">
        <div data-aos="zoom-in" class="col-lg-6 mb-4">
          <div class="news__box">
            <div class="row">
              <div class="col-md-6 news__img">
                <img src="/n1.jpg" alt="n1">
              </div>
              <div class="col-md-6">
                <div class="news__card">
                  <h4>{{ $t('news.card1.text') }}</h4>
                  <p>{{ $t('news.card1.desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" class="col-lg-6 mb-4">
          <div class="news__box">
            <div class="row">
              <div class="col-md-6 news__img">
                <img src="/n2.jpg" alt="n1">
              </div>
              <div class="col-md-6">
                <div class="news__card">
                  <h4>{{ $t('news.card2.text') }}</h4>
                  <p>{{ $t('news.card2.desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" class="col-lg-6 mb-4 mb-lg-0">
          <div class="news__box">
            <div class="row">
              <div class="col-md-6 news__img">
                <img src="/n3.jpg" alt="n1">
              </div>
              <div class="col-md-6">
                <div class="news__card">
                  <h4>{{ $t('news.card3.text') }}</h4>
                  <p>{{ $t('news.card3.desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" class="col-lg-6">
          <div class="news__box">
            <div class="row">
              <div class="col-md-6 news__img">
                <img src="/n4.jpg" alt="n1">
              </div>
              <div class="col-md-6">
                <div class="news__card">
                  <h4>{{ $t('news.card4.text') }}</h4>
                  <p>{{ $t('news.card4.desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- News End  -->

  <!-- Exchange Start -->
  <section class="exchange">
    <div class="container-fluid">
      <div class="exchange__title text-center">
        <h3>{{ $t('exchange') }}</h3>
      </div>
      <div class="row">
        <div data-aos="zoom-in" class="col-6 col-md-3">
          <img src="/e1.jpg" alt="bg">
        </div>
        <div data-aos="zoom-in" class="col-6 col-md-3">
          <img src="/e2.jpg" alt="bg">
        </div>
        <div data-aos="zoom-in" class="col-6 col-md-3">
          <img src="/e3.jpg" alt="bg">
        </div>
        <div data-aos="zoom-in" class="col-6 col-md-3">
          <img src="/e4.jpg" alt="bg">
        </div>
        <div data-aos="zoom-in" class="col-6 col-md-3">
          <img src="/e5.jpg" alt="bg">
        </div>
        <div data-aos="zoom-in" class="col-6 col-md-3">
          <img src="/e6.jpg" alt="bg">
        </div>
        <div data-aos="zoom-in" class="col-6 col-md-3">
          <img src="/e7.jpg" alt="bg">
        </div>
        <div data-aos="zoom-in" class="col-6 col-md-3">
          <img src="/e8.jpg" alt="bg">
        </div>
      </div>
    </div>
  </section>
  <!-- Exchange End -->

  <!-- Building Start -->
  <section class="building">
    <div class="container">
      <div class="building__text">
        <h2>{{ $t('hero.company') }}</h2>
      </div>
      <div class="building__desc">
        <p>{{ $t('building.text') }}</p>
      </div>
      <div class="building__btn">
        <a class="button" href="#projects">
          <span class="label">{{ $t('building.btn') }}</span>
          <span class="icon">
            <span></span>
          </span>
          <span class="icon2">
          </span>
        </a>
      </div>
    </div>
  </section>
  <!-- Building End -->

  <!-- Contact Start -->
  <section class="contact">
    <div class="container">
      <div class="contact__box">
        <div class="contact__text">
          <h2>{{ $t('contact.text') }}</h2>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <input type="text" id="name" autocomplete="name" v-model="fullName" class="form-control form-control-lg"
                  :placeholder="`${$t('contact.name')}`">
              </div>
              <div class="mb-3">
                <input type="tel" id="phone" autocomplete="tel" v-model="phone_number" class="form-control form-control-lg"
                  :placeholder="`${$t('contact.phone')}`">
              </div>
              <div class="mb-3 mt-4">
                <textarea id="message" class="form-control form-control-lg" v-model="message"
                  :placeholder="`${$t('contact.message')}`" rows="6"></textarea>
              </div>
              <div class="contact__btn">
                <button type="submit">{{ $t('contact.btn') }}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Contact End -->

  <div class="popup" v-if="isOpen">
    <div class="popup__box text-center">
      <i v-if="isError == false" class="fa-regular fa-circle-check"></i>
      <i v-else class="fa-regular fa-circle-xmark" style="color: red;"></i>
      <h4 v-if="isError == false">
        {{ $t('popup.text') }}
      </h4>
      <h4 v-else>
        {{ $t('popup.error') }}
      </h4>
      <button @click="closePop">{{ $t('popup.btn') }}</button>
    </div>
  </div>

  <!-- Footer Start -->
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <div class="footer__logo">
            <a href="/"><img src="/logof.png" alt=""></a>
          </div>
          <p>{{ $t('footer.desc') }}</p>
          <ul class="footer__social">
            <li><a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a></li>
            <li><a href="#">
                <i class="fa-brands fa-facebook"></i>
              </a></li>
          </ul>
        </div>
        <div class="col-lg-5  mb-4  mb-lg-0">
          <h4>{{ $t('footer.company') }}</h4>
          <ul class="footer__menu">
            <li><a href="#">{{ $t('footer.menu1.text1') }}</a></li>
            <li><a href="#">{{ $t('footer.menu1.text2') }}</a></li>
            <li><a href="#">{{ $t('footer.menu1.text3') }}</a></li>
            <li><a href="#">{{ $t('footer.menu1.text4') }}</a></li>
          </ul>
        </div>
        <div class="col-lg-2  mb-4 mb-lg-0 text-lg-end">
          <h4 style="width: 100%; text-align: left;">{{ $t('footer.contact') }}</h4>
          <ul class="footer__menu">
            <li><a href="#">+998974839999</a></li>
            <li><a href="#">+998997126666</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer End -->


</template>

<script>

import Aos from 'aos';

export default {
  methods: {
    changeLanguage(lang) {
      localStorage.setItem("lang", lang)
      this.$i18n.locale = lang;
    }
  },
  mounted() {
    Aos.init()
  }
}
</script>

<script setup>
import { ref, onMounted } from 'vue';
import { CountUp } from 'countup.js';
import axios from 'axios';

const counterEmployee = ref(null);
const counterObjects = ref(null);
const counterEquipment = ref(null);
const counterYear = ref(null);
const token = ref("7069003625:AAGAQJns8zC96OqRSQIwC8Ewj1efbWCnIW0")
const chat_id = ref("237282713")
const fullName = ref("")
const phone_number = ref("")
const message = ref("")

const isOpen = ref(false)
const isError = ref(false);

const initCounters = () => {
  const options = {
    duration: 3, // Duration in seconds
    separator: '', // Separator for large numbers
    suffix: '+' // Suffix for the numbers
  };

  const employeeCountUp = new CountUp(counterEmployee.value, 120, options);
  const objectsCountUp = new CountUp(counterObjects.value, 40, options);
  const equipmentCountUp = new CountUp(counterEquipment.value, 340, options);
  const yearCountUp = new CountUp(counterYear.value, 2, options);

  if (!employeeCountUp.error) {
    employeeCountUp.start();
  } else {
    console.error(employeeCountUp.error);
  }

  if (!objectsCountUp.error) {
    objectsCountUp.start();
  } else {
    console.error(objectsCountUp.error);
  }

  if (!equipmentCountUp.error) {
    equipmentCountUp.start();
  } else {
    console.error(equipmentCountUp.error);
  }

  if (!yearCountUp.error) {
    yearCountUp.start();
  } else {
    console.error(yearCountUp.error);
  }
};

onMounted(() => {
  initCounters();
});


async function submitForm() {
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${token.value}/sendMessage`,
      {
        chat_id: chat_id.value,
        text: `Name: ${fullName.value}\nPhone Number: ${phone_number.value}\nMessage: ${message.value}`,
      }
    );
    isOpen.value = true
    fullName.value = "";
    phone_number.value = "";
    message.value = "";
  } catch (error) {
    isOpen.value = true
    isError.value = true
  }
}
function closePop() {
  isOpen.value = false
  isError.value = false
}

</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: "Poppins", sans-serif;

}

a {
  text-decoration: none;
}

ul {
  padding: 0;
  margin: 0;

  li {
    list-style-type: none;
  }
}

img {
  max-width: 100%;
}

// Button Styles


.button {
  margin: 20px;
  float: left;
  position: relative;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;

  .label {
    padding: 10px;
    display: inline-block;
  }

  &:hover {
    .icon {

      &:before,
      &:after {
        width: 100%;
      }

      span {

        &:before,
        &:after {
          height: 100%;
        }
      }
    }
  }

  .label {
    padding: 10px 22px;
  }

  .icon2 {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: skew(-40deg, 0deg) scaleX(0.2) scaleY(0.5);
    transition: all 0.2s;
    transition-delay: 0.2s;
  }

  .icon {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: skew(-40deg, 0deg);
    transition: all 0.2s;

    &:before,
    &:after {
      content: '';
      height: 1px;
      width: 30px;
      position: absolute;
      display: block;
      background: #fff;
      transition: all 0.2s;
      transition-delay: 0.2s;
    }

    &:before {
      left: 0;
      top: 0;
    }

    &:after {
      right: 0;
      bottom: 0;
    }

    span {

      &:before,
      &:after {
        content: '';
        background: #fff;
        position: absolute;
        display: block;
        width: 2px;
        height: 30px;
        transition: all 0.2s;
        transition-delay: 0.2s;
      }

      &:before {
        left: 0;
        top: 0;
      }

      &:after {
        right: 0;
        bottom: 0;
      }
    }
  }

}


// Popup Styles
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99999;

  &__box {
    max-width: 500px;
    border-radius: 20px;
    padding: 25px;
    background-color: #fff;
    margin: 0 auto;
  }

  i {
    color: green;
    font-size: 45px;
    margin-bottom: 30px;
  }

  h4 {
    max-width: 400px;
    margin: 0 auto;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  button {
    background: transparent;
    border: none;
    border: 1px solid #000;
    padding: 10px 45px;
    border-radius: 50px;
    transition: all .3s ease;

    &:hover {
      color: #fff;
      background-color: #000;
    }
  }
}

// Header Styles

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: transparent;
  position: absolute;
  width: 100%;
  z-index: 999;
  width: 100%;
  top: 0;
  left: 0px;

  &__toggle {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #485872;
    color: #fff;
  }

  &__offcanvas {
    background-color: #fce8bd;

    a {
      font-size: 15px;
      color: #000;
      margin-bottom: 6px;
      display: inline-block;
    }
  }

  &__call {
    width: 40px;
    height: 40px;
    background-color: #485872;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  &__mobile {
    img {
      width: 100px;
    }
  }

  &__change {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-top: 20px;

    a {
      font-weight: 600;
      font-size: 18px;
    }
  }

  &__collect {
    padding-left: 20px;
    padding-right: 20px;
  }

  &__menu {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__item {
    position: relative;

    &:hover {
      &::before {
        transform: scale(1);
      }
    }

    &::before {
      transform: scale(0);
      content: "";
      position: absolute;
      bottom: -5px;
      transition: all .3s ease;
      width: 100%;
      height: 2px;
      background-color: #fff;
      transform-origin: center;
    }

    a {
      color: #fff;
    }
  }

  &__logo {
    img {
      width: 120px;
    }
  }

  &__dropdown {
    &::before {
      display: none;
      position: relative;
    }

    &:hover .header__dropdown-lang {
      transform: translateY(15px) translateX(-16px);
      opacity: 1;
    }

    &-lang {
      opacity: 0;
      transition: all .4s ease;
      transform: translateY(25px) translateX(-16px);
      position: absolute;
      border-radius: 10px;
      background-color: #000;
      padding: 10px 20px;
    }
  }

  &__switch {
    padding: 5px 0;
  }

  &__main {
    text-transform: uppercase;
  }

}

// Hero Styles

.hero {
  padding-top: 220px;
  padding-bottom: 90px;
  background-image: url(/hero_bg.jpeg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;

  * {
    color: #fff;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .3);
  }

  &__title {
    color: #fff;
    font-style: normal;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: .045em;
    font-size: 4.35rem;
    font-weight: 700;
    line-height: 1.3;
    max-width: 800px;
    margin-bottom: 20px;
    position: relative;
  }

  &__buttons {
    flex-wrap: wrap;
  }

  &__desc {
    font-size: 20px;
    margin-bottom: 40px;
    position: relative;
  }
}

// Service Styles

.service {
  background-color: #fce8bd;
  padding-top: 80px;
  padding-bottom: 70px;
  z-index: 99;
  position: relative;

  &__headline {
    text-align: center;
    margin-bottom: 50px;

    h2 {
      font-weight: 400;
    }
  }

  &__box {
    background-color: #2C3442;
    border-radius: 15px;
    padding: 25px;
    min-height: 200px;
    display: flex;
    align-items: end;
    background-position: right bottom;
    background-repeat: no-repeat;
    cursor: pointer;
    overflow: hidden;

    h2 {
      font-size: 20px;
      color: #fff;
      max-width: 400px;
      line-height: 1.6;
    }

    &-1,
    &-4 {
      transition: all .3s ease;
      background-size: 35%;
    }

    &-3,
    &-2 {
      transition: all .3s ease;
      background-size: 60%;
    }

    &-1:hover {
      background-size: 42%;
    }

    &-2:hover {
      background-size: 70%;
    }

    &-3:hover {
      background-size: 80%;
    }

    &-4:hover {
      background-size: 42%;
    }
  }
}

// Company Styles

.company {
  margin-top: -25px;
  padding-top: 120px;
  padding-bottom: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(/company.png);

  &__title {
    margin-bottom: 80px;

    h3 {
      color: #fff;
    }
  }

  &__flex {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 40px;
  }

  &__box {
    color: #fff;

    h2 {
      font-weight: 600;
      font-size: 50px;
    }

    span {
      font-size: 18px;
    }
  }
}

// Dream Styles

.dream {
  padding-top: 40px;
  padding-left: 0px;
  padding-right: 0px;

  &__title {
    margin-bottom: 40px;
  }

  .col-6 {
    height: 350px;
    cursor: pointer;
    padding: 0 !important;
    transition: all .3s ease;
    overflow: hidden;

    &:hover {
      background-size: 140%;

      img {
        transform: scale(1.2);
      }
    }

    img {
      width: 100%;
      object-fit: cover;
      transform: scale(1);
      height: 100%;
      transition: all .4s ease;
    }
  }
}

// Dream Styles

.exchange {
  padding-top: 40px;
  padding-left: 0px;
  padding-right: 0px;

  &__title {
    margin-bottom: 40px;
  }

  .col-6 {
    height: 400px;
    cursor: pointer;
    padding: 0 !important;
    transition: all .3s ease;
    overflow: hidden;

    &:hover {
      background-size: 140%;

      img {
        transform: scale(1.2);
      }
    }

    img {
      width: 100%;
      object-fit: cover;
      transform: scale(1);
      height: 100%;
      transition: all .4s ease;
    }
  }
}

// Project Styles

.project {
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 70px;

  &__title {
    margin-bottom: 40px;
  }

  &__card {
    height: 350px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    overflow: hidden;
    cursor: pointer;

    h3,
    p {
      color: #fff;
    }

    h3 {
      margin-bottom: 15px;
    }

    &:hover {
      .project__box {
        transform: translateY(0%);
      }

    }
  }

  &__box {
    transform: translateY(90%);
    transition: all .4s ease;
    min-height: 100%;
  }
}

// News Style

.news {
  padding-top: 50px;
  padding-bottom: 60px;
  background-color: #F7F7F7;

  &__title {
    margin-bottom: 40px;
  }

  &__img {
    overflow: hidden;
    padding: 0;
  }

  &__box {
    background-color: #fbfbfb;
    box-shadow: 0 3.21616px 33.7697px rgba(0, 0, 0, .05);
    border-radius: 24px;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: all .3s ease;
    }

    &:hover {
      img {
        transform: scale(1.3);
      }
    }
  }

  &__card {
    min-height: 310px;
    padding: 20px 20px 0px 0px;
    cursor: pointer;

    h4 {
      font-size: 18px;
      line-height: 1.4;
      margin-bottom: 15px;
    }

    p {
      font-size: 12px;
    }
  }
}

// Building Style
.building {
  margin-top: 40px;
  padding-top: 160px;
  padding-bottom: 180px;
  background-image: url(/b1.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &__text {
    max-width: 400px;
    margin-bottom: 20px;

    h2 {
      font-weight: 500;
      font-size: 45px;
      color: #fff;
    }
  }

  &__desc {
    max-width: 500px;
    margin-bottom: 80px;

    p {
      color: #fff;
    }
  }
}

// Contact Style

.contact {
  padding-top: 80px;
  padding-bottom: 70px;
  background-color: #202733;

  &__box {
    background-image: url(/image.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    padding: 40px 90px;
  }

  &__text {
    max-width: 400px;
    margin-bottom: 60px;

    h2 {
      color: #fff;
    }
  }

  form {
    width: 100%;

    input {
      border-radius: 50px;
      font-size: 16px;
      padding: 12px 25px;
    }

    textarea {
      padding: 12px 25px;
      font-size: 16px;
      border-radius: 20px;
      resize: none;
      margin-bottom: 40px;
    }

    button {
      border: none;
      padding: 12px 35px;
      border-radius: 50px;
      background: none;
      border: 1px solid #fff;
      color: #fff;
      transition: all .3s ease;

      &:hover {
        background-color: #fff;
        color: #000;
      }
    }
  }
}

// Footer Styles

.footer {
  background-color: #fce8bd;
  padding-top: 70px;
  padding-bottom: 50px;

  &__logo {
    width: 120px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
  }

  &__social {
    display: flex;
    gap: 20px;

    li {
      background-color: #000;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all .3s ease;
      border: 1px solid transparent;

      &:hover {
        background: transparent;
        border-color: #000;

        a {
          color: #000;
        }
      }

      a {
        color: #fff;
      }
    }
  }

  h4 {
    margin-bottom: 20px;
    font-size: 26px;
  }

  &__menu {
      li {
      position: relative;
      margin-bottom: 15px;
      font-size: 20px;

      a {
        color: #8b8686;
        transition: all .3s ease;
        &:hover {
          color: #000;
        }
      }
    }
  }
}

// Media Styles

@media (min-width: 1400px) {

  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 1140px;
  }
}


@media (max-width: 992px) {
  .header {
    &__menu {
      width: 100%;
    }

    &__item {
      font-size: 15px;
    }

    &__logo {
      img {
        width: 80px;
      }
    }
  }

  .hero {
    overflow: hidden;
    padding-top: 180px;

    &__title {
      max-width: 100%;
      font-size: 6vw;
    }
  }

  .company {
    &__box {
      h2 {
        font-size: 35px;
      }

      span {
        font-size: 15px;
      }
    }

    &__title {
      margin-bottom: 60px;
    }
  }

  .exchange {
    .col-6 {
      height: 250px;
    }
  }
}

@media (max-width: 768px) {
  .news {
    &__card {
      padding-left: 20px;
      min-height: auto;
    }

    &__img {
      height: 200px;
    }
  }

  .contact {
    &__box {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}

@media (max-width: 576px) {
  .building {
    padding-top: 100px;
    padding-bottom: 120px;

    &__text {
      h2 {
        font-size: 30px;
      }
    }

    &__desc {
      p {
        font-size: 14px;
      }

      margin-bottom: 30px;
    }
  }

  .hero {
    padding-top: 150px;
    padding-bottom: 70px;

    &__title {
      font-size: 8vw;
    }

    &__desc {
      margin-bottom: 20px;
    }
  }

  .project {
    &__card {
      height: 300px;
    }
  }

  .button {
    .label {
      font-size: 15px;
      padding: 10px 17px;
    }
  }

  .dream {
    .col-6 {
      height: 160px;
    }
  }

  .exchange {
    .col-6 {
      height: 200px;
    }
  }
  .footer {
    h4 {
      font-size: 20px;
    }
    li {
      font-size: 18px;
    }
  }

  .service {
    &__box {
      h2 {
        font-size: 18px;
      }
    }
  }
}
</style>