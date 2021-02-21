import React from 'react';
import axios from 'axios';
import {SocialMediaSection, Social, Paragraph, Info2, Info1, Icon} from './style'

const SocialMedia = (props) => {
    const [social, setSocial] = React.useState([]);

    React.useEffect(() => {
        axios.get('js/data.json').then(res => {setSocial(res.data.social)})
    }, [])
   
    
    const socialList = social.map(socialItem => {
        return(
            <Social item={socialItem.id} key={socialItem.id}>
            <Icon className={socialItem.icon}></Icon>
            <Paragraph>
                <Info1>{socialItem.title}</Info1>
                <Info2>{socialItem.body}</Info2>
            </Paragraph>
        </Social>
        )
    })

    return(
        <SocialMediaSection>
            
           {socialList}
    </SocialMediaSection>
    )
}

export default SocialMedia;