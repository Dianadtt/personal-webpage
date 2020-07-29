import React, { Component } from 'react';
import data from "../experience.json"

import Card from './card';
import CardHeader from './card-header';
import CardContent from './card-content';
import CardExtraContent from './card-extra-content';
class Experience extends Component {
    
    render() {
        return (

            <div className="experience">
                <div className="card">
                    <h4>Experience</h4>
                </div>
                {data.map(job => {
                    return (
                        <Card 
                        key={job.id} 
                        zoomOnHover={true}>
                                <CardHeader 
                                    logo={`${process.env.PUBLIC_URL}/staticAssets/${job.img}`}
                                    logoAlt="job"
                                    title={job.company}
                                    period={job.period}
                                    location={job.location}
                                />
                                <CardContent text={job.description}/>
                                <img id="work-img" src={`${process.env.PUBLIC_URL}/staticAssets/${job.workImg}`} alt="work"></img>
                                
                                <CardExtraContent>
                                    <CardContent text={job.description}/>
                                </CardExtraContent>
                                
                            </Card>
                    )
                })}

                
            </div>
        )
    }
}

export default Experience