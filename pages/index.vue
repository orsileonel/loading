<template>
  <section>
    <nuxt-link class="profile__link" :to="localePath({ name: 'about' })">
      GO TO ABOUT
    </nuxt-link>
    <br />
    <br />
    <br />
    <br />
    <p>{{ $t('home.hello') }}</p>
    <br />
    <br />
    <br />
    <br />
    <a :class="{'active': $i18n.locale === 'en'}" @click="changeLocale('en')">
      English
    </a>
    <a :class="{'active': $i18n.locale === 'es'}" @click="changeLocale('es')">
      Spanish
    </a>
  </section>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    changeLocale (locale) {
      this.$i18n.setLocaleCookie(locale)
      this.$router.push(this.switchLocalePath(locale))
    }
  },
  head () {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      // main title of the document (limit to 50 characters)
      title: this.$t('home.seo.title'),
      meta: [
        // hid is used as unique identifier, do not use 'vmid' for it as it will not work
        // short description of the document (limit to 150 characters)
        { hid: 'description', name: 'description', content: this.$t('home.seo.description') },
        // main keywords making reference to key content (limit to 70 characters)
        { hid: 'keywords', name: 'keywords', content: this.$t('home.seo.keywords') },
        // control the behavior of search engine crawling and indexing
        { hid: 'robots', name: 'robots', content: 'index,follow' }
      ],
      links: [
        // instruct search engines to consider this URL as intended
        { rel: 'canonical', href: '#' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
