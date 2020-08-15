function tree(nameItemsObj, indent) {
  for (const [key, value] of Object.entries(nameItemsObj)) {
    // Print out name
    if (key === 'name') {
      console.log(indent, value)
    }

    // Indent items
    if ((key === 'items') & Array.isArray(value)) {
      // let indentItem = ' ├——',
      //   indentChild = ' │   └——'
      let indentItem = ' \u251c\u2014\u2014',
        indentChild = ' \u2502   \u2514\u2014\u2014'
      indent = indent === indentItem ? indentChild : indentItem

      value.map((item) => {
        tree(item, indent)
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

tree(makeTreeObj, '')
