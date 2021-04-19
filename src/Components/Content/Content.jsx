import React from 'react'
import { Section } from '../Section'
import './content.css'
import {Button} from '../Button/Button'
import {
  TextSection,
  ImageSection,
} from '../Style'
import { Mylogo } from '../../Assets/logo'
import Brass from '../../Assets/brass.png'
import { Link } from 'react-router-dom'
export function Content() {
  return (
    <main className="container">
      <Section clsName="top-content">
        <span className="top-content-span">coming soon</span>
        <p className="top-content-text">
          Up to ₦10m in financing to support your business.
        </p>
      </Section>
      <Section clsName="section">
        <TextSection>
          <h5>bank better</h5>
          <h1>made for business current account.</h1>
          <p>
            Powerful yet simple. Great human support. Open an account in{' '}
            <strong>10 minutes!</strong>
          </p>
          <Link to="/Login">
            <Button btnText="Login" />
          </Link>

          <small>
            <span>
              <i class="fas fa-check"></i>
            </span>
            If you need any help, call +234-1-700-1760
          </small>
        </TextSection>
        <ImageSection>
          <img
            className="span-img"
            src={Brass}
            alt=""
          />
        </ImageSection>
      </Section>
    </main>
  )
}
