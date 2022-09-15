<template>
  <div class="home-page">

    <div class="banner">
        <div class="container">
            <h1 class="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
        </div>
    </div>

      <div class="container page">
          <div class="row">

              <div class="col-md-9">
                  <div class="feed-toggle">
                      <ul class="nav nav-pills outline-active">
                          <li class="nav-item">
                              <a class="nav-link disabled" href="">Your Feed</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link active" href="">Global Feed</a>
                          </li>
                      </ul>
                  </div>

                  <div 
                    class="article-preview" 
                    v-for="article in articles" 
                    :key="article.slug"
                  >
                      <div class="article-meta">
                          <nuxt-link 
                            :to="{
                              name: 'profile',
                              params: {
                                username: article.author.username
                              },
                            }"
                          >
                            <img :src="article.author.image"/>
                          </nuxt-link>
                          <div class="info">
                              <a href="" class="author">
                                {{ article.author.username }}
                              </a>
                              <span class="date">{{ article.createdAt }}</span>
                          </div>
                          <button 
                            class="btn btn-outline-primary btn-sm pull-xs-right"
                            :class="{
                              active: article.favorited
                            }"
                          >
                              <i class="ion-heart"></i> 29
                          </button>
                      </div>
                      <nuxt-link 
                        :to="{
                          name: 'article',
                          params: {
                            slug: article.slug
                          }
                        }" 
                        class="preview-link">
                          <h1>{{ article.title }}</h1>
                          <p>{{ article.description }}</p>
                          <span>Read more...</span>
                      </nuxt-link>
                  </div>

              </div>

              <div class="col-md-3">
                  <div class="sidebar">
                      <p>Popular Tags</p>

                      <div class="tag-list">
                          <a
                            v-for="item in tags"
                            :key="item" 
                            href="" 
                            class="tag-pill tag-default"
                          >{{ item }}</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div> 
</template>

<script>
  import { getArticles } from '@/api/article';
  import { getTags } from '@/api/tags';

  export default {
    name: 'HomeIndex',
    async asyncData() {
      const [articleRes, tagsRes] = await Promise.all([
        getArticles({
          limit: 10,
          offset: 0,
        }),
        getTags()
      ]);
      const { articles, articlesCount } = articleRes.data;
      const { tags } = tagsRes.data.tags;

      return {
        articles,
        articlesCount,
        tags,
      };
    },
  }
</script>

<style>

</style>