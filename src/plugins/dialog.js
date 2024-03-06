import { h, createApp } from 'vue'

import mainApp from '@/main.js'

import Dialog from '@/components/Dialog.vue'

function createDialog(type, title, text, onOk, onCancel) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const app = createApp({
    name: 'globalDialog',
    setup: () => () => h(Dialog, {
      title: title,
      text: text,
      type: type,
      onOk: () => { onOk(); destroy() },
      onCancel: () => { onCancel(); destroy() }
    })
  })

  app.config.globalProperties = mainApp.config.globalProperties

  const { reload, ...appContext } = mainApp._context
  Object.assign(app._context, appContext)

  app.mount(container)

  function destroy() {
    setTimeout(() => {
      app.unmount(container)
      container.remove()
    }, 500)
  }
}

export default {
  confirm(title, text, onOk=() => {}, onCancel=() => {}) {
    createDialog('confirm', title, text, onOk, onCancel)
  },
  info(title, text, onOk=() => {}) {
    createDialog('info', title, text, onOk, () => {})
  },
  warning(title, text, onOk=() => {}) {
    createDialog('warning', title, text, onOk, () => {})
  },
  error(title, text, onOk=() => {}) {
    createDialog('error', title, text, onOk, () => {})
  },
  success(title, text, onOk=() => {}) {
    createDialog('success', title, text, onOk, () => {})
  }
}
