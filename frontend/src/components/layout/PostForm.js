import React from 'react'
import { Input } from '@mui/material'

const PostForm = () => {
  const [file, setFile] = React.useState(null)

  const handleChange = (newFile) => {
    setFile(newFile)
  }

  return (
    <Input type='file'/>
  )
}

export default PostForm