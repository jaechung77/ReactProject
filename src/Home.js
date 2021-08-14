import React from 'react'
import Movie from './components/Movie'
import { Card } from 'semantic-ui-react'


const Home = ({ vods, handleVodClick}) => {
    return(

                <Card.Group itemsPerRow={6} stackable={true} doubling={true}> 
                        {vods.map(vod => <Movie key={vod.id} vod={vod} handleVodClick={handleVodClick} />)}
                </Card.Group>

    )            
}

export default Home