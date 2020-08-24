const fs = require('fs')

// Check user input
if (process.argv.length <= 2) {
  console.log(
    'Error in executing: ' +
      __filename +
      '\n Include path/to/directory and optional flag (-d, --depth) with tree depth in number'
  )
  process.exit(-1)
}

const path = process.argv[2]
const depth =
  (process.argv[3] === '-d' || process.argv[3] === '--depth') &&
  Number(process.argv[4])

function tree(path, depth = 0) {
  async function print(path, indent) {
    // const dir = await fs.promises.opendir(path).catch(console.error)
    const dir = await fs.promises
      .readdir(path, { withFileTypes: true })
      .catch(console.error)

    console.log(dir, 'for path and indent: ', path, indent)
    // Print out name
    console.log(indent, dir.name)

    for await (const dirent of dir) {
      // Check and structure indentation
      const INDENT_CORNER = ' \u251c\u2014\u2014'
      const INDENT_VERTICAL = ' \u2502  '
      const nextIndent =
        indent === ''
          ? (indent += INDENT_CORNER)
          : (indent = INDENT_VERTICAL + indent)

      let nextPath = path + '/' + dirent.name
      // dirent.isFile() && print(nextPath, indent)
      dirent.isDirectory() && print(nextPath, nextIndent)
    }
  }

  print(path, (indent = '')).catch(console.error)
  // }
  // async function print(path, indent = '') {
  //   const fileEntries = await fs.promises.readdir(path, { withFileTypes: true })

  //   for await (const dirent of fileEntries) {
  //     // Print out name
  //     console.log(indent, dirent.name, dirent, path)

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
  // async function print(path, indent = '') {
  //   const fileEntries = await fs.promises.readdir(path, { withFileTypes: true })

  //   console.log(indent, fileEntries.name)
  //   let dirNames = fileEntries
  //     .filter((dir) => dir.isDirectory())
  //     .map((dir) => console.log(indent, dir.name))
  //   let fileNames = fileEntries
  //     .filter((file) => file.isFile())
  //     .map((file) => console.log(indent, file.name))

  //   console.log(dirNames, fileNames)

  //   // for await (const dirent of fileEntries) {
  //   //   // Print out name
  //   //   console.log(indent, dirent.name, dirent, path)

  //   //   // Check and structure indentation
  //   let indentItem = ' \u251c\u2014\u2014',
  //     indentChild = ' \u2502  ',
  //     nextIndent =
  //       indent === '' ? (indent += indentItem) : (indent = indentChild + indent)

  //   let nextPath = path + '/' + dirent.name
  //   dirent.isDirectory() && print(nextPath, nextIndent)
  // }

  // let fileEnts = await fs.promises.readdir(path, { withFileTypes: true })

  // let fileNames = fileEnts
  //   .filter((fileEnt) => fileEnt.isDirectory())
  //   .map((fileEnt) => fileEnt.name)

  // console.log(fileNames)
  // }

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
// tree('../../node', 2) // node dir
// tree('../tree', 2) // tree dir
tree(path, depth)
