/* tinderSwiper bot */

function tinderSwiper( status, rate ) {

    rate = Math.floor((Math.random() * ( ( rate ) ? rate * 1000 : 7500 ) ) + 1)

    let disabledCheck = () => {
        return ( document.querySelector('[aria-label="Like"][disabled]') ) ? true : false
    }

    let swipe = ( rate ) => {        
        if( disabledCheck() != null ) { 
            setInterval( (() => {
                let button =  document.querySelector('button[aria-label="Like"]')
                if ( button != null ) {
                    if( status == true ) { button.click() }
                }
            }), rate );
        }
    }

    if ( status == true ) {
        swipe()
    }
    
    return {

        swipe : () => {
            status = true
            swipe()
        },

        stop : () => {
            status = false
        }
    }
}
