import React from 'react';
import { Redirect } from 'react-router-dom'
import { redirects } from '../constants/Redirects'

export default ({location}) => {
  const foundPath = redirects.find(redirect => redirect.from === location.pathname)
  if (!foundPath) {
    return(
      <div>404 not found lol</div>
    )
  }
  const whereTo = redirects.find(redirect => redirect.from === location.pathname).to
  return(
    <Redirect to={whereTo} />
  )
};
