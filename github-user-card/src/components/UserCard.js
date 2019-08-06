import React, { Component } from 'react'

class UserCard extends Component {
    constructor(props) {
        super(props)
       this.state = {
        cardData: []
    }
    }
     

    componentDidUpdate(){
        if(this.state.cardData !== this.props.userCard){
        this.setState({cardData: this.props.userCard})
        }
    console.log('userCard .this.state: ',this.state)
    };

    render() {
        return (
            <>
            <div>
                hello: {this.state.cardData.login}
            </div>
            </>
        )
    }
}

export default UserCard;