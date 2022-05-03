<template>
  <div class="container is-max-desktop py-6 px-4">

    <div class="wrapper">
      <div class="txt" @click="handleFocus">
        <h2 class="ui header main-text" ref="containerTxt">
               <span v-for="(letter, idx) of text"
                     class="letter"
                     :key="idx"
                     :class="[{isActive: idx === activeIdx}, {[ errors.get(idx) ? 'incorrect' : 'correct' ] : idx < activeIdx} ]"
                     :ref="el => idx === activeIdx && (activeRef = el)"
               >
                 {{ letter }}
               </span>

          <span class="cursor" v-text="cursorLetter" :style="cursorStyle.style"/>
        </h2>
      </div>

    </div>

    <div class="input-container">
      <input ref="input" v-model="typedInput" @input="handleInput" type="text" spellcheck="false"
             @keyup.delete="handleBackspace"
             autocapitalize="off"/>
    </div>

    <div>
      <pre v-text="activeLetter"></pre>
    </div>

  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue'

const input = ref(null)
const activeRef = ref(null)
const containerTxt = ref(null)
const typedInput = ref('')

const activeIdx = ref(0)
const activeText = ref(0)
const texts = [
  'to experience the reality of our true self is represented by our resentment toward those who have actually done so.',
  'The degree to which we have not allowed ourselves'
]

const text = ref(texts[activeText.value])
const errors = new Map() // todo 👉🏾 use computed property 👈🏽

const activeLetter = ref(text.value[activeIdx.value])
const cursorLetter = ref(text.value[activeIdx.value])

const cursorStyle = reactive({
  style: {}
})

function handleFocus () {
  console.log('focused')
  input.value.focus()
}

function handleBackspace () {
  // console.log( 'delete...' )
  if (activeIdx.value <= 0) return

  const next = text.value[--activeIdx.value]
  cursorLetter.value = next === ' ' ? '_' : next
  activeLetter.value = next
  // errors.delete(activeIdx.value) // todo 👉🏾 only when continue on error
}

function handleInput () {
  // console.log( 'dataInput', typedInput.value, activeLetter.value === ' ' ? '_' : activeLetter.value )
  if (typedInput.value !== activeLetter.value) {
    errors.set(activeIdx.value, true)
    typedInput.value = ''
    return
  }

  if (text.value.length - 1 === activeIdx.value) { // check for end of current text
    activeIdx.value = 0
    text.value = texts[++activeText.value]

    const next = text.value[activeIdx.value]
    cursorLetter.value = next === ' ' ? '_' : next
    activeLetter.value = next

    typedInput.value = ''
    return
  }

  const next = text.value[++activeIdx.value]
  cursorLetter.value = next === ' ' ? '_' : next
  activeLetter.value = next
  typedInput.value = ''
}

watch(activeRef, newRef => {
  if (!newRef) return

  cursorStyle.style = { transform: `translateY( ${newRef?.offsetTop}px ) translateX( ${newRef?.offsetLeft}px )` }
}, { immediate: true })

onMounted(() => {
  input.value.focus()
})

</script>

<style scoped lang="scss">
@use '~@/styles' as s;

.container {

  .wrapper {
    position: relative;
  }

  .txt {
    position: relative;
    max-width: 90ch;
    padding: 2px;

  }

  .main-text {
    position: relative;
    word-spacing: 3px;
    text-align: start;
    //line-height: 1.5;
    font-family: s.$fonts-auger-300;
    font-weight: lighter;
    font-size: 2rem;
    /*border: thin solid red;*/

    .letter {
      //color: lightgray;
      line-height: 1.4;

      &.correct {
        color: rgba(154, 153, 152, 0.3);
      }

      &.incorrect {
        color: red;
        filter: drop-shadow(0 0 5px red);
      }

    }

    .cursor {
      position: absolute;
      background-color: lighten(#000000, 30);
      top: 0;
      left: 0;
      color: white;
      //line-height: 1.3;
      //height: auto;
      //width: auto;
    }
  }

  .input-container {
    //visibility: hidden;
    position: absolute;
    overflow: hidden;
    width: 0;

  }

}

</style>
