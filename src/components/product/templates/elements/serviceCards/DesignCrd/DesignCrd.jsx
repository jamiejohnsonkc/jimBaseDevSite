/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import ServiceCard from '../../../layouts/ServiceCard'

import AdobeXd from '../../../../../../svg/assets/serviceGlyphs/adobeXd.svg'
import Figma from '../../../../../../svg/assets/serviceGlyphs/figmaGlyph.svg'
import CapabilitiesIconsBar from '../../CapabilitiesIconsBar'

// const DesignGlyphs = (props) => (
// 	<>
// 		<AdobeXd
// 			style={{
// 				width: '2.618em',
// 				height: '2.618em',
// 				marginRight: '.25em',
// 				overflow: 'visible',
// 			}}
// 		/>

// 		<Figma
// 			style={{ width: '2.618em', height: '2.618em', overflow: 'visible' }}
// 		/>
// 	</>
// )

const DesignCrd = (props) => (
    <>
        <ServiceCard
            compImage={
                <CapabilitiesIconsBar
                    capabilitiesIcon1={<AdobeXd />}
                    capabilitiesIcon2={<Figma />}
                />
            }
            visualWidth="6.25em"
            headingText="Designing your digital product"
            textText="Polished and professional design for UX/UI, engagement and messaging to make your brand shine."
            linkText="Work samples"
            iconName="SolidNorthEastArrow"
        />
    </>
)

DesignCrd.propTypes = {}

DesignCrd.defaultProps = {}

export default DesignCrd
