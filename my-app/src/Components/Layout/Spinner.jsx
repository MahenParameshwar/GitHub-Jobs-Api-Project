import React from 'react';
import styled from 'styled-components';
import { ThemeToggleContext } from '../Context';

const SpinnerWrapper = styled.div`
    animation: rotate 1.5s linear infinite;

    @keyframes rotate {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
`
function Spinner(props)     
{
    return (
        <ThemeToggleContext.Consumer>
            {
                ({theme})=>{
                    return (
                        <SpinnerWrapper>
                            {(theme === 'dark') ? 
                            <img src="/images/github-purple.svg" alt=""/> :
                            <img src="/images/github-black.svg" alt=""/>
                            }
                        </SpinnerWrapper>
                    )  
                }
            }
                            
        </ThemeToggleContext.Consumer>

                    
    );
}

export default Spinner;