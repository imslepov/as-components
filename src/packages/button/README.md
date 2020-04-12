# Button

## Overview

`<as-button>` can be used for create a custom buttons and links. 

```html
<template>
  <div>
    <as-button>Primary</as-button>
    <as-button theme="secondary">Secondary</as-button>
    <as-button theme="danger">Danger</as-button>
    <as-button theme="warn">Warn</as-button>
    <as-button theme="success">Success</as-button>
    <as-button theme="info">Info</as-button>
  </div>
</template>
```

Example with `disabled` state

```html
<template>
  <div>
    <as-button disabled>Primary</as-button>
    <as-button theme="secondary" disabled>Secondary</as-button>
    <as-button theme="danger" disabled>Danger</as-button>
    <as-button theme="warn" disabled>Warn</as-button>
    <as-button theme="success" disabled>Success</as-button>
    <as-button theme="info" disabled>Info</as-button>
  </div>
</template>
```

Example with `loading` state

```html
<template>
  <div>
    <as-button loading>Primary</as-button>
    <as-button theme="secondary" loading>Secondary</as-button>
    <as-button theme="danger" loading>Danger</as-button>
    <as-button theme="warn" loading>Warn</as-button>
    <as-button theme="success" loading>Success</as-button>
    <as-button theme="info" loading>Info</as-button>
  </div>
</template>
```

```html
<template>
  <div>
    <as-button size="xs">Extra small</as-button>
    <as-button size="sm">Small</as-button>
    <as-button size="md">Medium</as-button>
    <as-button size="lg">Large</as-button>
    <as-button size="xl">Extra large</as-button>
  </div>
</template>
```

```html
<template>
  <as-button block>Button block</as-button>
</template>
```

To navigate the pages you can use the `href` and `to`. If you are using a
<a href="https://nuxtjs.org/" target="_blank" rel="nofollow noopener">Nuxt.js</a>, you can pass the `nuxt` property to use the `<nuxt-link>`  
<a href="https://router.vuejs.org/api/#router-link" target="_blank" rel="nofollow noopener">See &lt;router-link&gt; docs</a>  
<a href="https://nuxtjs.org/api/components-nuxt-link" target="_blank" rel="nofollow noopener">See &lt;nuxt-link&gt; docs</a>

```html
<template>
  <div>
    <as-button href="/">Button link</as-button>
    <as-button to="/">Router link</as-button>
    <as-button to="/" nuxt>Nuxt link</as-button>
  </div>
</template>
```

## Playground

```html
<template>
  <div>
    <as-button
      :theme="theme"
      :size="size"
      :disabled="disabled"
      :loading="loading"
    >
      Button link
    </as-button>

    <as-row class="mt-5">
      <as-col sm="12">
        <as-form-item>
          <as-checkbox v-model="disabled">disabled</as-checkbox>
        </as-form-item>

        <as-form-item>
          <as-checkbox v-model="loading">loading</as-checkbox>
        </as-form-item>

        <as-form-item>
          <select v-model="theme">
            <option value="primary">primary</option>
            <option value="secondary">secondary</option>
            <option value="danger">danger</option>
            <option value="warn">warn</option>
            <option value="success">success</option>
            <option value="info">info</option>
          </select>
        </as-form-item>
        <as-form-item>
          <select v-model="size">
            <option value="xs">Extra small</option>
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
            <option value="xl">Extra large</option>
          </select>
        </as-form-item>
      </as-col>
    </as-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theme: 'primary',
      size: 'md',
      disabled: false,
      loading: false,
    }
  }
}
</script>
```

## Properties

| Name      | Type     | Default     | Description |
|-----------|----------|-------------|-------------|
| tag       | string   | `"button"`  |             |
| theme     | string   | `"primary"` |             |
| size      | string   | `"md"`      |             |
| href      | string   | `undefined` |             |
| to        | string   | `undefined` |             |
| focused   | boolean  | `false`     |             |
| loading   | boolean  | `false`     |             |
| disabled  | boolean  | `false`     |             |
| block     | boolean  | `false`     |             |
| nuxt      | boolean  | `false`     |             |

## Slots

| Name    | Description                        |
|---------|------------------------------------|
| default | The default Vue slot.              |
| prepend | Inserting before the default slot. |
| append  | Inserting after the default slot.  |

## Events

Supports all regular events like `@click`, `@mousedown`, `@mouseup`, `@focus`, `@blur`, etc...
