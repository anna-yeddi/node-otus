function tree(nameItemsObj, indent = '') {
  for (const [key, value] of Object.entries(nameItemsObj)) {
    // Print out name
    if (key === 'name') {
      console.log(indent, value)
    }

    // Check and structure items
    if ((key === 'items') & Array.isArray(value)) {
      let indentItem = ' \u251c\u2014\u2014',
        indentChild = ' \u2502  '

      indent === '' ? (indent += indentItem) : (indent = indentChild + indent)

      value.map((o) => {
        tree(o, indent)
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
      items: [
        {
          name: 3,
        },
        {
          name: 4,
        },
      ],
    },
    {
      name: 5,
      items: [
        {
          name: 6,
        },
        {
          name: 2,
          items: [
            {
              name: 3,
            },
            {
              name: 4,
            },
            {
              name: 2,
              items: [
                {
                  name: 3,
                },
                {
                  name: 4,
                },
              ],
            },
            {
              name: 2,
              items: [
                {
                  name: 3,
                },
                {
                  name: 4,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

tree(makeTreeObj)
console.log('\n ------------------- \n')
tree(makeTreeObjLong)
