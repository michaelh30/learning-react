import React from 'react'

function Personal({formData, setFormData}) {
  return (
    <div className='personal-container'>
        <input type="text" placeholder='First Name' value={formData.firstName} onChange={(event) => setFormData({...formData, firstName: event.target.value})}/>
        <input type="text" placeholder='Last Name' value={formData.lastName} onChange={(event) => setFormData({...formData, lastName: event.target.value})}/>
        <input type="text" placeholder='Biodata' value={formData.biodata} onChange={(event) => setFormData({...formData, biodata: event.target.value})}/>
        <input type="dropdown" placeholder='Provinsi' value={formData.provinsi} onChange={(event) => setFormData({...formData, provinsi: event.target.value})}>
            {/* <div class="dropdown-content">DKI Jakarta</div>
            <div class="dropdown-content">Yogyakarta</div>
            <div class="dropdown-content">Bandung</div>
            <div class="dropdown-content">Bogor</div> */}
        </input>
        <input type="dropdown" placeholder='Kota' value={formData.kota} onChange={(event) => setFormData({...formData, kota: event.target.value})}/>
        <input type="dropdown" placeholder='Kecamatan' value={formData.kecamatan} onChange={(event) => setFormData({...formData, kecamatan: event.target.value})}/>
        <input type="dropdown" placeholder='Kelurahan' value={formData.kelurahan} onChange={(event) => setFormData({...formData, kelurahan: event.target.value})}/>
    </div>
  )
}

export default Personal