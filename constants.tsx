
import { Doctor } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Sarah Mitchell',
    specialty: 'Cardiology',
    qualification: 'MD, FACC',
    rating: 4.9,
    reviews: 1240,
    fee: 150,
    experience: '12 Years',
    image: 'https://picsum.photos/seed/doctor1/300/300',
    availability: ['Mon', 'Wed', 'Fri'],
    bio: 'Specialist in non-invasive cardiology and preventive heart care with over a decade of experience at leading medical centers.'
  },
  {
    id: 'd2',
    name: 'Dr. James Wilson',
    specialty: 'Pediatrics',
    qualification: 'MBBS, DCH',
    rating: 4.8,
    reviews: 850,
    fee: 120,
    experience: '10 Years',
    image: 'https://picsum.photos/seed/doctor2/300/300',
    availability: ['Tue', 'Thu', 'Sat'],
    bio: 'Dedicated pediatrician focused on holistic child development and adolescent health management.'
  },
  {
    id: 'd3',
    name: 'Dr. Elena Rodriguez',
    specialty: 'Dermatology',
    qualification: 'MD, Dermatology',
    rating: 4.7,
    reviews: 2100,
    fee: 180,
    experience: '15 Years',
    image: 'https://picsum.photos/seed/doctor3/300/300',
    availability: ['Mon', 'Tue', 'Fri'],
    bio: 'Expert in clinical and aesthetic dermatology, specialized in advanced laser treatments and skin rejuvenation.'
  },
  {
    id: 'd4',
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    qualification: 'MD, PhD',
    rating: 5.0,
    reviews: 640,
    fee: 200,
    experience: '18 Years',
    image: 'https://picsum.photos/seed/doctor4/300/300',
    availability: ['Wed', 'Thu'],
    bio: 'Board-certified neurologist focusing on neuromuscular disorders and advanced neurological diagnostics.'
  }
];

export const SERVICES = [
  { id: 's1', name: 'Cardiology', icon: '❤️' },
  { id: 's2', name: 'Dental', icon: '🦷' },
  { id: 's3', name: 'Skin', icon: '✨' },
  { id: 's4', name: 'Pediatrics', icon: '👶' },
  { id: 's5', name: 'Neurology', icon: '🧠' },
  { id: 's6', name: 'Orthopedics', icon: '🦴' },
];
