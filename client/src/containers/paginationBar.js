import React,{Component} from 'react'
import {pageNumbers} from '../components/pageNumbers'
import {connect} from 'react-redux'
import {pageTotalSelector} from '../middleware/reselect'
import {Link} from 'react-router-dom'

class PaginationBar extends Component{
componentDidMount(){

}


    
//refacter all used consts

render(){
    console.log(this.props)

    return ( <div> 
                <ul className="pagination grey darken-4"> 
                <li className=''>
            <Link to={this.props.nextUrl(null,-this.props.path)}>
                <i className="material-icons">first_page</i></Link></li>
                <li className=''><Link to={this.props.nextUrl(null,-1)}><i className="material-icons">chevron_left</i></Link></li>
       
          {pageNumbers(Math.ceil(this.props.total.data.total/20),this.props.path)}
          <li className=''>
            <Link to={this.props.nextUrl(null,1)}>
                <i className="material-icons">chevron_right</i></Link></li>
          <li className=''>
            <Link to={this.props.nextUrl(null,(Math.ceil(this.props.total.data.total/20)-this.props.path))}>
                <i className="material-icons">last_page</i>
            </Link></li>
                </ul>
            </div> )



}
}

const mapStateToProps = (state) => {
    return {
        total: pageTotalSelector(state),
    }
}



export default connect(
    mapStateToProps,
    { pageNumbers }
  )(PaginationBar);
  