import React from 'react'
import { Link } from 'react-router-dom'
import { AlbumView } from '../../model/Search'

interface Props {
    album: AlbumView
}

export const AlbumCard = ({ album }: Props) => {
    return (
        <Link to={`/albums/${album.id}/`} className="card h-100">
            <img src={album.images[0].url} className="card-img-top" alt={album.name} />

            <div className="card-body">
                <h5 className="card-title">{album.name}</h5>
            </div>
        </Link>
    )
}
