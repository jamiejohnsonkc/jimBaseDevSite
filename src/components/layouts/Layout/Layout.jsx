/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import Main from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Main'

import MainWrapper from '../../../../../../../gatsby-theme-jim-components/src/components/containers/MainWrapper'

const Layout = (props) => {
    return (
        <>
            <MainWrapper>
                <Main>{props.children}</Main>
            </MainWrapper>
        </>
    )
}
export default Layout
