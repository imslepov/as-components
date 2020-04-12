import Vue from 'vue'
import { compile } from './babel'

const SINGLEFILE_TEMPLATE = /<template>([\s\S]*)<\/template>/
const SINGLEFILE_SCRIPT = /<script>([\s\S]*)<\/script>/

const match = (regex, text) => (regex.exec(text) || [])[1]

/**
 * Returns object of single file vue component
 * @param {string} text
 */
export function parseSingleFileComponent(text) {
  const template = match(SINGLEFILE_TEMPLATE, text) || text
  const script = match(SINGLEFILE_SCRIPT, text)
  let options = {}

  if (script && script.includes('export default')) {
    try {
      const code = compile(script.replace('export default', ';options = '))

      // eslint-disable-next-line no-eval
      eval(code)
    } catch (e) {
      console.error(e)
      return false
    }
  }

  return {
    template,
    options,
  }
}

export function createDemo(preNode) {
  const demoContainer = document.createElement('div')
  const demoElement = document.createElement('div')
  const parsed = parseSingleFileComponent(preNode.textContent)

  if (!parsed) {
    return
  }

  demoContainer.classList.add('code-example__demo')
  demoContainer.appendChild(demoElement)
  preNode.parentElement.insertBefore(demoContainer, preNode)

  return new Vue({
    el: demoElement,
    template: parsed.template,
    router: this.$router,
    ...parsed.options,
  })
}

export function destroyDemo(vm) {
  vm.$destroy()
}
