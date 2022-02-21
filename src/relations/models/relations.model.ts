import {Document} from 'mongoose'

export interface Relations extends Document {
    initDate: string,
    end?: string,
    active: boolean
}