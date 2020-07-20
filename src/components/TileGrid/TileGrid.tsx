import React from 'react'
import SquareTile from './Tile/SquareTile';
import StackGrid, { transitions } from "react-stack-grid";
import RectTile from './Tile/RectTile';

const { scaleDown } = transitions;

const TileGrid = () => {
    return (
        <StackGrid
            columnWidth={230}
            gutterWidth={20}
            gutterHeight={20}
            appear={scaleDown.appear}
            appeared={scaleDown.appeared}
            enter={scaleDown.enter}
            entered={scaleDown.entered}
            leaved={scaleDown.leaved}
        >
            <SquareTile />
            <RectTile />
            <SquareTile />
            <RectTile />
            <SquareTile />
            <RectTile />
            <SquareTile />
            <RectTile />
            <SquareTile />
            <RectTile />
            <SquareTile />
            <RectTile />
            <SquareTile />
            <RectTile />
            <SquareTile />
            <RectTile />
            <SquareTile />
            <RectTile />
            <SquareTile />
            <RectTile />
            <SquareTile />
            <RectTile />
            <SquareTile />
            <RectTile />
            <SquareTile />
            <RectTile />
            <SquareTile />
            <RectTile />
        </StackGrid>
    );
}

export default TileGrid;