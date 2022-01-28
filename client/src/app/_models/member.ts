import { Photo } from "./photo";

export interface Member {
    id:         number;
    username:   string;
    lastName:   string;
    photoUrl:   string;
    email:      string;
    phone:      string;
    knownAs:    string;
    age:        number;
    gender:     string;
    city:       string;
    country:    string;
    created:    Date;
    lastActive: Date;
    photos:     Photo[];
}


