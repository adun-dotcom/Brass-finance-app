import styled from 'styled-components'

export const TextSection = styled.div`
  width: 350px;
  text-align: left;
  h5 {
    text-transform: uppercase;
  }
  h1 {
    text-transform: capitalize;
    font-size: 3rem;
  }
  p {
    color: #6c7884;
    padding-bottom: 4rem;
  }
  strong {
    color: #333d47;
  }
  small {
    display: block;
    margin-top: 3.563rem;
  }
  span {
    width: 1.5625rem;
    height: 1.5625rem;
    padding: 0.3125rem;
    border-radius: 4px;
    margin-right: 0.625rem;
    background: linear-gradient(270deg, rgba(226, 236, 253, 0), #e2ecfd);
  }
  .fa-check {
    color: #3e7eee;
  }
`

export const ImageSection = styled.div`
  position:relative;
  width: 50%;
  height: auto;
  
  img{
    width:100%;
  }

  .span-logo{
    position:absolute;
    top:60%;
    z-index:4;
    left:-15%;

  }
  .span-img{
    position:absolute;
    top:53%;
    right:65%;
    width:350px;
  }
`
export const ButtonTag = styled.button`
  width: ${({ btnWidth }) => (btnWidth ? btnWidth : '100px')};
  padding: ${({ padding }) => (padding ? padding : '1rem')};
  border-radius: 5px;
  outline: none;
  background: #3e7eee;
  border: 1px solid #3e7eee;
  color: #fff;
  
  &:hover {
    opacity: 0.9;
  }
`
export const NavTag = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 70px;
  height: 50px;
  padding: 3rem 0;

  a {
    text-decoration: none;
    font-size: 1.6rem;
  }

  .link-tag {
    color: #333d47;
  }
`
