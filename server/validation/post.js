// validation/postValidation.js
import Joi from "joi";

export const createPostSchema = Joi.object({
  userName: Joi.string().min(2).max(25).trim().required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 2 characters",
    "string.max": "Name cannot exceed 25 characters",
  }),

  userPhone: Joi.string()
    .pattern(/^[0-9+\-\s()]+$/)
    .min(7)
    .max(20)
    .trim()
    .required()
    .messages({
      "string.empty": "Phone number is required",
      "string.pattern.base": "Please enter a valid phone number",
    }),

  name: Joi.string().max(100).trim().required().messages({
    "string.empty": "Item name is required",
    "string.max": "Item name cannot exceed 100 characters",
  }),

  description: Joi.string().max(500).trim().required().messages({
    "string.empty": "Description is required",
    "string.max": "Description cannot exceed 500 characters",
  }),

  city: Joi.string().trim().required().messages({
    "string.empty": "City is required",
  }),

  area: Joi.string().trim().required().messages({
    "string.empty": "Area is required",
  }),

  color: Joi.string().trim().allow(""),

  category: Joi.string()
    .valid(
      "phone",
      "keys",
      "wallet",
      "bag",
      "pet",
      "documents",
      "jewelry",
      "other"
    )
    .messages({
      "any.only": "Please select a valid category",
    }),

  type: Joi.string().valid("found", "lost").required().messages({
    "string.empty": "Please specify if item is found or lost",
    "any.only": "Type must be either 'found' or 'lost'",
  }),

  status: Joi.string().valid("active", "resolved").default("active"),
});

export const updatePostSchema = Joi.object({
  userName: Joi.string().min(2).max(25).trim(),
  userPhone: Joi.string()
    .pattern(/^[0-9+\-\s()]+$/)
    .min(7)
    .max(20)
    .trim(),
  name: Joi.string().max(100).trim(),
  description: Joi.string().max(500).trim(),
  city: Joi.string().trim(),
  area: Joi.string().trim(),
  color: Joi.string().trim().allow(""),
  category: Joi.string().valid(
    "phone",
    "keys",
    "wallet",
    "bag",
    "pet",
    "documents",
    "jewelry",
    "other"
  ),
  type: Joi.string().valid("found", "lost"),
  status: Joi.string().valid("active", "resolved"),
}).min(1); // At least one field must be updated
