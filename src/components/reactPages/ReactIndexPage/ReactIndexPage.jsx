/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import SlateIntro from '../../templates/slates/SlateIntro'
import SlateSummary from '../../templates/slates/SlateSummary'
import SlateProjects from '../../templates/slates/SlateProjects'
import SlateServices from '../../templates/slates/SlateServices'
import SlateHistory from '../../templates/slates/SlateHistory'
import Layout from '../../templates/layouts/Layout'
import SlateValue from '../../templates/slates/SlateValue/SlateValue'
import SlateClose from '../../templates/slates/SlateClose'

const ReactIndexPage = (props) => {
	return (
		<>
			<Layout>
				<SlateIntro sectionBg='background' />
				<SlateSummary sectionBg='revOverlay5' />
				<SlateProjects
					project1Bg='transparent'
					project1NumberColor='revOverlay95'
					project2Bg='blackSurface'
					project2TextColor='revText'
					project2NumberColor='revOverlay2'
					project3Bg='transparent'
				/>
				<SlateServices sectionBg='overlay3' />
				<SlateValue sectionBg='darkBackground' />
				<SlateHistory sectionBg='fullWhite' />
				<SlateClose sectionBg='overlay1' />
			</Layout>
		</>
	)
}

export default ReactIndexPage
