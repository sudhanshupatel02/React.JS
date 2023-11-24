import React from 'react'
import Card from './Card';
const Tours = (props) => {

    function removeHandler(id) {
        console.log(id);
        props.removeTours(id);
    }

    return (
        <div className='container'>
            <div>
                <h2 className='title'>Tours with beauty</h2>
            </div>
            <div className='cards'>
                {
                    props.tours.map((tour) => {  //! aap jabhi kisi list ke uper map() chala rahe hai ho appa ho waha hame sha key pass karni chahiye    
                        return <Card {...tour} key={tour.id} removeTour={removeHandler} />;  //! koi bhi unick identified nhi hai to waha index pass kar sakte hai
                    })
                }
            </div>
        </div>
    )
}

export default Tours;