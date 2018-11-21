// /* eslint-disable no-undef */

// import React, { Component } from 'react'

// import { connect } from 'react-redux'

// import { loadComics } from '../actions'
// import Comics from '../components/comic_info'

// const loadData = props => {
//     const { } = props
//     props.ComicPage(fullName);

// }

// class ComicPage extends Component {
//     componentWillMount() {
//         loadData(this.props)
//     }

//     // componentWillReceiveProps(nextProps) {
//     //     if (nextProps.fullName !== this.props.fullName) {
//     //         loadData(nextProps)
//     //     }
//     // }

//     handleLoadMoreClick = () => {
//         this.props.ComicPage(this.props.);
//     }

//     renderUser(user) {
//         return <User user={user} key={user.login} />
//     }

//     render() {
//         const { repo, owner, name } = this.props
//         if (!repo || !owner) {
//             return <h1><i>Loading {name} details...</i></h1>
//         }

//         const { stargazers, stargazersPagination } = this.props
//         return (
//             <div>
//                 <Repo repo={repo}
//                     owner={owner} />
//                 <hr />
//                 <List renderItem={this.renderUser}
//                     items={stargazers}
//                     onLoadMoreClick={this.handleLoadMoreClick}
//                     loadingLabel={`Loading stargazers of ${name}...`}
//                     {...stargazersPagination} />
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state, ownProps) => {
//     // We need to lower case the login/name due to the way GitHub's API behaves.
//     // Have a look at ../middleware/api.js for more details.
//     const login = ownProps.match.params.login.toLowerCase()
//     const name = ownProps.match.params.name.toLowerCase()

//     const {
//         pagination: { stargazersByRepo },
//         entities: { users, repos }
//     } = state

//     const fullName = `${login}/${name}`
//     const stargazersPagination = stargazersByRepo[fullName] || { ids: [] }
//     const stargazers = stargazersPagination.ids.map(id => users[id])

//     return {
//         fullName,
//         name,
//         stargazers,
//         stargazersPagination,
//         repo: repos[fullName],
//         owner: users[login]
//     }
// }

// export default
//   connect(
//     mapStateToProps,
//     {
//         ComicPage,

//     }
//   )(ComicPage)
