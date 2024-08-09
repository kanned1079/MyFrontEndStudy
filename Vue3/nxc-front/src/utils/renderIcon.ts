import type {Component} from "vue";
import {h} from 'vue'
import {NIcon} from 'naive-ui'

let renderIcon = (icon: Component) => {
    return () => {
        return h(NIcon, null, {
            default: () => h(icon)
        })
    }
}

export default renderIcon