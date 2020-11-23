//* shared properties/values


export default {
  //* Global
  main: {
    height: ['100%', '100%', '100%', '100%', '100%', '100%'],
    zIndex: 1,
  },

  section: {
    minHeight: ['454px', null, '700px', null, null, null],
    zIndex: 1,
    py: 6,

    '@media(min-height:639px)': {
      minHeight: '100vh',
    },
  },
  article: {
    // flex: '0 0 auto',
    // minWidth: '0',
    // px: [0, 2, 0, 4, 5, 7],
  },
  container: {
    maxWidth: ['container.5', null, null, 'container.4', null, 'container.3'],
    height: '100%',
    position: 'relative',
  },
  containerFlexDirectionColRow: {
    flexDirection: ['column', 'column', 'row', 'row', 'row', 'row'],
  },

  //* ValueSection Styles
  sectionValue: {
    height: [null, null, '120vh', 'unset', 'unset', 'unset'],
    minHeight: ['800px', '2000px', '906px', '1075px', '1536px', '1536px'],
    px: [2, 4, 1, 4, null, null],
    py: [6, 7, 6, 6, 7, 4],
    scrollSnapType: 'y mandatory',
    //! scrollSnapAlign: [null, 'start', 'start', 'start', 'start','start'],
    zIndex: 1,
  },
  containerValue: {
    maxWidth: ['container.5', null, null, 'container.5', 'container.4', null],
    height: '100%',
    position: 'relative',
  },
  articleValue: {
    px: [0, 0, 0, 2, 6, 6],
  },

  //* HistorySection Styles
  sectionHistory: {
    py: 2,
    width: '100%',
    display: 'block',
    scrollSnapAlign: [null, 'start', 'start', 'start', 'center'],
    zIndex: 1,
  },

  //* ProjectsSection Styles
  workSampleArticle: {
    alignItems: 'normal',
    alignSelf: 'center',
    display: 'flex',
    flex: [1, 1, '1 1 0%', '1 1 0%', '1 1 0%'],
    flexWrap: 'wrap',
    pb: [0, 0, 0, 0, 0, 0],
    pl: [0, 4, 0, 0, 0, 0],
    position: 'relative',
    pr: [0, 4, 0, 0, 0, 0],
    pt: [0, 0, 0, 0, 0, 0],
  },

  //* Services Styles



//* DevSkills Styles
skillsSection: {
	overflow: ['hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden'],
  height: ['auto', 'auto', '100vh', '100vh', '100vh', '100vh'],
  minHeight: '100vh',
  position: ['relative', 'relative', 'relative', 'fixed', 'fixed', 'fixed'],
  py: [null, null, null, null, 0, 0],
  top: [null, null, null, null, 0, null],
  left: [null, null, null, null, 0, null],
  scrollbarWidth: 'none',
				'&::-webkit-scrollbar': {
					display: ['block', 'block', 'none', 'none', 'none', 'none'],
				},
},

skillsContainer: {
  maxWidth: ['container.5', null, null, 'container.5', null, 'container.5'],
},
}