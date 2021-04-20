import React from 'react'
import { AlbumView } from '../../model/Search'
import { AlbumCard } from './AlbumCard'

interface Props {
   items: AlbumView[]
}

export const AlbumGrid = ({ items }: Props) => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-4 no-gutters">
                {items.map(item => <div className="col mb-4" key={item.id}>
                    <AlbumCard item={item} />
                </div>)}
            </div>
        </div>
    )
}
