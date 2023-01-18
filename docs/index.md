---
title: "Home"
---

# {{ $frontmatter.title }} <!-- markdownlint-disable-line MD025 -->

<p class="text-sky-400">This is blue text</p>

<script setup>
    import bjjBelt from '../components/bjj-belt.vue'
    import postList from '../components/post-list.vue'
    //console.log(posts)
</script>

<bjj-belt :imageWidth=200 :beltLevel=0 :stripeCount=0></bjj-belt>
<post-list></post-list>
