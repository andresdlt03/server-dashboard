import React from "react"

import { SearchField } from "../components"

interface TopbarProps {
  title: string
}

export const Topbar : React.FC<TopbarProps> = ({title}) => {
  return (
    <div className="topbar__container">

      <h1 className="title">{title}</h1>

      <SearchField />

    </div>
  )
}
