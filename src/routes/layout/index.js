import React from 'react'
import { Switch, Route } from 'react-router-dom'
/* Pages containers*/
import Gnomes from '../../pages/gnomes'
import Trolls from '../../pages/trolls'
import ErrorPage from '../../pages/error'
/* Layout components */
import Header from '../../components/header'
import Footer from '../../components/footer'

import style from './style.css'

const Layout = () => {
  return (
    <div className={style.page}>
      <Header />
      <main className={style.main}>
        <Switch>
          <Route exact path="/" render={() => <Gnomes />} />
          <Route exact path="/trolls" render={() => <Trolls />} />
          <Route render={() => <ErrorPage />} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
