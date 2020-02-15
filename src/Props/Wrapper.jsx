import React from 'react';
export default function Wrapper (props) {
    console.log('Wrapper props: ', props)
    return (

        <div style={{backgroundColor: 'green'}}>
            {props.children}
        </div>
    );
}
