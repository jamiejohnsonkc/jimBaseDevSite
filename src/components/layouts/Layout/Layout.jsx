/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
<<<<<<< HEAD
import Main from '../../Main'
import MainWrapper from '../../MainWrapper'
=======

import Main from '../../../../../gatsby-theme-jim-components/src/components/containers/Main'

import MainWrapper from '../../../../../gatsby-theme-jim-components/src/components/containers/MainWrapper'
>>>>>>> 9b00277552e7c548858336731720a4add1504472

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
