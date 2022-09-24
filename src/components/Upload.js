import React from 'react'

function Upload({formData, setFormData}) {
  return (
    <div className='upload-container'>
        <input type="file" placeholder='Foto Selfie' value={formData.fotoSelfie} onChange={(event) => setFormData({...formData, fotoSelfie: event.target.value})}/>
        <input type="file" placeholder='Foto KTP' value={formData.fotoKTP} onChange={(event) => setFormData({...formData, fotoKTP: event.target.value})}/>
        <input type="file" placeholder='Foto Bebas' value={formData.fotoBebas} onChange={(event) => setFormData({...formData, fotoBebas: event.target.value})}/>
    </div>
  )
}

export default Upload