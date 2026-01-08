import React, { JSX } from 'react'
import Card from '../Card/Card'

interface Props {}

const CardList: React.FC<Props> = (props: Props) : JSX.Element => {
  return (
    <div>
        <Card title="Barry Lyndon" description="An Irish rogue wins the heart of a rich widow and assumes her dead husband's aristocratic position in 18th-century England." releaseDate={1975} imageUrl="https://m.media-amazon.com/images/M/MV5BNmM2MGQ5Y2UtYzA3ZC00ZDJlLTkwNDYtMjBmZGExZDJiN2RlXkEyXkFqcGc@._V1_.jpg" imdbId="tt0072684" />
        
        <Card title="Cidade de Deus (City of God)" description="In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin." releaseDate={2002} imageUrl="https://m.media-amazon.com/images/M/MV5BYjY4NGI5OTUtY2ZlZS00Zjk4LTk5N2MtN2JmYWVjNGNmMGRlXkEyXkFqcGc@._V1_FMjpg_UY2950_.jpg" imdbId="tt0317248" />

        <Card title="Goodfellas" description="The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito." releaseDate={1990} imageUrl="https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_FMjpg_UY2972_.jpg" imdbId="tt0099685" />

    </div>
  )
}

export default CardList