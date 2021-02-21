import React from 'react';
import axios from 'axios'
import {WorkSection, WorkTitle, WorkPart, Icon, PartTitle, Line, WorkDesc, Span} from './style'

const Work = () => {

    const [works, setWorks] = React.useState([])

    React.useEffect(() => {
        axios.get('js/data.json').then(res => {setWorks(res.data.works)})
    }, [])



        const worksList = works.map((workItem) => {
            return(
                <WorkPart first={workItem.id} key={workItem.id}>
                <Icon className={workItem.icon_name}></Icon>
                <PartTitle>{workItem.title}</PartTitle>
                <Line />
                <WorkDesc>
                    {workItem.body}
                </WorkDesc>
            </WorkPart>
            )
        })

        return(
            <WorkSection>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    {worksList}
                    
                </div>
            </WorkSection>
        )
    
}

export default Work;