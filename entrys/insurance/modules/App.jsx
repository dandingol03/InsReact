/**
 * Created by dell on 2016/10/27.
 */
import React from 'react';
import { render } from 'react-dom';
import Container from '../modules/Container.jsx';


Boot()

function Boot()
{
    render(
        <Container>
        </Container>
        , document.getElementById('root'))
}


