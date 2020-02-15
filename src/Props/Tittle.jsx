import React from 'react';
export default function Tittle(props) {
    let customColor = 'black';
    let customFontWeight = 'normal'
    if (props.style && props.style.color) {
        customColor = props.style.color;
    }

    if (props.style && props.style.fontWeight) {
        customFontWeight = props.style.fontWeight;
    }
    
    if (props.small == true) {
        return (
            <h4 style={{color: customColor, fontWeight: customFontWeight}}>{props.children}</h4>
        )
    } else {
        return (
            <h1>{props.children}</h1>
        );
    }
}