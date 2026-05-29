<script setup lang="ts">
useScrollReveal()

const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

const research = [
  { idx: '01', date: '2025 — present', title: 'Predictive world models for embodied agents', meta: 'ongoing' },
  { idx: '02', date: '2024 — 2025',    title: 'Cross-modal scene representation learning',   meta: 'internship' },
  { idx: '03', date: '2024',           title: 'Self-supervised depth & ego-motion in cluttered scenes', meta: 'thesis' },
  { idx: '04', date: '2023',           title: 'Vision transformers for low-resource object detection', meta: 'side project' },
]

const publications = [
  { idx: '[1]', date: '2025.11', title: 'Learning to predict, plan, and act in partially-observed worlds', meta: 'arxiv:2511.04217' },
  { idx: '[2]', date: '2025.06', title: 'Compositional world models from unlabeled video', meta: 'workshop · NeurIPS' },
  { idx: '[3]', date: '2024.10', title: 'A note on inductive biases for embodied perception', meta: 'preprint' },
]

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
            I'm an aspiring AI researcher working at the intersection of <em>world models</em>,
            <em>embodied intelligence</em>, and <em>computer vision</em>. I'm interested in how
            machines learn to predict, imagine, and act in the worlds they inhabit.
          </p>
          <p class="lede" style="margin-top:1em;">
            Most of what I do lives somewhere between a notebook full of experiments and a
            half-finished paper draft. This site is where I try to make some of that thinking
            legible — to myself, and to anyone else who is curious.
          </p>
        </div>

        <div class="about__grid" data-reveal>
          <div class="about__portrait">
            <div class="about__portrait-placeholder">portrait →</div>
            <p class="about__caption">eiffel · kuala&nbsp;lumpur, 2026</p>
          </div>
          <dl class="keys">
            <dt>location</dt>     <dd>Kuala Lumpur / remote</dd>
            <dt>focus</dt>        <dd>predictive world models, sim-to-real, embodied agents</dd>
            <dt>tools</dt>        <dd>PyTorch, JAX, MuJoCo, a lot of tmux</dd>
            <dt>reading</dt>      <dd>Sutton &amp; Barto, Schmidhuber's 1990 papers, Friston</dd>
            <dt>elsewhere</dt>    <dd><NuxtLink href="#contact">github · scholar · twitter</NuxtLink></dd>
          </dl>
        </div>
      </div>
    </section>

    <!-- ── RESEARCH ── -->
    <section id="research" class="section">
      <div class="col">
        <SectionLabel label="~/research" />
        <ul class="rowlist" data-reveal>
          <li v-for="item in research" :key="item.idx">
            <span class="idx">{{ item.idx }}</span>
            <span class="date">{{ item.date }}</span>
            <span class="title">{{ item.title }}</span>
            <span class="meta">{{ item.meta }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- ── PUBLICATIONS ── -->
    <section id="publications" class="section">
      <div class="col">
        <SectionLabel label="~/publications" />
        <ul class="rowlist" data-reveal>
          <li v-for="pub in publications" :key="pub.idx">
            <span class="idx">{{ pub.idx }}</span>
            <span class="date">{{ pub.date }}</span>
            <span class="title">{{ pub.title }}</span>
            <span class="meta">{{ pub.meta }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- ── BLOG ── -->
    <section id="blog" class="section">
      <div class="col">
        <SectionLabel label="~/blog" />
        <ul class="rowlist" data-reveal>
          <li v-for="(post, i) in posts" :key="post.path">
            <span class="idx">{{ padIdx(i) }}</span>
            <span class="date">{{ fmtDate(post.date) }}</span>
            <NuxtLink :href="`/blog/${post.stem?.split('/').pop()}`" class="title">
              {{ post.title }}
            </NuxtLink>
            <span class="meta">{{ post.category }} · {{ post.readTime }} min</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- ── CONTACT ── -->
    <section id="contact" class="section">
      <div class="col">
        <SectionLabel label="~/contact" />
        <dl class="contact" data-reveal>
          <div><dt>email</dt><dd><a href="mailto:eiffel@eiffelchong.com">eiffel@eiffelchong.com</a></dd></div>
          <div><dt>github</dt><dd><a href="https://github.com/eiffelchong" target="_blank" rel="noopener">github.com/eiffelchong</a></dd></div>
          <div><dt>scholar</dt><dd><a href="#" target="_blank" rel="noopener">scholar/eiffelchong</a></dd></div>
          <div><dt>twitter</dt><dd><a href="https://twitter.com/eiffelchong" target="_blank" rel="noopener">@eiffelchong</a></dd></div>
          <div><dt>cv</dt><dd><a href="/cv.pdf">cv.pdf</a></dd></div>
        </dl>
      </div>
    </section>

    <AppFooter />
  </main>
</template>
