const active = {
  'background-color': 'rgb(52, 183, 188)',
  'color': 'white'
}

const button = (props) => ({
  'border': '1px solid',
  'color': 'rgb(52, 183, 188)',
  'padding': '0.5em 1em',
  'font': 'inherit',
  'background-color': 'transparent',
  'border-radius': '0.25em',

  ':hover': active,
  ':active': active
})

export default button
