import React from 'react'
import Layout from '../layout/layout'
import Menu from '../components/menu'

export default function NotFound() {
  return (
    <Layout title="404 Chords Not Found">
      <h3>Hup! Can't find those chords. Try another song.</h3>
      <Menu />
    </Layout>
  )
}
