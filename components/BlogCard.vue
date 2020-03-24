<template>
  <li class="blog" itemscope itemtype="http://schema.org/Article">
    <nuxt-link itemprop="url"
      :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})"
    >
      <meta itemprop="author" content="Marcos Lebron">
      <meta itemprop="headline" :content="blog.title">
      <meta itemprop="datePublished" :content="blog.year">
      <div itemscope="itemscope" itemtype="http://schema.org/Person" itemprop="publisher">
        <meta itemprop="name" content="www.marcoslebron.com">
      </div>
      <meta itemprop="mainEntityOfPage" content="www.marcoslebron.com">
      <meta itemprop="dateModified" :content="blog.updatedDate">
      <ImageResponsive
        :imageURL="`blog/${blog.id}/_thumbnail.svg`"
        :classes="'cardThumbnail'"
        :width="'952'"
        :height="'509'"
        :alt="blog.cardAlt" />
      <h3 itemprop="name" class="blog__title">
        {{ blog.title }}
      </h3>
      <p itemprop="articleBody" class="blog__description">
        {{ blog.description }}
      </p>
    </nuxt-link>
  </li>
</template>

<script lang="js">
  export default {
    props: {
      blog: {
        type: Object
      }
    }
  }
</script>

<style lang="scss">
.cardThumbnail {
    transition: all ease .75s;
    opacity: .7;
    &[lazy='loaded'] {
      opacity: 1;
    }
  }
  .blog {

    @media (min-width: $screen-sm){
      padding-bottom: 0;

      &:last-child {
        margin-right: 0;
      }
    }

    &:hover {
      .blog__title {
        color: $primary;
      }
    }

    &__title {
      font-family: 'Tiempos Headline', Arial, sans-serif;
      color: $secondary;
      padding-top: 1rem;
      font-size: 2.5rem;
      transition: color .3s;
    }

    &__description {
      margin: 0;
      color: $grey-2;
    }
  }
</style>
