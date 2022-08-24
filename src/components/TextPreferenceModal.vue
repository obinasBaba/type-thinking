<template>
  <div
    v-if="storeModal.displayTextPreference"
    class="text-preference-modal-container"
    @focus="alignmentChange"
  >
    <div class="wrapper">
      <!--   COLOR PREFERENCES     -->
      <div class="text-pref-item color">
        <h5 class="title">
          Color
        </h5>
        <div class="colors">
          <span
            v-for="color in storeText.getColors()"
            :key="color"
            :style="{backgroundColor: color}"
          />
        </div>
      </div>

      <div class="text-pref-item alignment">
        <h5 class="title">
          Align
        </h5>
        <form
          class="alignment-items"
          @change="alignmentChange($event)"
        >
          <span class="left">
            <input
              v-model="storeText.state.alignment"
              type="radio"
              name="alignment"
              value="left"
            >

            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
            >
              <path
                d="M1.5 1H17M2 7H12M2 13H17"
                :stroke="isActive('left')"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>

          <span class="center">
            <input
              v-model="storeText.state.alignment"
              type="radio"
              name="alignment"
              value="center"
            >

            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
            >
              <path
                d="M1 1H18.5M4.5 7H14.5M2.5 13H16.5"
                :stroke="isActive('center')"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>

          <span class="right">
            <input
              v-model="storeText.state.alignment"
              type="radio"
              name="alignment"
              value="right"
            >

            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
            >
              <path
                d="M16.5 1H1M16 7H6M16 13H1"
                :stroke="isActive('right')"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </form>
      </div>

      <div class="text-pref-item">
        <h5 class="title">
          Size
        </h5>
        <input
          id="myRange"
          v-model="storeText.size"
          type="range"
          min="1"
          max="10"
          class="slider"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTextSettingStore } from '@/store/textSettingModalStore'
import { useModalStore } from '@/store/modalStore'

const storeText = useTextSettingStore()
const storeModal = useModalStore()

storeText.$subscribe((state) => {
  console.log('store -chnaged --- -- ', state)
})

function alignmentChange (evt) {
  console.log('focus-out')
}

const isActive = storeText.isActive

</script>

<style scoped lang="scss">
@use '~@/styles' as s;

.text-preference-modal-container {
  position: absolute;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.26);
  border-radius: 11px;
  background-color: rgba(255, 255, 255, 0.9);
  max-width: 300px;

  right: 5%;
  top: 7%;

  .wrapper {
    //width: 100%;
    text-align: left;
    display: flex;
    flex-flow: column;
    justify-items: flex-end;
    gap: s.f-unit(1.5rem);

    padding: s.f-unit(.5rem) s.f-unit(1.5rem);

    .text-pref-item {

    }

    .color {
      display: flex;
      flex-flow: column;
      gap: .5rem;

      .colors {
        display: flex;
        gap: .6rem;

        span {
          padding: 10px;
          background-color: #00EC98;
          border-radius: 50%;
        }

      }
    }

    .alignment {
      display: flex;
      flex-flow: column;
      gap: 1rem;

      .alignment-items {
        display: flex;
        gap: s.f-unit(.7rem);

        span {
          position: relative;

          input {
            position: absolute;
            height: 107%;
            width: 107%;
            opacity: .1;
          }

          svg {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

}

</style>
