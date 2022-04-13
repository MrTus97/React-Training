import React from 'react';
import Button from '@atlaskit/button'
import styled from 'styled-components'

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left
`

function Todo(props) {
    return (
        <ButtonStyled shouldFitContainer={true}>
            {props.todo.name}
        </ButtonStyled>
    );
}

export default Todo;