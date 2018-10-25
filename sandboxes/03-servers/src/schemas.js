'use strict'

const postSchema = {
  type: 'Object',
  required: true,
  additionalProperties: false,
  properties: {
    id: {
      type: 'integer',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    breed: {
      type: 'string',
      required: true,
    },
    birthYear: {
      type: 'number',
    },
    photo: {
      type: 'string',
      format: 'url',
    },
  },
}

const putSchema = {
  type: 'Object',
  required: true,
  additionalProperties: false,
  properties: {
    name: {
      type: 'string',
      required: true,
    },
    breed: {
      type: 'string',
      required: true,
    },
    birthYear: {
      type: 'number',
    },
    photo: {
      type: 'string',
      format: 'url',
    },
  },
}

const patchSchema = {
  type: 'Object',
  required: true,
  additionalProperties: false,
  properties: {
    name: {
      type: 'string',
    },
    breed: {
      type: 'string',
    },
    birthYear: {
      type: 'number',
    },
    photo: {
      type: 'string',
      format: 'url',
    },
  },
}

module.exports = {
  postSchema: postSchema,
  putSchema: putSchema,
  patchSchema: patchSchema,
}
