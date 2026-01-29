
export enum AppView {
  LANDING = 'LANDING',
  DOCTOR_LIST = 'DOCTOR_LIST',
  DOCTOR_PROFILE = 'DOCTOR_PROFILE',
  BOOKING_FLOW = 'BOOKING_FLOW',
  PATIENT_DASHBOARD = 'PATIENT_DASHBOARD',
  DOCTOR_DASHBOARD = 'DOCTOR_DASHBOARD',
  ADMIN_PANEL = 'ADMIN_PANEL',
  QUEUE_TRACKER = 'QUEUE_TRACKER'
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualification: string;
  rating: number;
  reviews: number;
  fee: number;
  experience: string;
  image: string;
  availability: string[];
  bio: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  patientName: string;
  date: string;
  time: string;
  type: 'In-clinic' | 'Video';
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  token: string;
}

export interface BookingState {
  doctorId: string | null;
  type: 'In-clinic' | 'Video' | null;
  date: string | null;
  time: string | null;
  patientDetails: {
    name: string;
    phone: string;
    age: string;
    reason: string;
  };
}
