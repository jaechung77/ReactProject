import React from 'react'
import Movie from './components/Movie'
import { Card } from 'semantic-ui-react'

class Mylist extends React.Component {
    
    render(){
        
         const amount = this.props.vods.filter(vod => vod.selected === true).reduce((acc, obj) => {
             return acc + obj.price
         }, 0)
        


        return(
            <div>
                <Card.Group itemsPerRow={6} stackable={true} doubling={true}> 
                    {this.props.vods.filter(vod => vod.selected === true).map(vod => <Movie key={vod.id} vod={vod} handleVodClick={this.props.handleVodClick} />)}                   */}
                </Card.Group>
            

                <div>
                    <div></div>
                    { <h1>Total amount is ${amount}</h1> }
                </div>
            </div>
        ) 
    }
}

export default Mylist