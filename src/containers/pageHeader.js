
import React from 'react'
import { Link } from 'components/Router'

var ids = require('short-id')

// Styles


export default function Header() {
  return (
    <React.Fragment>
      <Link to="/">{'<'} Back</Link>
    </React.Fragment>
  )
}

