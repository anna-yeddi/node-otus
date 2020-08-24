function tree(nameItemsObj, indent = '') {
  for (const [key, value] of Object.entries(nameItemsObj)) {
    // Print out name
    if (key === 'name') {
      console.log(indent, value)
    }

    // Indent items
    if ((key === 'items') & Array.isArray(value)) {
      // Check and structure indentation
      const INDENT_BRANCH = ' \u251c\u2014\u2014' // ' ├——'
      const INDENT_VERTICAL = ' \u2502  ' // ' │ '

      indent =
        indent === ''
          ? (indent += INDENT_BRANCH)
          : (indent = indent.slice(0, -4) + INDENT_VERTICAL + indent.slice(-4))

      // Apply to each element in array
      value.map((item, i) => {
        // Check if it's a last child or its descendant and edit indentation
        const UNICODE_CORNER = '\u2514' // '└'
        const UNICODE_BRANCH = '\u251c' // '├'
        const UNICODE_VERTICAL = '\u2502' // '│'

        const isLastChild = i === value.length - 1
        let nextIndent = ''

        // Update indentation
        if (!isLastChild) {
          indent.includes(UNICODE_CORNER)
            ? (nextIndent += indent
                .replace(UNICODE_CORNER, UNICODE_BRANCH)
                .replace(UNICODE_VERTICAL, ' '))
            : (nextIndent += indent)
        } else {
          indent.includes(UNICODE_CORNER)
            ? (nextIndent += indent
                .replace(UNICODE_VERTICAL, ' ')
                .replace(UNICODE_BRANCH, UNICODE_CORNER))
            : (nextIndent += indent.replace(UNICODE_BRANCH, UNICODE_CORNER))
        }

        // Recursively print out children
        tree(item, nextIndent)
      })
    }
  }
}

const makeTreeObj = {
  name: 1,
  items: [
    {
      name: 2,
      items: [{ name: 3 }, { name: 4 }],
    },
    {
      name: 5,
      items: [{ name: 6 }],
    },
  ],
}

const makeTreeObjLong = {
  name: 1,
  items: [
    {
      name: 2,
      items: [{ name: 3 }, { name: 4 }],
    },
    {
      name: 5,
      items: [
        { name: 6 },
        {
          name: 7,
          items: [
            { name: 8 },
            { name: 9 },
            {
              name: 0,
              items: [{ name: 1 }, { name: 2 }],
            },
            {
              name: 3,
              items: [{ name: 4 }, { name: 5 }],
            },
          ],
        },
      ],
    },
  ],
}

tree(makeTreeObj)
console.log('------------')
tree(makeTreeObjLong)
