import React from 'react'

const PartDetail = (props) => {
  return (
    <tr className="part-detail-item">
        <td>{props.partDets.format}</td>
        <td>{props.part}</td>
        <td>{props.part}</td>
      </tr>

    )
}

export default PartDetail;