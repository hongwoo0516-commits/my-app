import { model, models, Schema } from 'mongoose'

const noticeSchema = new Schema(
  {
    title: { type: String, require: true, trim: true },

    author: { type: String, require: true, trim: true },

    content: { type: String, require: true },
  },
  {
    timestamps: true,
  },
)


export const Notice = models.Notice || model('Notice', noticeSchema)
