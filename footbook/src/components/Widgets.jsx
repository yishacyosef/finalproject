import React from 'react'
import '../css/Widgets.css'

function widgets() {
  return (
    <div className='widgets'>
        <iframe src= "https://developers.institute/en/learn-to-code-full-stack-coding-bootcamp-in-tel-aviv-israel/?utm_term=developers%20institute&utm_campaign=0.1.00.03+Branding+-+Israel&utm_source=adwords&utm_medium=ppc&hsa_acc=8301514719&hsa_cam=12177131932&hsa_grp=116148207966&hsa_ad=500192877751&hsa_src=g&hsa_tgt=kwd-436264259179&hsa_kw=developers%20institute&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQiAu62QBhC7ARIsALXijXSm2XXnwn4APYT24kBuDXFMdIUP1WIVNLacfS0Q_wwrDuD-RNKGSWMaAsDUEALw_wcB" 
        frameborder="0"
        width='340'
        height= '100%'
        style={{ border: 'none', overflow: 'hidden'}}
        scrolling = 'yes'
        allowTransparency = 'true'
        allow='encrypted-media'
        >
        </iframe>
    </div> 
  )
}

export default widgets