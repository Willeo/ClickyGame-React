import React from 'react';
import { Col, Row } from './grid';
import './Header.css';
let styles = {
    h1: '5.5em',
    backgroundColor: 'green',
    color: 'white',
};
export const Header = ({ guess, score, topScore }) => (
    <div className="jumbotron" style={styles}>
        <Row>
            <Col size="6">
                <h1 className="text-center">Memory Game</h1>
            </Col>
            <Col size="6">
                <h4 className="text-center">{guess ? 'You guessed correctly!' : 'You guessed incorrectly.'}</h4>
            </Col>
            <Col size="6">
                <h4 className="text-center">
                    Score:{score} | Top Score:{topScore}
                </h4>
            </Col>
        </Row>
    </div>
);
