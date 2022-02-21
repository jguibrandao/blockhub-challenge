import {Document} from 'mongoose'

export interface Project extends Document {
    name: string,
    description?: string,
    initDate: string,
    end?: string,
    active?: boolean
}