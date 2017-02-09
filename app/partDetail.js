import React from 'react'

const PartDetail = (props) => {
  return (
    <tr className="part-detail-item">
        <td>{props.part.title}</td>
        <td>{props.part.revision}</td>
        <td>{props.part.format}</td>
      </tr>

    )
}

export default PartDetail;