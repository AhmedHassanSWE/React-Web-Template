import styled from 'styled-components'

export const ProfileSection = styled.div `
    padding: 50px 0;
    overflow: hidden;
`

export const ProfileWrapper = styled.div `
    width: 50%;
    float: left;
`

export const ProfileList = styled.ul `
    list-style: none
`

export const ProfileItem = styled.li `
    margin-bottom: 8px
`

export const ProfileItemSpan = styled.span `
    display: inline-block;
    width: 100px;
    font-weight: bold
`

export const WebSpan = styled.span `
    font-weight: normal;
    color: #eb5424
`

export const SkillsWrapper = styled.div `
    width: 50%;
    float: left;
`

export const SkillsDesc = styled.p `
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const Bar = styled.div `
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const BarTitle = styled.span `
    float: left;
`

export const PercSpan = styled.span `
    float: right;
    margin-right: 100px
`

export const Parent = styled.div `
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const ParentSpan = styled.span `
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
`

export const Sp1 = styled(ParentSpan) `
    width: 100%;
`

export const Sp2 = styled(ParentSpan) `
    width: 90%;
`

export const Sp3 = styled(ParentSpan) `
    width: 80%;
`

export const ProfileSkillsTitle = styled.h2 `
    font-size: 40px; 
    margin-bottom: 20px
`

