// Style your components here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans';
  height: 100vh;
  padding: 30px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 15px;
`
export const Options = styled.option`
  color: #1e293b;
  font-size: 18px;
`
export const SubmitButton = styled.button`
  background-color: #0b69ff;
  color: white;
  font-size: 15px;
  padding: 8px;
  width: 100px;
  border-width: 0px;
  margin-top: 20px;
`
export const MemeContainer = styled.div`
  background-image: url(${props => props.BgImage});
  height: 400px;
  width: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
`
export const Heading = styled.h1`
  font-size: 29px;
  font-weight: bold;
  color: #35469c;
`
export const TopPara = styled.p`
  color: white;
  font-weight: bold;
  font-size: ${props => props.fontSize}px;
`
