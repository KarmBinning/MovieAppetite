import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img src='https://m.media-amazon.com/images/M/MV5BNmM2MGQ5Y2UtYzA3ZC00ZDJlLTkwNDYtMjBmZGExZDJiN2RlXkEyXkFqcGc@._V1_.jpg' alt='Movie Poster' />
        <div className='details'>
            <h2>Barry Lyndon</h2>
            <p>
                <b>Release Date:</b>&nbsp;<label>1975</label>
            </p>
        </div>
        <p className='info'>
            <i>
                An Irish rogue wins the heart of a rich widow and assumes her dead husband's aristocratic position in 18th-century England.
            </i>
        </p>
    </div>
  )
}

export default Card