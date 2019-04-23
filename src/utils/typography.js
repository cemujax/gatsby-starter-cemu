import Typography from 'typography'
import judahTheme from 'typography-theme-judah'

judahTheme.overrideThemeStyles = () => {
  return {
    a: {
      color: `#289AFF`,
      textDecoration: `none`,
    },
    'a:hover': {
      color: `#ce1458`,
    },
  }
}

const typography = new Typography(judahTheme)

export const { scale, rhythm, options } = typography
export default typography
