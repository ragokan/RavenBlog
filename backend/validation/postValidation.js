import Joi from "joi"

const postValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(4).required().messages({
      "any.required": "Please enter a valid and at least 4 letter post name!",
      "string.min": "Please provide a longer title that longer than 4 letters!",
    }),
    body: Joi.string().min(4).required().messages({
      "any.required": "Please enter a valid and at least 4 letter post body!",
      "string.min": "Please provide a longer body that longer than 4 letters!",
    }),
  })
  return schema.validate(data)
}

export default postValidation
