import React from "react";

const Hello = (props) =>{
    var returnString = "";
    if(props.name){
        returnString =  <h1>Hello, {props.name}!</h1>;
    }else{
        returnString =  <h1>Hello, Stranger!</h1>;
    }

    return <>{returnString}</>;
}

export default Hello;