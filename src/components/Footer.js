import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='container-fluid footer mt-5'>
                <div className='row pt-5'>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <h5 className='text_font text-center pb-4'>Address</h5>
                        <p className='text-center'>20 Second District, Qism Al-Shorouk, Cairo </p>
                        <p className='text-center'>Governorate 11211</p>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <h5 className='text_font text-center pb-4'>Phone</h5>
                        <p className='text-center'>+201225969983</p>
                        <p className='text-center'>+201005679872</p>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <h5 className='text_font text-center pb-4'>E-Mail</h5>
                        <p className='text-center'>+Medoo1551roshdy@gmail.com </p>
                        <p className='text-center'>+Bnroshdy@gmail.com </p>
                    </div>
                </div>
                <div className='row'>
                    <p className='text-center py-3'>© 2023 Mahmoud Roshdy. All rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer
