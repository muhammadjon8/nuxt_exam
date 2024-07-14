<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    <FlipCard imageSrc="https://picsum.photos/200/300?random=1" />
    <FlipCard imageSrc="https://picsum.photos/200/300?random=2" />
    <FlipCard imageSrc="https://picsum.photos/200/300?random=3" />
    <FlipCard imageSrc="https://picsum.photos/200/300?random=4" />
    <FlipCard imageSrc="https://picsum.photos/200/300?random=5" />
    <FlipCard imageSrc="https://picsum.photos/200/300?random=6" />
  </div>
</template>

<script setup>
</script>

<style>
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
