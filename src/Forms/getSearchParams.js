const getSearchParams = (searchString = '?') => {
  // Remove question mark
  // (e.g. `?foo=bar&baz=qux` -> `foo=bar&baz=qux`)
  const searchItems = searchString.slice(1)

  // Split variables
  // (e.g. `foo=bar&baz=qux` -> [ 'foo=bar', 'baz=qux' ])
  const searchPairs = searchItems.split('&')

  // Construct an object from pairs
  // (e.g. [ 'foo=bar', 'baz=qux' ] -> { foo: 'bar', baz: 'qux' })
  const searchParams = searchPairs.reduce((params, pair) => {
    const items = pair.split('=')
    params[items[0]] = items[1]
    return params
  }, {})

  return searchParams
}

export default getSearchParams
