import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'
import { PreviewProps } from '../../types/PreviewProps'

const IndexPagePreview = (props: PreviewProps) => {
  const data = props.entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
