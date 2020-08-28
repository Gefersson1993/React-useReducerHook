import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('Me mostre de otro manera');    
    return (
        <small>
            {value}
        </small>
    )
});
