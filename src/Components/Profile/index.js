import React from 'react';



import {
    ProfileSection, ProfileWrapper, ProfileList, ProfileItem, ProfileItemSpan, WebSpan, 
    SkillsWrapper, ProfileSkillsTitle, SkillsDesc, Bar, BarTitle, PercSpan, Parent, 
    Sp1, Sp2, Sp3
} from './style'

const Profile = (props) => {

    return(
        <ProfileSection>
        <div className="container">
            <ProfileWrapper>
                <ProfileSkillsTitle><span>My </span>Profile</ProfileSkillsTitle>
                <ProfileList>
                    <ProfileItem>
                        <ProfileItemSpan>Name</ProfileItemSpan>
                        Ahmed Hassan
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileItemSpan>Birth Date</ProfileItemSpan>
                        30/4/1998
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileItemSpan>Address</ProfileItemSpan>
                        5th Settlement
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileItemSpan>Phone</ProfileItemSpan>
                        +201068907939
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileItemSpan>Email</ProfileItemSpan>
                        Ahmed7sn3amer@gmail.com
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileItemSpan>Website</ProfileItemSpan>
                        <WebSpan>github.com/AhmedHassanSWE</WebSpan>
                    </ProfileItem>
                </ProfileList>
            </ProfileWrapper>
            
            <SkillsWrapper>
                <ProfileSkillsTitle>Some <span>skills</span></ProfileSkillsTitle>
                <SkillsDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillsDesc>
                <Bar>
                    <BarTitle>Bootstrap</BarTitle>
                    <PercSpan>100%</PercSpan>
                    <Parent>
                        <Sp1></Sp1>
                    </Parent>
                </Bar>
                
                <Bar>
                    <BarTitle>CSS3</BarTitle>
                    <PercSpan>90%</PercSpan>
                    <Parent>
                        <Sp2></Sp2>
                    </Parent>
                </Bar>
                
                <Bar>
                    <BarTitle>Photoshop</BarTitle>
                    <PercSpan>80%</PercSpan>
                    <Parent>
                        <Sp3></Sp3>
                    </Parent>
                </Bar>
            </SkillsWrapper>
            
        </div>
    </ProfileSection>
    )
}

export default Profile;