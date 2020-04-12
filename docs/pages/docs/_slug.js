import { createDemo, destroyDemo} from '@/utils/vue'

const getReadMe = name =>
  import(`@/../src/packages/${name}/README.md` /* webpackChunkName: "docs/components" */)

export default {
  async asyncData({ params, error }) {
    try {
      const readme = (await getReadMe(params.slug)).default

      return {
        readme
      }
    } catch (e) {
      if (e.code === 'MODULE_NOT_FOUND') {
        return error(404)
      }

      console.error(e)
    }
  },
  render(h) {
    const { readme } = this

    return h('div', {
      domProps: { innerHTML: readme }
    })
  },
  mounted() {
    this.demoInstances = []

    document
      .querySelectorAll('pre')
      .forEach(node => {
        this.demoInstances.push(createDemo.call(this, node))
      })
  },
  beforeDestroy() {
    this.demoInstances.forEach(destroyDemo)
  },
}
