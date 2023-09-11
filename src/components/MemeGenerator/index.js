import {Component} from 'react'
import {
  BgContainer,
  FormContainer,
  Label,
  Options,
  SubmitButton,
  MemeContainer,
  Heading,
  TopPara,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    toptext: '',
    bottomtext: '',
    fontSize: 8,
    showMeme: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({showMeme: true})
  }

  onUrlChange = event => {
    this.setState({imageUrl: event.target.value})
  }

  onTopTextChange = event => {
    this.setState({toptext: event.target.value})
  }

  onBottomTextChange = event => {
    this.setState({bottomtext: event.target.value})
  }

  onFontSizeChange = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {imageUrl, toptext, bottomtext, fontSize, showMeme} = this.state

    return (
      <BgContainer>
        <FormContainer onSubmit={this.onSubmitForm} testid="meme">
          <Heading>Meme Generator</Heading>
          <Label htmlFor="imgUrl">Image URL</Label> <br />
          <input
            id="imgUrl"
            onChange={this.onUrlChange}
            placeholder="Enter the Image URL"
          />
          <br />
          <Label htmlFor="topText">Top Text</Label>
          <br />
          <input
            id="topText"
            value={toptext}
            onChange={this.onTopTextChange}
            placeholder="Enter the Top Text"
          />
          <br />
          <Label htmlFor="bottomText">Bottom Text</Label>
          <br />
          <input
            id="bottomText"
            value={bottomtext}
            onChange={this.onBottomTextChange}
            placeholder="Enter the Bottom Text"
          />
          <br />
          <Label htmlFor="select">Font Size</Label>
          <br />
          <select id="select" onChange={this.onFontSizeChange}>
            {fontSizesOptionsList.map(each => (
              <Options key={each.optionId}>{each.displayText}</Options>
            ))}
          </select>
          <SubmitButton type="submit">Generate</SubmitButton>
        </FormContainer>
        {showMeme ? (
          <MemeContainer BgImage={imageUrl} data-testid="meme">
            <TopPara fontSize={fontSize}>{toptext}</TopPara>
            <TopPara fontSize={fontSize}>{bottomtext}</TopPara>
          </MemeContainer>
        ) : null}
      </BgContainer>
    )
  }
}
export default MemeGenerator
