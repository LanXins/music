<template>
 <div class="slider" ref="slider">
   <div class="slider-group" ref="sliderGroup">
     <slot></slot>
   </div>
   <div class="dots"></div>
 </div>
</template>

<script>
import BScroll from 'better-scroll'
import { setTimeout } from 'timers'
import addClass from '../../common/js/dom'
export default {
  name: '',
  data () {
    return {
      msg: ''
    }
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  mounted () {
    setTimeout(() => {
      this._setSliderWidth()
    }, 20)
  },
  methods: {
    _setSliderWidth () {
      let children = this.$refs.sliderGroup.children
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < children.length; i++) {
        let child = children[i]
        addClass(child, 'slider-item')
        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      if (this.loop) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    }
  }

}
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/variable.styl"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>
