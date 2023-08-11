<template>
<Transition
    enter-active-class="enter-active"
    leave-active-class="leave-active"
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave">
    <slot />
</Transition>
</template>

<script>
export default {
  name: "TransitionCollapseHeight",
  methods: {
    beforeEnter(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = 0;
        }
      });
    },
    enter(element) {
      requestAnimationFrame(() => {
        element.style.height = element.scrollHeight + "px";
      });
    },
    /* afterEnter(element) {
      element.style.height = null;
    }, */
    beforeLeave(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = element.scrollHeight + "px";
        }
      });
    },
    leave(element) {
      requestAnimationFrame(() => {
        element.style.height = 0;
      });
    },
    /* afterLeave(element) {
      element.style.height = null;
    } */
  }
}
</script>

<style scoped>
.enter-active,
.leave-active {
  overflow: hidden;
  transition: height 0.3s ease-in-out ;
}
</style>