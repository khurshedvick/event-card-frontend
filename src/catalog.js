// One template for now. More will be added here as each refined invitation is finished.
export const templates = Object.freeze([
  { id: 'invitation-01', name: 'Invitation 01', note: 'The design we are building', motif: 'garden', bg: '#fffaf8', ink: '#532d38', accent: '#bd4b4b', soft: '#efb7b7' },
]);

export const getTemplate = id => templates.find(template => template.id === id) || templates[0];

export const defaultDraft = () => ({
  occasion: 'wedding', template: templates[0].id,
  firstName: '', secondName: '', age: '', date: '', time: '',
  venue: '', address: '', message: '', dressCode: '', mapsUrl: '',
  guestName: '', tableNumber: '', rsvpEmail: '', wishes: '', venueType: 'restaurant',
  rsvp: true, calendar: true, countdown: true, location: true, schedule: true,
  scheduleEvents: [],
  photo: '', opening: 'envelope', musicMode: 'off', musicVolume: 30,
  linkPreviewMode: 'envelope', linkPreviewStyle: 'ivory', linkPreviewImage: '',
  linkPreviewTitle: '', linkPreviewDescription: '', language: 'en',
});
