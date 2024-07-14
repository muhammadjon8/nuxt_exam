<template>
  <div class="flip-card" @click="flipCard">
    <div :class="['flip-card-inner', { 'flipped': isFlipped }]">
      <div class="flip-card-front">
        <span>?</span>
      </div>
      <div class="flip-card-back">
        <img :src="imageSrc" alt="Card Image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  }
})

const isFlipped = ref(false)

const flipCard = () => {
  isFlipped.value = !isFlipped.value
}
</script>

<style scoped>
.flip-card {
  perspective: 1000px;
  width: 200px;
  height: 300px;
  cursor: pointer;
  margin: 10px;
}

.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
}

.flipped {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.flip-card-front {
  background-color: #3490dc;
  color: white;
  font-size: 2rem;
}

.flip-card-back {
  background-color: #ffed4a;
  transform: rotateY(180deg);
}

.flip-card-back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
</style>
