<template>
  <svg
    :width="imageWidth"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 478.6 184.8"
    style="enable-background: new 0 0 478.6 184.8"
    xml:space="preserve"
  >
    <g>
      <g>
        <path
          :style="[beltColor, beltOutline]"
          d="M192,46.1c0,0-1.5,5,0.2,7.4c1.7,2.4,24.9,1.8,24.9,1.8L205.8,45L192,46.1z"
        />
        <path
          :style="[beltColor, beltOutline]"
          d="M9.8,23.2c0,0,119.2,32.1,233.8,32.1S458.3,4.1,462.1,1.8c3.8-2.3,13,39,0.8,48.1
			c-12.2,9.2-81,48.9-216.2,48.9c-135.2,0-233-21.4-239.9-29C-0.1,62.2-0.1,31.6,9.8,23.2z"
        />
        <path
          :style="[beltColor, beltOutline]"
          d="M252,126.3c0,0-22.2-6.1-28.3-21.4c-6.1-15.3,58.8-29.8,58.8-29.8l-6.1,31.3L252,126.3L252,126.3z"
        />
        <path
          :style="[beltColor, beltOutline]"
          d="M195.5,102.7c0,0,30.6,21.4,35.1,19.1c4.6-2.3,58.8-36.7,58.8-36.7l-45.8-33.6l-50.4,38.2L195.5,102.7z"
        />
        <path
          :style="[beltColor, beltOutline]"
          d="M22.8,152.3c0,0,125.3-76.4,200.9-107s30.6,29,30.6,29s-78.7,38.2-110.8,57.3s-81.7,50.4-87.9,51.2
			C49.6,183.6,22.8,152.3,22.8,152.3L22.8,152.3z"
        />
        <path
          :style="[beltColor, beltOutline]"
          d="M256,27.3c0,0-5.3-1.9-14.1,8.5C233,46.1,256.9,44,256.9,44L256,27.3z"
        />
        <path
          :style="[beltColor, beltOutline]"
          d="M232.1,28.5c0,0,94.7,49.7,127.6,60.4c32.9,10.7,113.8,46.6,116.9,55.8s-27.5,30.6-27.5,30.6
			s-23.7-21.4-54.2-34.4c-30.6-13-83.3-34.4-112.3-48.1c-29-13.8-89.4-47.4-89.4-47.4L232.1,28.5L232.1,28.5z"
        />
        <path
          :style="[beltColor, beltOutline]"
          d="M255.8,27.8c0,0-2.3,92.4-4.6,97c-2.3,4.6,42.8-13,43.5-18.3c0.8-5.3,6.9-50.4,2.3-55S260.4,25.5,255.8,27.8
			L255.8,27.8z"
        />
        <path
          :style="[patchColor, beltOutline]"
          d="M62,129.2c0,0,20.6,24.7,33.4,31.9c4-1.9,69-40.7,69-40.7s-25.8-22.9-29.6-32.1C127.4,92.5,62,129.2,62,129.2
			L62,129.2z"
        />
      </g>
    </g>
    <polygon
      id="Stripe1"
      :style="stripeOne"
      points="105.8,155.9 109.1,152.9 81,121.8 73.5,126.1 102.4,157.9 "
    />
    <rect
      id="Stripe2"
      :style="stripeTwo"
      x="101.7"
      y="108.1"
      transform="matrix(0.7407 -0.6718 0.6718 0.7407 -59.8848 104.8345)"
      width="8.4"
      height="43.8"
    />
    <rect
      id="Stripe3"
      :style="stripeThree"
      x="117.5"
      y="98.8"
      transform="matrix(0.7407 -0.6718 0.6718 0.7407 -49.5132 113.0472)"
      width="8.4"
      height="43.8"
    />
    <rect
      id="Stripe4"
      :style="stripeFour"
      x="132.8"
      y="90"
      transform="matrix(0.7407 -0.6718 0.6718 0.7407 -39.7012 121.0361)"
      width="8.4"
      height="43.8"
    />
    <path
      :style="beltOutline"
      style="fill: none"
      d="M62,129.2c0,0,20.6,24.7,33.4,31.9c4-1.9,69-40.7,69-40.7s-25.8-22.9-29.6-32.1C127.4,92.5,62,129.2,62,129.2 L62,129.2z"
    />
  </svg>
</template>

<script setup>
import { computed } from "vue"
const props = defineProps({
  imageWidth: Number,
  beltLevel: String,
  stripeCount: Number,
})

const imageWidth = computed(() => {
  return props.imageWidth
})

const patchColor = computed(() => {
  if (props.beltLevel < 4) {
    return { fill: "#000000" }
  } else {
    return { fill: "#FF0000" }
  }
})

const beltOutline = computed(() => {
  if (props.beltLevel == 2 || props.beltLevel == 4) {
    return { stroke: "#C0C0C0", "stroke-width": "4" }
  } else {
    return { stroke: "#1A1A1A", "stroke-width": "4" }
  }
})

const beltColor = computed(() => {
  switch (props.beltLevel) {
    case "0": // white
      return { fill: "#FFFFFF" }
    case "1": // blue
      return { fill: "#2727c9" }
    case "2": // purple
      return { fill: "#621083" }
    case "3": // brown
      return { fill: "#" }
    case "4": // black
      return { fill: "#000000" }
    default:
      return { fill: "#FFFFFF" }
  }
})

const stripeOne = computed(() => {
  if (props.stripeCount > 0) {
    return { fill: "#FFFFFF" }
  } else {
    return { fill: "#000000" }
  }
})

const stripeTwo = computed(() => {
  if (props.stripeCount > 1) {
    return { fill: "#FFFFFF" }
  } else {
    return { fill: "#000000" }
  }
})

const stripeThree = computed(() => {
  if (props.stripeCount > 2) {
    return { fill: "#FFFFFF" }
  } else {
    return { fill: "#000000" }
  }
})

const stripeFour = computed(() => {
  if (props.stripeCount > 3) {
    return { fill: "#FFFFFF" }
  } else {
    return { fill: "#000000" }
  }
})
</script>
