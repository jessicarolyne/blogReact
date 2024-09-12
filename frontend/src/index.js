import React from 'react'
import { Helmet } from 'react-helmet'
import {Link} from "gatsby"
import "./styles/global.css"

const IndexPage = () => (
  <div>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="Descrição da página inicial" />
    </Helmet>
    <h1>Bem-vindo ao meu site!</h1>
    <Link to="/about">Sobre</Link>
  </div>
)

export default IndexPage