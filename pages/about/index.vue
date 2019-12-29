<template>
  <section class="about">
    <nuxt-link class="profile__link" :to="localePath('index')">
      GO TO HOME
    </nuxt-link>
    <br />
    <br />
    <br />
    <br />
    <p>{{ $t('about.hello') }}</p>
    <br />
    <br />
    <br />
    <br />
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'About',
  async asyncData () {
    return axios.all([
      await axios.get('https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json'),
      await axios.get('https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json'),
      await axios.get('https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json')
    ]).then((res) => {
      return { res }
    })
  },
  layout: 'page',
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
        { rel: 'canonical', href: 'http://www.orsileonel.com' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
