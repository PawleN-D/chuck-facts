import { injectGlobal } from '@emotion/css';

export const unit = 8;
export const colors = {
  primary: '#220a82',
  secondary: '#14cbc4',
  accent: '#e535ab',
  background: '#f7f8fa',
  grey: '#d8d9e0',
  text: '#343c5a',
  textSecondary: '#747790'
};

export default () => injectGlobal({
  [['html', 'body']]: {
    height: '100%',
  },
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "'Source Sans Pro', sans-serif",
    backgroundColor: colors.background,
    color: colors.text,
  },
  '#root': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  '*': {
    boxSizing: 'border-box',
  },

  [['h1', 'h2', 'h3', 'h4', 'h5', 'h6']]: {
    margin: 0,
    fontWeight: 'lighter',
    fontFamily: "'Brush Script MT'",
  },
  h1: {
    fontSize: 48,
    lineHeight: 1,
  },
  h2: {
    fontSize: 40,
  },
  h3: {
    fontSize: 36,
  },
  h5: {
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 4,
  },

  '.header': {
    display: "flex",
    color: colors.text,
    padding: '1rem',
    height: '100%',
    justifyContent: 'center',
  },

  '.img': {
    display: "flex",
    justifyContent: 'center',
  },

  '.main-heading': {
    display: "block",
    textAlign: 'center',
  },

  '.card': {
    display: "flex",
    color: colors.text,
    padding: '1rem',
    height: '100%',
    justifyContent: 'center',
    boxShadow:'rgba(0,0,0,0.65)',
  },

  '.info': {
    textTransform: 'capitalize',
    textAlign: 'center',
  },

  '.link': {
    textDecorationStyle: 'none',

  }

});

