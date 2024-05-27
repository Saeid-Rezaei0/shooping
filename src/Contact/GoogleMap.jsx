import React from 'react'

function GoogleMap() {
    return (
        <div className='map-area'>
            <div className="maps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1703231.517702065!2d47.110033267050284!3d33.51115690607831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fec2860fa91d733%3A0x51be49917fd7bf3a!2sLorestan%20Province%2C%20Iran!5e0!3m2!1sen!2sae!4v1716221525898!5m2!1sen!2sae"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
         </div>
        </div>
    )
}

export default GoogleMap