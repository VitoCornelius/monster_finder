import React from 'react';
import './card-list.styles.css'

import {Card} from '../card/card.component'

export const CardList = ({sent_monsters}) => (
    <div className='card-lista'>
        { sent_monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
        ))}
    </div>
);