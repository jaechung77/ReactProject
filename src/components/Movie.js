import React from 'react'
import { Card, Image, Label, Icon } from 'semantic-ui-react'

const IMGSERVER = "http://www.mega-trans.co.kr/sub/vtopia/"

class Movie extends React.Component {

    render(){

         let selected = this.props.vod.selected
           
        const imgsrc = IMGSERVER + this.props.vod.image
        return (
            <Card key={this.props.vod.id} className='fluid' style={{backgroundColor: 'black' }}  onClick={()=>this.props.handleVodClick(this.props.vod.id)}>
                <Image size='large' src={imgsrc} wrapped ui={false}  />          
                <Card.Content>
                <Card.Description size='tiny' textAlign='center' style={{color: 'white'}}>{this.props.vod.genre}</Card.Description>
                <Label attached="bottom right" color="black">
                    <Icon name="dollar" /> {this.props.vod.price}
                </Label>
                <Label attached="bottom left" color={selected? "yellow" : "blue" } >
                    {selected? "Unselect" : "Select"}
                </Label>               
                </Card.Content>
            </Card>
        )
    }
}

export default Movie