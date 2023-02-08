import {  Router } from 'express';
const router = Router();

import { createTestimonial, getTestimonial, editTestimonial, deleteTestimonial, getAllTestimonials } from '../controllers/testimonialController';

router.post('/create', createTestimonial);

router.get('/:id', getTestimonial);

router.get('/',getAllTestimonials);

router.put('/edit/:id', editTestimonial);

router.delete('/delete/:id', deleteTestimonial);

export default router;

// const collection = mongoose.connection.collection('blogposts');
// const k = await collection.find().toArray();
// console.log(k);