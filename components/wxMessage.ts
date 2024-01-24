import { createApp, createVNode } from 'vue'
import wxMessage from './wxMessage.vue'

createVNode({
  props: {
    msg: String
  },
  emits: {
    hanldeClick() {}
  },
  render() {}
})

const showMsg = (msg: string, handleClick: (close: () => void) => void) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp(wxMessage, {
    msg,
    onclick() {
      handleClick &&
        handleClick(() => {
          app.unmount()
          div.remove()
        })
    }
  })
  app.mount(div)
}

export default showMsg
