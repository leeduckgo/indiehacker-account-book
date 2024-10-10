import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import {
  ThemeProvider,
  TaskBar,
  GlobalStyle as ThemeGlobalStyle,
  List,
  ProgressBar,
  Tree,
  // TreeProps
} from "@react95/core"
import { Awfext326050 } from "@react95/icons/esm/react/awfext326050"
import { Qfecheck111 } from "@react95/icons/esm/react/Qfecheck111"
import Loading from "components/Loading"
import TaskList from "components/TaskList"

import * as S from "./styled"
import StyleBase from "../../styles/global"

const { icons } = Tree;

const treeNodes = {
  data: [
    {
      id: 0,
      label: 'Hackathon Prize from The Graph: $800',
      // TODO: make the icon random from the list of icons.
      // TODO: add the link to the income source.
      icon: <icons.FILE_EXECUTABLE variant="16x16_4" />,
    },
    {
      id: 1,
      label: 'The Income from IndieHackers Accelerator R1: $350',
      // TODO: make the icon random from the list of icons.
      icon: <icons.FILE_EXECUTABLE variant="16x16_4" />,
    },
    // {
    //   id: 2,
    //   label: 'Grant 0x02',
    //   // children: [
    //   //   {
    //   //     id: 3,
    //   //     label: 'Indie',
    //   //     children: [
    //   //       {
    //   //         id: 4,
    //   //         label: 'Weezer',
    //   //         icon: <icons.FILE_MEDIA variant="16x16_4" />,
    //   //         onClick: () => alert('nice!'),
    //   //       },
    //   //       {
    //   //         id: 5,
    //   //         label: 'Supergrass',
    //   //         icon: <icons.FILE_MEDIA variant="16x16_4" />,
    //   //       },
    //   //     ],
    //   //   },
    //   // ],
    // },
    // {
    //   id: 3,
    //   label: 'Others...',
    //   // children: [
    //   //   {
    //   //     id: 0,
    //   //     label: 'Fira Code.ttf',
    //   //     icon: <icons.FILE_FONT variant="16x16_4" />,
    //   //   },
    //   //   {
    //   //     id: 1,
    //   //     label: 'Journal.txt',
    //   //     icon: <icons.FILE_TEXT variant="16x16_4" />,
    //   //   },
    //   // ],
    // },
    // {
    //   id: 4,
    //   label: 'config.cfg',
    //   icon: <icons.FILE_SETTINGS variant="16x16_4" />,
    // },
    // {
    //   id: 5,
    //   label: 'random_file',
    //   icon: <icons.FILE_UNKNOWN variant="16x16_4" />,
    // },
  ],
};

const Sidebar = React.lazy(() => import("components/Sidebar"))
const MenuBar = React.lazy(() => import("components/MenuBar"))

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(true)
  const [readingMode, setReadingMode] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

  return (
    <ThemeProvider>
      <ThemeGlobalStyle />
      <StyleBase />
      <S.LayoutWrapper>
        {/* {!isMobile && (
          <TransitionPortal level="top">
            <React.Suspense fallback={<Loading left="7.5%" />}>
              <Sidebar />
            </React.Suspense>
          </TransitionPortal>
        )} */}

        {showModal && (
          <S.LayoutMain
            isMobile={isMobile}
            closeModal={closeModal}
            icon={
              <Awfext326050 variant="16x16_4" alt="Windows Explorer icon" />
            }
            title={isMobile ? "IndieHackers Account Book" : "IndieHackers Account Book"}
            menu={[
            ]}
          >
            <br></br>
            <h1>The account book of leeduckgo. 
              <a href="https://x.com/0xleeduckgo" target="_blank"> 👉 View my twitter.</a>
            </h1>
            <br></br>
            <p>The purpose of this account book is to record the income item and its type, so it could be optimized by <b>INTERATION</b>.</p>
            <br></br>
            <p> <b> 😎 Let's BUIDL PUBLIC and seesee👀 wht happens! </b></p>
            <br></br>
            <p>* <b>Time Period:</b> 2024.10.01 - 2024.12.31</p>
            <br></br>
            <p>* <b>Expected Income:</b> $ 10,000</p>
            <br></br>
            <ProgressBar width="200px" percent={11.5} />
            <br></br><br></br>
            <p>
            <Qfecheck111 variant="32x32_4" alt="Income" />
            Where do I get the income from?</p>
            <Tree {...treeNodes} />
          </S.LayoutMain>
        )}

        {!isMobile && (
          <TransitionPortal level="top">
            <React.Suspense fallback={<Loading right="2.5%" />}>
              <MenuBar
                setReadingMode={setReadingMode}
                readingMode={readingMode}
              />
            </React.Suspense>
          </TransitionPortal>
        )}
      </S.LayoutWrapper>
      <TransitionPortal level="top">
        <TaskBar
          list={
            <TaskList
              setReadingMode={setReadingMode}
              readingMode={readingMode}
              setShowModal={setShowModal}
            />
          }
        />
      </TransitionPortal>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
