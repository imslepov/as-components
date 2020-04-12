import { transform } from '@babel/standalone'

const transformOptions = {
  sourceType: 'script',
  presets: ['es2015', 'es2016', 'es2017'],
  plugins: [
    'proposal-object-rest-spread'
  ]
}

export function compile(code) {
  return transform(code, transformOptions).code
}
