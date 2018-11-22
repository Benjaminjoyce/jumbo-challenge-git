import React,{Component} from 'react'
import {pageNumbers} from '../components/pageNumbers'
import {connect} from 'react-redux'
class PaginationBar extends Component{


render(){
    return ( <div> 
                <ul className="pagination grey darken-4"> 
                whats in here?
                </ul>
            </div> )



}
}

const mapStateToProps = (state) => state



export default connect(
    mapStateToProps,
    { pageNumbers }
  )(PaginationBar);
  