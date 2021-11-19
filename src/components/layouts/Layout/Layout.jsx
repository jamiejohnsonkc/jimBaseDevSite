/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Main from '../../Main'
import MainWrapper from '../../MainWrapper'

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
