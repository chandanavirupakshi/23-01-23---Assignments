import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
function BasicProgressbar() {
  return (
    <ProgressBar now={50} />
  )
}
export default BasicProgressbar;