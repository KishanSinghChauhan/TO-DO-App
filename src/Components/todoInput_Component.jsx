import React, { Component } from 'react';
import { Collapse, Button} from 'reactstrap';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import {connect } from 'react-redux';
import {addJob} from '../../redux/jobs/jobs-actions'

class AddJob extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            Profile: '',
            skillsRequired: [
                { skillname: "" }
            ],
            duration: '',
            perks:[
                { perkname:"" }
            ],
            stipend: '',
            
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSkillsRequiredChange = idx => evt => {
        const newSkillsRequired = this.state.skillsRequired.map((skillsRequired, sidx) => {
          if (idx !== sidx) return skillsRequired;
          return { ...skillsRequired, skillname: evt.target.value };
        });
    
        this.setState({ skillsRequired: newSkillsRequired });
    };
    handlePerksChange = idx => evt => {
        const newPerks = this.state.perks.map((perks, sidx) => {
          if (idx !== sidx) return perks;
          return { ...perks, perkname: evt.target.value };
        });
    
        this.setState({ perks: newPerks });
    };
   

    handleAddSkillsRequired = () => {
      this.setState({
        skillsRequired: this.state.skillsRequired.concat([{ skillname: "" }])
      });
    };

    handleAddPerks = () => {
        this.setState({
          perks: this.state.perks.concat([{ perkname: "" }])
        });
      };
 
    handleRemoveSkillsRequired = idx => () => {
      this.setState({
        skillsRequired: this.state.skillsRequired.filter((s, sidx) => idx !== sidx)
      });
    };
    handleRemovePerks = idx => () => {
        this.setState({
          perks: this.state.perks.filter((s, sidx) => idx !== sidx)
        });
      };
    
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        const { Profile,skillsRequired,duration,perks,stipend } =  this.state
        this.props.addJob(Profile,skillsRequired,duration,perks,stipend,this.props.currentUser.userId%5)
    }

    render(){
       
        return (
            <div>
            <h5 onClick={this.toggle } style={{ marginBottom: '0.5rem' ,cursor:'pointer', position:'relative',display: 'flex',justifyContent:'flex-end',bottom: '40px'}}>Post new Job</h5>
                <Collapse isOpen={this.state.isOpen}>
                <div className="row row-content">
                  
                    <div className="col-12" style={{marginTop:'0%'}}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="Profile" md={2}>Profile Name</Label>
                                <Col md={12}>
                                    <Input type="text" id="Profile" name="Profile"
                                        placeholder="Profile Name"
                                        value={this.state.Profile}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="skillsRequired" md={2}>Skills Required</Label>
                                {this.state.skillsRequired.map((skillsRequired, idx) => (

                                <Col md={12}>
                                    <Input type="text" id="skillsRequired" name="skillsRequired"
                                        placeholder="Skill Name"
                                        value={skillsRequired.skillname}
                                        onChange={this.handleSkillsRequiredChange(idx)}
                                       
                                        />
                                        <Button className="m-2"
                                            onClick={this.handleRemoveSkillsRequired(idx)}
                                            color="primary"
                                        >
              -                         </Button>
                                    </Col> 
                                ))} 
                                <Button className="ml-3"
                                    onClick={this.handleAddSkillsRequired}
                                    color="primary"
                                >
                                    Add Skill
                                </Button>
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="duration" md={2}>Duration</Label>
                                <Col md={12}>
                                    <Input type="tel" id="duration" name="duration"
                                        placeholder="Duration"
                                        value={this.state.duration}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="perks" md={2}>Perks</Label>
                                {this.state.perks.map((perks, idx) => (

                                <Col md={12}>
                                    <Input type="text" id="perks" name="perks"
                                        placeholder="Perk Name"
                                        value={perks.perkname}
                                        onChange={this.handlePerksChange(idx)}
                                       
                                        />
                                        <Button  className="m-2"
                                            onClick={this.handleRemovePerks(idx)}
                                            color="primary"
                                        >
              -                         </Button>
                                    </Col> 
                                ))} 
                                <Button  className="ml-3"
                                    onClick={this.handleAddPerks}
                                    color="primary"
                                >
                                    Add Perk
                                </Button>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="stipend" md={2}>Stipend</Label>
                                <Col md={12}>
                                    <Input type="stipend" id="stipend" name="stipend"
                                        placeholder="Stipend"
                                        value={this.state.stipend}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            
                            <FormGroup row>
                                <Col md={2}>
                                    <Button type="submit" color="success">
                                        POST
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
               </div>
            </Collapse>
        </div>
    );
    }
}

const mapStateToProps = (state) =>{
    return {
        currentUser: state.user.currentUser
    }
}

const mapDispatchToProps = dispatch =>({
    addJob: (Profile,skillsRequired,duration,perks,stipend,recruiterId) => dispatch(addJob(Profile,skillsRequired,duration,perks,stipend,recruiterId))
})
export default connect(mapStateToProps,mapDispatchToProps)(AddJob);
