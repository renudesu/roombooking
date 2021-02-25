import React from 'react';
import { Container } from './container';

export default class People extends React.Component {
    constructor() {
        super();
        this.state = {
            room: 1,
            adult: 0,
            child: 0
        }
    }
    roomStatusUpdate = (isIncr) => {
        const { room } = this.state;
        const roomCount = isIncr ? room + 1 : room - 1;

        if (roomCount < 6 && roomCount >= 1) {
            this.setState({
                room: roomCount,
            });
        }
    }
    adultStatusUpdate = (isIncr) => {
        const { adult, room } = this.state;
        const adultCount = isIncr ? adult + 1 : adult - 1;
        if (room < 6 && adultCount >= 1) {
            this.checkRoomCount('adult', adultCount);
        }
    }
    childrenStatusUpdate = (isIncr) => {
        const { child, adult, room } = this.state;
        const childCount = isIncr ? child + 1 : child - 1;
        if (room < 6 && adult >= 1 && childCount > 0) {
            this.checkRoomCount('child', childCount);
        }
    }
    checkRoomCount = (field, value) => {
        const { adult, child } = this.state;

        let count = 0;
        let adultCount = adult;
        switch (field) {
            case 'adult':
                count = value + child;
                adultCount = value;
                break;
            case 'child':
                count = value + adult;
                break;
            default:
                count = adult + child;
                break;
        }

        const noOfRooms = count / 4;
        const extraRoom = count % 4;
        const getNoOfRooms = Math.floor(noOfRooms) + (extraRoom ? 1 : 0);
        if (getNoOfRooms > 1 && adultCount === 0) {
            return;
        } else {
            if (getNoOfRooms < 6) {
                this.setState({
                    room: getNoOfRooms,
                    [field]: value
                });
            }
        }

    }
    render() {
        return (
            <>
                <div className="container  mt-5">
                    <div className="row  ">
                        <div className="col-md-3 "></div>
                        <div className="col-md-6 ">
                            <div className="row ml-2">
                                <h4 className="color text"><i class="fa fa-users"></i>Choose number of <strong className="color">People</strong></h4>
                            </div>
                            <table className="table table-bordered ">
                                <Container title="ROOMS" icon="fa fa-user" count={this.state.room} onClick={(value) => this.roomStatusUpdate(value)} /><hr></hr>
                                <Container title="ADULTS" icon="fa fa-bed" count={this.state.adult} onClick={(value) => this.adultStatusUpdate(value)} /><hr></hr>
                                <Container title="CHILDREN" icon="fa fa-child" count={this.state.child} onClick={(value) => this.childrenStatusUpdate(value)} />
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}