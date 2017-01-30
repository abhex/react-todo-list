/**
 * Created by kwanso on 30/01/2017.
 */
import React, {Component} from 'react'

class TextDisplay extends Component{

    handleDel(){
        this.props.deleteLetter()
    }

    render(){
        return (
            <div>
              <div>I am displaying text: {this.props.textvalue}</div>
              <button onClick={this.handleDel.bind(this)}>Delete Letter</button>
            </div>
        )
    }
}

export default TextDisplay

