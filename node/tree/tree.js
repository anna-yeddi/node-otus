const fs = require('fs')

function tree(path, depth = 0) {
  // async function print(path, indent = '') {
  //   const dir = await fs.promises.opendir(path)
  //   for await (const dirent of dir) {
  //     // Print out name
  //     console.log(indent, dirent.name)

  //     // Check and structure indentation
  //     let indentItem = ' \u251c\u2014\u2014',
  //       indentChild = ' \u2502  ',
  //       nextIndent =
  //         indent === ''
  //           ? (indent += indentItem)
  //           : (indent = indentChild + indent)

  //     let nextPath = path + '/' + dirent.name
  //     dirent.isDirectory() && print(nextPath, nextIndent)
  //   }
  // }
  async function print(path, indent = '') {
    const fileEntries = await fs.promises.readdir(path, { withFileTypes: true })

    for await (const dirent of fileEntries) {
      // Print out name
      console.log(indent, dirent.name, dirent, path)

      // Check and structure indentation
      let indentItem = ' \u251c\u2014\u2014',
        indentChild = ' \u2502  ',
        nextIndent =
          indent === ''
            ? (indent += indentItem)
            : (indent = indentChild + indent)

      let nextPath = path + '/' + dirent.name
      dirent.isDirectory() && print(nextPath, nextIndent)
    }
  }

  // let fileEnts = await fs.promises.readdir(path, { withFileTypes: true })

  // let fileNames = fileEnts
  //   .filter((fileEnt) => fileEnt.isDirectory())
  //   .map((fileEnt) => fileEnt.name)

  // console.log(fileNames)
  // }

  print(path).catch(console.error)

  // let level = 0
  // while (level < depth) {
  // fs.readdir(path, { withFileTypes: true }, (err, files) => {
  //   try {
  //     const filesToTree = files

  //     console.log(filesToTree)
  //   } catch (err) {
  //     console.error(err)
  //   }

  //   // level++
  // })
  // }
  // function tree(nameItemsObj, indent = '') {
  //   for (const [key, value] of Object.entries(nameItemsObj)) {
  //     // Print out name
  //     if (key === 'name') {
  //       console.log(indent, value)
  //     }

  //     // Check and structure items
  //     if ((key === 'items') & Array.isArray(value)) {
  //       let indentItem = ' \u251c\u2014\u2014',
  //         indentChild = ' \u2502  '

  //       indent === '' ? (indent += indentItem) : (indent = indentChild + indent)

  //       value.map((o) => {
  //         tree(o, indent)
  //       })
  //     }
  //   }
  // }
}

// tree('../../', 2) // repo root
tree('..', 2) // node dir
// tree('.', 2) // tree dir
