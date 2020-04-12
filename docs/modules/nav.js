const fs = require('fs')
const path = require('path')
const slugger = require('slugger')

const navPath = path.resolve(__dirname, '../utils/nav.json')
const srcPath = path.resolve(__dirname, '../../src/packages')
const data = []

/**
 * @param {string} text
 */
function getHeadingLevel(text) {
  return text.replace(/[^#]/gm, '').length
}

/**
 * @param {string} text
 */
function generateNavItem(text) {
  const navItem = {}
  const regex = /^\#{1,6}(.*)$/gm;
  let m;

  while ((m = regex.exec(text)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
          regex.lastIndex++;
      }

      const fullmatch = m[0].trim()
      const level = getHeadingLevel(fullmatch)
      const title = m[1].trim()
      const slug = slugger(title)

      if (level === 1) {
        navItem.title = title
        navItem.slug = slug
        navItem.children = []
      }

      if (level === 2 && navItem.children) {
        navItem.children.push({
          title,
          hash: slug,
        })
      }
  }

  if (Object.keys(navItem).length) {
    data.push(navItem)
  }
}

export default function() {
  fs.readdirSync(srcPath).forEach(file => {
    const stat = fs.statSync(path.resolve(srcPath, file))

    if (!stat.isDirectory()) {
      return
    }

    const readmePath = path.resolve(srcPath, file, 'README.md')

    if (!fs.existsSync(readmePath)) {
      return
    }

    const readmeText = fs.readFileSync(readmePath, {
      encoding: 'utf8'
    })

    generateNavItem(readmeText)
  })

  fs.writeFileSync(navPath, JSON.stringify(data, null, 2))
}
