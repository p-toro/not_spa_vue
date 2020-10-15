import Vue from 'vue/dist/vue.esm'
const mql = window.matchMedia('screen and (max-width: 767px)')

const accordion = new Vue({
  el: '#js-accordion',
  data: {
    isOpen: false
  },
  methods: {
    toggleAccordion: function(e) {
      let target = e.target
      let nextObj = target.nextElementSibling
      if (this.isOpen) {
        this.isOpen = false
        nextObj.style.height = null
      } else {
        this.isOpen = true
        nextObj.style.height = nextObj.scrollHeight + 'px'
      }
    }
  }
})

import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
const carousel = new Vue({
  el: '#js-slide01',
  mounted: function () {
    this.swiper = new Swiper('#js-slide01', {
      cssMode: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
})

const hamburger = new Vue({
  el: '#js-header',
  data: {
    body: document.querySelector('body'),
    isOpen: false,
    winScrollTop: 0,
  },
  methods: {
    toggleMenu: function () {
      if (!mql.matches) return // SPのみ実行
      if (!this.isOpen) {
        this.isOpen = true
        this.winScrollTop = window.scrollY
        this.body.classList.add('is-fixed')
        this.body.style.top = `-${this.winScrollTop}px`
      } else {
        this.isOpen = false
        this.body.classList.remove('is-fixed')
        this.body.style.top = ''
        window.scrollTo(0, this.winScrollTop)
      }
    },
  },
})

const modal = new Vue({
  el: '#js-modal',
  data: {
    body: document.querySelector('body'),
    isOpen: false,
    winScrollTop: 0,
  },
  methods: {
    openModal: function () {
      this.isOpen = true
      this.winScrollTop = window.scrollY
      this.body.classList.add('is-fixed')
      this.body.style.top = `-${this.winScrollTop}px`
    },
    closeModal: function () {
      this.isOpen = false
      this.body.classList.remove('is-fixed')
      this.body.style.top = ''
      window.scrollTo(0, this.winScrollTop)
    },
  },
})

const polyfill = new Vue({
  created: function () {
    this.setForEach()
  },
  methods: {
    setForEach: function () {
      if ('NodeList' in window && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
          thisArg = thisArg || window
          for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this)
          }
        }
      }
    },
  },
})

const reloadMatchMedia = new Vue({
  created: function () {
    this.init()
  },
  methods: {
    init: function () {
      mql.addEventListener('change', this.checkBreakPoint)
    },
    checkBreakPoint: function () {
      if (mql.matches) {
        location.reload()
      } else {
        location.reload()
      }
    },
  },
})

import SmoothScroll from 'smooth-scroll'
const scrollSmooth = new Vue({
  created: function () {
    this.init()
  },
  methods: {
    init: function () {
      const scroll = new SmoothScroll('a[href*="#"]', {
        header: '[data-scroll-header]',
        speed: 700,
      })
    },
  },
})

const setIntersectionObserver = new Vue({
  created: function () {
    this.init()
  },
  methods: {
    init: function () {
      const options = {
        root: null,
        rootMargin: '0% 0% -20% 0%',
        threshold: 0,
      }
      const observer = new IntersectionObserver(this.callback, options)
      const observers = document.querySelectorAll('.js-iso01')
      observers.forEach((el) => {
        observer.observe(el)
      })
    },
    callback: (entries, observer) => {
      entries.forEach((entry) => {
        const elem = entry.target
        if (entry.isIntersecting) {
          elem.classList.remove('is-iso01')
          observer.unobserve(entry.target) // 監視解除（発火は1度のみ）
        }
      })
    },
  },
})

const message = new Vue({
  el: '#js-message',
  data: {
    message: ''
  }
})
