import { testimonialCreateRequestBody, testimonialUpdateRequestBody } from 'interfaces/testimonialRequestBody';
import { NextFunction, Request, Response, Router } from 'express';
import testimonialModel from '../models/testimonial';
import HttpError from '../errors/HttpError';

export const createTestimonial = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { photoUrl, name, post, description } = req.body as testimonialCreateRequestBody;
        if(!name ||!post ||!description) {
            throw new Error('Name, Post and Description are required');
        }
        const testimonial = await testimonialModel.create({
            photoUrl, name, post, description, active:1
        });
        return res.status(200).json(testimonial["_doc"]);
    }
    catch (err) {
        next(err);
    }
}

export const getTestimonial = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const testimonialId = req.params.id;
        const testimonial = await testimonialModel.findById(testimonialId);
        if(!testimonial) {
            throw new HttpError('Testimonial not found',404);
        }
        return res.status(200).json(testimonial["_doc"]);
    }
    catch (err) {
        next(err);
    }
}

export const getAllTestimonials = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const testimonials = await testimonialModel.find();
        return res.status(200).json(testimonials);
    }
    catch (err) {
        next(err);
    }
}

export const editTestimonial = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const testimonialId = req.params.id;
        const { photoUrl, name, post, description } = req.body as testimonialUpdateRequestBody;
        const testimonial = await testimonialModel.findById(testimonialId);
        testimonial.photoUrl = photoUrl || testimonial.photoUrl;
        testimonial.name = name || testimonial.name;
        testimonial.post = post || testimonial.post;
        testimonial.description = description || testimonial.description;
        const savedTestimonial = await testimonial.save();
        return res.status(200).json(savedTestimonial["_doc"]);
    }
    catch (err) {
        next(err);
    }
}

export const deleteTestimonial = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const testimonialId = req.params.id;
        const testimonial = await testimonialModel.findById(testimonialId);
        testimonial.active = false;
        const savedTestimonial = await testimonial.save();
        return res.status(200).json(savedTestimonial["_doc"]);
    }
    catch (err) {
        next(err);
    }
}









