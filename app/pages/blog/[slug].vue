<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug as string)

const { data: post } = await useAsyncData(`blog-${slug.value}`, () =>
  queryCollection('blog').path(`/blog/${slug.value}`).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, message: 'Post not found' })
}

useHead({
  title: `${post.value.title} — Eiffel Chong`,
  meta: [
    { name: 'description', content: post.value.subtitle || post.value.title },
  ],
})

function fmtDate(d: string) {
  return d.replace(/-/g, '.')
}
</script>

<template>
  <main v-if="post">
    <article class="post col">
      <NuxtLink class="post__back" href="/#blog">← back to writing</NuxtLink>

      <div class="post__meta">
        <span>{{ fmtDate(post.date) }}</span>
        <span>{{ post.category }}</span>
        <span>{{ post.readTime }} min read</span>
      </div>

      <h1 class="post__title">{{ post.title }}</h1>

      <p v-if="post.subtitle" class="post__subtitle" v-html="post.subtitle" />

      <article>
        <ContentRenderer :value="post" />
      </article>

      <div class="post__footer">
        <NuxtLink href="/#blog">← back to writing</NuxtLink>
        <span>{{ fmtDate(post.date) }} · eiffel chong</span>
      </div>
    </article>
  </main>
</template>
