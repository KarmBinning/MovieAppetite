import React from 'react'

interface Props {
    title: string;
    description: string;
    releaseDate: number;
    imageUrl: string;
    imdbId: string;
};

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img src={props.imageUrl} alt='Movie Poster' />
        <div className='details'>
            <h2>{props.title}</h2>
            <p>
                <b>Release Date:</b>&nbsp;<label>{props.releaseDate}</label><br/>
                <label>{props.imdbId}</label>
            </p>
        </div>
        <p className='info'>
            <i>
                {props.description}
            </i>
        </p>
    </div>
  )
}

export default Card