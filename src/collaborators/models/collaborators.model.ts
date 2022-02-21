import {Document} from 'mongoose'

export interface Collaborator extends Document {
    name: string,
    role: string,
    admission: string,
    active?: boolean
}