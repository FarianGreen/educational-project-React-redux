import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../Common/Preloader';
import { follow, unfollow, SetCurrentPage, SetTotalUsersCount, toggleFollowingInProgress, RequestUsers} from '../../Redux/Users-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/WithAuthRedirect';
import { GetUsers, GetPageSize,GetTotalUsersCount,GetCurrentPage, GetFetching, GetfollowingInProgress, getuserSuperselector  } from '../../Redux/UsersSelectors';



class UsersContainer extends React.Component {
    
    componentDidMount() { 
      this.props.RequestUsers(this.props.currentPage, this.props.pageSize);
    }
    
    onPageChenged= (pageNumber) =>{
        this.props.RequestUsers(pageNumber, this.props.pageSize);
    }
    
    render() {
        return( 
        <>
        { this.props.isFetching ? <Preloader/> : null}
        <Users TotalUsersCount={this.props.TotalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChenged={this.onPageChenged}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            followingInProgress= {this.props.followingInProgress}/>
        </>)
    }
    }

let mapStateToProps = (state)=> {
    return{
        
        users: GetUsers(state),
        pageSize: GetPageSize(state),
        TotalUsersCount: GetTotalUsersCount(state),
        currentPage: GetCurrentPage(state),
        isFetching: GetFetching(state),
        followingInProgress: GetfollowingInProgress(state)
    }
}



export default compose(withAuthRedirect,connect (mapStateToProps,{
    follow,
    unfollow,
    SetCurrentPage,
    toggleFollowingInProgress,
    RequestUsers
}))(UsersContainer)