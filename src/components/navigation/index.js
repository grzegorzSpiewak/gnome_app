import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.css'

const navLinks = [
  { path: '/', anchor: 'Gnomes', id: 'gnomes_1' },
  { path: '/trolls', anchor: 'Trolls', id: 'trolls_1' }
]

const rendeLinks = links => (
  links.map(link =>
    <Link
      to={link.path}
      className={style.item}
      key={link.id}
    >
      {link.anchor}
    </Link>
  )
)

const Navigation = props => (
  <nav className={style.nav}>
    <ul className={style.list}>
      { rendeLinks(navLinks) }
    </ul>
  </nav>
)

export default Navigation
