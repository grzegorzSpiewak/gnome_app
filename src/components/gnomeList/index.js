import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../modules/fetchGnomes/actions'
import GnomeListItem from '../gnomeListItem'
import Spinner from '../spinner'
import AnimatedWrap from '../animatedWrap'
import Button from '../button'
import style from './style.css'
/**
 * Class GnomesList component
 * Display all the gnomes fetched from server
 */
class GnomesList extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const { gnomes } = this.props.gnomesData
    if (gnomes.length === 0) {
      this.fetchGnomes()
    }
    this.toggleShow()
  }

  componentWillUnmount() {
    this.toggleShow()
  }

  handleClick() {
    this.fetchGnomes()
  }

  fetchGnomes() {
    const { offset, limit } = this.props.gnomesData
    const { fetchGnomes } = this.props.gnomesActions
    fetchGnomes(offset, limit)
  }

  toggleShow() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    const { gnomesData } = this.props
    const { show } = this.state
    const { gnomes, isFetching, stopFetching, error } = gnomesData

    if (error) {
      return (
        <AnimatedWrap in={show}>
          <section className={style.gnomes}>
            <h1 className={style.heading}>Something is wrong with server. Check your connection or try later</h1>
          </section>
        </AnimatedWrap>
      )
    }

    if (isFetching) {
      return (
        <AnimatedWrap in={show}>
          <section className={style.gnomes}>
            <Spinner />
          </section>
        </AnimatedWrap>
      )
    }

    return (
      <AnimatedWrap in={show}>
        <section className={style.gnomes}>
          <h1 className={style.heading}>Gnomes:</h1>
          <TransitionGroup
            component="div"
            className={style.list}
          >
          {
            gnomes.map(
              gnome =>
                <CSSTransition
                  key={gnome.id}
                  classNames={{
                    enter: style.slideEnter,
                    enterActive: style.slideEnterActive,
                    leave: style.slideExit,
                    leaveActive: style.slideExitActive
                  }}
                  timeout={700}
                  appear
                >
                  <GnomeListItem gnome={gnome} />
                </CSSTransition>
            )
          }
          </TransitionGroup>
          <div className={style.control}>
            {
              stopFetching ?
                <h1 className={style.heading}>No more gnomes</h1>
              :
                <Button
                  anchor="Load more"
                  type='button'
                  onClick={this.handleClick}
                />
            }
          </div>
        </section>
      </AnimatedWrap>
    )
  }
}

const mapStateToProps = state => ({
  gnomesData: state.gnomes
})

const mapDispatchToProps = dispatch => ({
  gnomesActions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(GnomesList)
