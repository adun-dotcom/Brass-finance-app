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

  @media (max-width:1024px){
    h5{
      font-size:2.2rem;
      margin-bottom:1rem;
    }
    p{
      font-size:2rem;
    }
    small{
      margin-bottom:3rem;
    }
  }

  @media (max-width:450px){
    text-align:center;
  }
`

export const ImageSection = styled.div`
  position:relative;
  height: auto;
  width:80%;
  margin-right:-150px;
  /* margin-left:90px; */
  
  .span-img{
    max-width:100%;
    width:900px;
    object-fit:fill;
  }

  @media (max-width:1024px){
    margin-right:0;
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

  @media (max-width: 1024px){
    width:100%;
    padding:3rem 5rem;
  }

  @media (max-width:450px){
    padding:3rem 1rem;
  }
`
// main section
export const HomeSection = styled.div`
  max-width: 100%;
  height: 100vh;
  padding: 50px 0 0 260px;

  .home-content {
    width: 100%;
    height: auto;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(131, 141, 177, 0.05),
      0 15px 40px rgba(126, 139, 190, 0.2);
    padding: 50px;
  }

  .flexed-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  @media (max-width: 1024px) {
    padding: 50px 0 0 200px;

    .home-content {
      width: 70%;
    }
  }

  @media (max-width: 450px) {
    max-width: 100%;
    height: auto;
    padding: 50px 0 0 100px;
    .home-content {
      width: 100%;
      height: auto;
      background-color: #fff;
      box-shadow: 0 5px 10px rgba(131, 141, 177, 0.05),
        0 15px 40px rgba(126, 139, 190, 0.2);
      padding: 10px;
    }
  }
`
// dashboard boxes
export const Finances = styled.div`
  width: 500px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  margin-bottom: 80px;
  padding: 30px;
  font-size: 20px;
  line-height: 2;
  color: #f5f5f5;
  background-color: ${({ color }) => (color ? color : '#4361ee')};

  @media (max-width: 1024px) {
    margin: 20px auto;
    width: 400px;
    height: 150px;
    font-size: 16px;
  }
  @media (max-width: 390px) {
    margin: 20px auto;
    width: 400px;
    height: 100px;
    font-size: 14px;
    line-height: 1.5;
    padding: 10px;
    
  }
`

// fixed nav
export const FixedNav = styled.div`
  position: fixed;
  width: 240px;
  height: 100%;
  padding-top: 20px;

  ul {
    line-height: 80px;
  }

  ul .active a {
    color: #7161ef;
  }

  ul li a {
    color: #495057;
    display: flex;
    justify-content: start;
    font-size: 20px;
    font-weight: 700;
  }

  ul li a:hover {
    color: #7161ef;
  }

  ul li a .icon {
    width: 30px;
  }

  ul li a .title {
    margin-left: 20px;
  }

  @media (max-width: 1024px) {
    width: 200px;
    padding: 5px;
    ul li a {
      color: #495057;
      display: flex;
      justify-content: start;
      font-size: 16px;
      font-weight: 700;
    }
  }

  @media (max-width: 390px) {
    
    width: 50px;
    padding: 5px;
    ul li a .title {
      display: none;
    }
  }
`

// complaint page
export const ComplaintPg = styled.div`
  .home-content h3 {
    color: #7161ef;
    font-weight: 700;
    text-transform: uppercase;
  }

  .complain-tb {
    margin-top: 50px;

  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th {
    text-transform: uppercase;
  }
  td,
  th {
    border: 1px solid #dfe7fd;
    text-align: left;
    padding: 8px;
    color: #8e9aaf;
  }

  td{
    color:#3b414b;
  }
  tr:nth-child(even) {
    background-color: #dfe7fd;
  }
`