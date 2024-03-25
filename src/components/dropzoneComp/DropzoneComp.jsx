import React from 'react'
import Dropzone from 'react-dropzone-uploader'

const DropzoneComp = (props) => {
  const { setIsLoading, handleUploaded } = props

  const handleChangeStatus = ({ remove }, status) => {
    if (status === 'preparing') {
      setIsLoading(true)
    } else if (status === 'done') {
      setIsLoading(false)
      handleUploaded()
      remove()
    }
  }

  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      maxFiles={1}
      multiple={false}
      canCancel={false}
      inputContent='Drop A File'
      accept='image/*'
      styles={{
        dropzone: { marginBottom: 20 },
      }}
    />
  )
}

export default DropzoneComp
