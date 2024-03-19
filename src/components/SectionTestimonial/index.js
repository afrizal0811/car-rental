import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import { dataTestimonials, sliderSetting } from './help'
import './index.css'

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    const starComponent = (
      <div>
        <i className='fa fa-star' />
        <i className='fa fa-star' />
        <i className='fa fa-star' />
        <i className='fa fa-star' />
        <i className='fa fa-star' />
      </div>
    )

    return (
      <div>
        <section
          id='testi'
          className='testi-section'
        >
          <div className='testi-title'>
            <h1>Testimonial</h1>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </div>
          <div className='testi-card-container'>
            <Slider
              ref={(c) => (this.slider = c)}
              {...sliderSetting}
            >
              {dataTestimonials.map((item, index) => {
                return (
                  <div key={index}>
                    <Row>
                      <Col className='p-2'>
                        <Card className='testi-card-content'>
                          <div className='testi-image'>
                            <img
                              src={item.icon}
                              alt='icon'
                            />
                          </div>
                          <div>
                            <div className='testi-star'>{starComponent}</div>
                            <div className='testi-text'>
                              <p style={{ fontWeight: '700' }}>{item.text}</p>
                              <p>
                                {item.name} {item.age}, {item.location}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                )
              })}
            </Slider>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a
              className='btn'
              onClick={this.previous}
              style={{ padding: '0', marginTop: '1.5rem' }}
            >
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                size='2x'
                className='ikon'
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              className='btn'
              onClick={this.next}
              style={{ padding: '0', marginTop: '1.5rem' }}
            >
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                size='2x'
                className='ikon'
              />
            </a>
          </div>
        </section>
      </div>
    )
  }
}
