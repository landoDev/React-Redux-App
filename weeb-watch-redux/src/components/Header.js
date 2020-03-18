
import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
    background-color: #F85B1A;
    border: 5px solid  #072083;
    margin: 0 auto;
    width: 100%;
    .title-bg{
        background-color: white;
        margin: 0 auto;
        margin-top: 2%;
        margin-bottom: 2%;
        width: 50%;
        border-radius: 50%;
        border: 2px solid black;

        .title-content{
            padding: 2%;
        }
        h1, p{
            color: #000000;
            font-family: 'Shojumaru' ;
            text-shadow: 1px 1px #8A9294;
        }
    }
`;

const Header = () =>{
    return(
        <HeaderDiv>
            <div className='title-bg'>
                <div className='title-content'>
                    <h1 className='title'>Weeb Watch</h1>
                    <p className= 'subtitle'>Click the button below to get started</p> 
                </div>
            </div>
        </HeaderDiv>
    )


}

export default Header