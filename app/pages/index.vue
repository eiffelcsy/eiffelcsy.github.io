<script setup lang="ts">
useScrollReveal()

const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

function fmtDate(d: string) {
  return d.replace(/-/g, '.')
}

function padIdx(n: number) {
  return String(n + 1).padStart(2, '0')
}
</script>

<template>
  <main>
    <!-- ── HERO ── -->
    <section id="home" class="section section--hero">
      <div class="col">
        <p class="hero__kicker" data-reveal>~/home — last updated 2026.05.18</p>
        <h1 class="hero__name" data-reveal>Eiffel Chong.</h1>
        <p class="hero__role" data-reveal>
          ai researcher<span class="dot">·</span>world models<span class="dot">·</span>embodied intelligence
        </p>
        <div class="prompt" data-reveal>
          <span class="prompt__cmd" />currently:&nbsp;<HeroTyping />
        </div>
      </div>
    </section>

    <!-- ── ABOUT ── -->
    <section id="about" class="section">
      <div class="col">
        <SectionLabel label="~/about" />
        <div data-reveal>
          <p class="lede">
            I am an aspiring AI researcher with interests in <em>world models</em>, <em>embodied intelligence</em>,
            <em>computer vision</em>, and <em>trustworthy AI</em> — building systems that can perceive, reason,
            and act reliably in the real world.
          </p>
          <p class="lede">
            I am currently a final year undergraduate student at <em>Singapore Management University</em>, 
            where I am pursuing a <a href="https://computing.smu.edu.sg/bsc-information-systems/curriculum" target="_blank" rel="noopener">Bachelor of Science in Information Systems</a>. This website is where 
            I try to make some of my thinking legible — to myself, and to anyone else who is curious. 
          </p>
        </div>

        <div class="about__grid" data-reveal>
          <div class="about__portrait">
            <div class="about__portrait-placeholder">portrait →</div>
            <p class="about__caption">eiffel · on the eiffel tower, 2026</p>
          </div>
          <dl class="keys">
            <dt>location</dt>     <dd>Singapore / remote</dd>
            <dt>focus</dt>        <dd>benchmarking world models, ai safety, trustworthy embodied agents</dd>
            <dt>elsewhere</dt>    <dd><NuxtLink href="#contact">github · scholar · twitter</NuxtLink></dd>
          </dl>
        </div>
      </div>
    </section>

    <!-- ── RESEARCH ── -->
    <section id="research" class="section">
      <div class="col">
        <SectionLabel label="~/research" />
        <div class="empty-state" data-reveal>
          <span class="empty-state__glyph">—</span>
          <p class="empty-state__msg">no entries yet</p>
          <p class="empty-state__hint">research projects will appear here</p>
        </div>
      </div>
    </section>

    <!-- ── PUBLICATIONS ── -->
    <section id="publications" class="section">
      <div class="col">
        <SectionLabel label="~/publications" />
        <div class="empty-state" data-reveal>
          <span class="empty-state__glyph">—</span>
          <p class="empty-state__msg">no entries yet</p>
          <p class="empty-state__hint">publications and preprints will appear here</p>
        </div>
      </div>
    </section>

    <!-- ── BLOG ── -->
    <section id="blog" class="section">
      <div class="col">
        <SectionLabel label="~/blog" />
        <ul v-if="posts && posts.length" class="rowlist" data-reveal>
          <li v-for="(post, i) in posts" :key="post.path">
            <span class="idx">{{ padIdx(i) }}</span>
            <span class="date">{{ fmtDate(post.date) }}</span>
            <NuxtLink :href="`/blog/${post.stem?.split('/').pop()}`" class="title">
              {{ post.title }}
            </NuxtLink>
            <span class="meta">{{ post.category }} · {{ post.readTime }} min</span>
          </li>
        </ul>
        <div v-else class="empty-state" data-reveal>
          <span class="empty-state__glyph">—</span>
          <p class="empty-state__msg">no posts yet</p>
          <p class="empty-state__hint">writing will appear here when published</p>
        </div>
      </div>
    </section>

    <!-- ── CONTACT ── -->
    <section id="contact" class="section">
      <div class="col">
        <SectionLabel label="~/contact" />
        <dl class="contact" data-reveal>
          <div><dt>email</dt><dd><a href="mailto:eiffelchongsy@outlook.com">eiffelchongsy@outlook.com</a></dd></div>
          <div><dt>github</dt><dd><a href="https://github.com/eiffelcsy" target="_blank" rel="noopener">github.com/eiffelcsy</a></dd></div>
          <div><dt>scholar</dt><dd><a href="#" target="_blank" rel="noopener">scholar/eiffelchong</a></dd></div>
          <div><dt>cv</dt><dd><a href="/cv.pdf">cv.pdf</a></dd></div>
        </dl>
      </div>
    </section>

    <AppFooter />
  </main>
</template>
