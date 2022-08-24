<template>
  <div class="container">
    <div
      class="wrapper"
      @click="handleFocus"
    >
      <h2 :class="['main-text', storeText.getAlignment() ]">
        <span
          v-for="(letter, idx) of text"
          :key="idx"
          :ref="el => idx === activeIdx && (activeLetterRef = el)"
          class="letter"
          :class="[{isActive: idx === activeIdx}, {[ errors.get(idx) ? 'incorrect' : 'correct' ] : idx < activeIdx} ]"
        >
          {{ letter }}
        </span>

        <span
          :class="['cursor', store.getCurrentShape]"
          :style="cursorStyle.style"
          v-text="cursorLetter"
        />
      </h2>
    </div>

    <div class="input-container">
      <input
        ref="input"
        v-model="typedInput"
        type="text"
        spellcheck="false"
        autocapitalize="off"
        @input="handleInput"
        @keyup.delete="handleBackspace"
      >
    </div>

    <!--    <div>
      <pre v-text="activeLetter" />
    </div>-->
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import useSettingStore from '@/store/useSettingStore'
import { useTextSettingStore } from '@/store/textSettingModalStore'

const store = useSettingStore()
const storeText = useTextSettingStore()

store.$subscribe((mutation, state) => {
  console.log('store changed *** ')
})

storeText.$subscribe((mutation, state) => {
  console.log('store changed *** ')
})

const input = ref(null)
const activeLetterRef = ref(null)
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
  input.value.focus()
}

function handleBackspace () {
  // console.log( 'delete...' )
  if (activeIdx.value <= 0) return

  if (store.stopOnError) return

  const next = text.value[--activeIdx.value]
  cursorLetter.value = next === ' ' ? '_' : next
  activeLetter.value = next
  errors.delete(activeIdx.value) // todo 👉🏾 only when continue on error
}

function handleInput () {
  // console.log( 'dataInput', typedInput.value, activeLetter.value === ' ' ? '_' : activeLetter.value )

  // check for error
  if (typedInput.value !== activeLetter.value) {
    errors.set(activeIdx.value, true)
    typedInput.value = ''

    if (store.stopOnError) {
      return null
    }
  }

  // next quote
  if (text.value.length - 1 === activeIdx.value) { // check for end of current text
    activeIdx.value = 0
    text.value = texts[++activeText.value] ?? texts[0] // getting the next quote

    const next = text.value[activeIdx.value]
    cursorLetter.value = next === ' ' ? '_' : next
    activeLetter.value = next

    typedInput.value = ''
    return
  }

  // normal continuation
  const next = text.value[++activeIdx.value]
  cursorLetter.value = next === ' ' ? '_' : next
  activeLetter.value = next
  typedInput.value = ''
}

watch([activeLetterRef], args => {
  if (!args[0]) return

  cursorStyle.style = { transform: `translateY( ${args[0]?.offsetTop}px ) translateX( ${args[0]?.offsetLeft}px )` }
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
    max-width: 90ch;
    padding: 2px;
  }

  .main-text {
    position: relative;
    word-spacing: 3px;
    //line-height: 1.5;
    font-family: s.$fonts-auger-300;
    font-weight: lighter;
    font-size: 2rem;

    &.left {
      text-align: left;
    }

    &.right {
      text-align: right;
    }

    &.center {
      text-align: center;
    }

    /*border: thin solid red;*/

    .letter {
      //color: lightgray;
      line-height: 1.4;

      &.correct {
        color: rgba(154, 153, 152, 0.3);
      }

      &.incorrect {
        color: red;
        filter: drop-shadow(0 0 3px red);
      }

    }

    .cursor {
      position: absolute;
      top: 0;
      left: 0;
    }

    .block {
      background-color: lighten(#000000, 30);
      color: white;
    }

    .line {
      //background-color: lighten(#000000, 30);
      //border-radius: 100px;
      color: transparent;
      border-left: 4px solid black;
      padding-right: 15px;
      //width: 4px;
      //margin-right: 14px;
    }

    .box {
      color: transparent;
      background-color: transparent;
      border: 2px solid black;
    }

    .terminal {
      color: transparent;
      background-color: transparent;
      border-bottom: 5px solid black;;
      line-height: 1.1;
      border-radius: 3px;

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
