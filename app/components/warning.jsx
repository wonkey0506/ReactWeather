import React,{Component} from 'react';



export default class Warning extends Component{

  constructor(){
    super();
  }

  propTypes:{
    message: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  }

  componentDidMount(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  };


  render() {
    var {title,message} = this.props;
    return(
      <div id = "error-modal" className = "reveal tiny text-center" data-reveal="">
        <h4 id="test">{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            close
          </button>
        </p>
      </div>
    );
  }
}
