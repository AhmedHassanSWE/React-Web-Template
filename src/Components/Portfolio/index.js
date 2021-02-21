import React from 'react';
import axios from 'axios';
import 
{PortfolioSection, PortfolioTitle, PortfolioList, PortfolioItem, TitleSpan, Box, Img, 
    BoxSpan,  Overlay
} from './style'
const Portfolio = (props) => {
    
    const [images, setImages] = React.useState([]);

    React.useEffect(() => {
        axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
    }, [])

    const PortfolioImages = images.map(imageItem => {
        return (
        <Box key={imageItem.id}>
            <Img src={imageItem.image} alt="" />
            <Overlay>
                <BoxSpan>
                    Show Image
                </BoxSpan>
            </Overlay>
        </Box>
        )
    })

    return(
        <PortfolioSection>
            <PortfolioTitle><TitleSpan>My</TitleSpan> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className='box'>
                
              {PortfolioImages}
                
            </div>
        </PortfolioSection>

    )
}

export default Portfolio;