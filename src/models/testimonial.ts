import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
    photoUrl: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    post: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const testimonialModel = mongoose.model('testimonial', testimonialSchema);

export default testimonialModel;

