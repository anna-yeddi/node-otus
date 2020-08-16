const fs = require('fs')

function tree(path, depth) {
  let level = 0

  // while (level < depth) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    try {
      const filesToTree = files

      console.log(filesToTree)
    } catch (err) {
      console.error(err)
    }

    // level++
  })
  // }
  // for (const [key, value] of Object.entries(nameItemsObj)) {
  //   let indent = ''

  //   // Print out name
  //   if (key === 'name') {
  //     console.log(indent, value)
  //   }

  //   // Indent items
  //   if ((key === 'items') & Array.isArray(value)) {
  //     let indentItem = ' \u251c\u2014\u2014',
  //       indentChild = ' \u2502   \u2514\u2014\u2014'
  //     indent = indent === indentItem ? indentChild : indentItem

  //     value.map((item) => {
  //       tree(item, indent)
  //     })
  //   }
  // }
}

async function print(path) {
  const dir = await fs.promises.opendir(path)
  for await (const dirent of dir) {
    console.log(dirent.name)
  }
}
print('./').catch(console.error)

tree('../../node', 2)
