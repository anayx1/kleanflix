'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Calendar,
  MapPin,
  Plus,
  Search,
  Edit2,
  Trash2,
  X,
  Loader2,
  AlertCircle,
  Clock,
  Sparkles,
  ArrowUpDown,
} from 'lucide-react';
import MediaUploader from './MediaUploader';

export default function EventManager() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    dates: '',
    location: '',
    featuredImage: '',
    orderIndex: 0,
  });

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/events');
      if (!res.ok) throw new Error('Failed to fetch events');
      const data = await res.json();
      setEvents(data || []);
    } catch (err) {
      console.error(err);
      setError('Could not load events.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const openAddModal = () => {
    setEditingEvent(null);
    setFormData({
      name: '',
      dates: '',
      location: '',
      featuredImage: '',
      orderIndex: events.length,
    });
    setError('');
    setIsModalOpen(true);
  };

  const openEditModal = (event) => {
    setEditingEvent(event);
    setFormData({
      name: event.name || '',
      dates: event.dates || '',
      location: event.location || '',
      featuredImage: event.featuredImage || '',
      orderIndex: event.orderIndex !== undefined ? event.orderIndex : 0,
    });
    setError('');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingEvent(null);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Event name is required');
      return;
    }
    if (!formData.dates.trim()) {
      setError('Event dates are required');
      return;
    }

    try {
      setSubmitting(true);
      setError('');

      const url = editingEvent ? `/api/events/${editingEvent.id}` : '/api/events';
      const method = editingEvent ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || 'Failed to save event');
      }

      closeModal();
      await fetchEvents();
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred while saving.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/events/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete event');
      setDeleteConfirmId(null);
      await fetchEvents();
    } catch (err) {
      console.error(err);
      alert('Could not delete event.');
    }
  };

  // Filter events by search
  const filteredEvents = events.filter((ev) => {
    const q = search.toLowerCase();
    return (
      (ev.name && ev.name.toLowerCase().includes(q)) ||
      (ev.dates && ev.dates.toLowerCase().includes(q)) ||
      (ev.location && ev.location.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <Calendar className="w-6 h-6 text-[#1E6BB8]" />
            <span>Events Management</span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage upcoming exhibition appearances, trade fairs, dates, and locations.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="inline-flex items-center justify-center gap-2 bg-[#1E6BB8] hover:bg-[#155393] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-sm hover:shadow"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Event</span>
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search events by name, dates, or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E6BB8]/20 focus:border-[#1E6BB8]"
          />
        </div>
        <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">
          Total: {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
        </span>
      </div>

      {/* Events Table / Card List */}
      {loading ? (
        <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#1E6BB8] mx-auto mb-3" />
          <p className="text-sm text-slate-500 font-medium">Loading events...</p>
        </div>
      ) : filteredEvents.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1E6BB8] flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">No events found</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            {search
              ? 'No events matched your search query. Try clearing the search.'
              : 'You haven’t added any upcoming events yet. Click "Add New Event" to get started.'}
          </p>
          {!search && (
            <button
              onClick={openAddModal}
              className="mt-5 inline-flex items-center gap-2 bg-[#1E6BB8] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#155393] transition"
            >
              <Plus className="w-4 h-4" />
              <span>Add Your First Event</span>
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
            >
              {/* Event Image */}
              <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                {event.featuredImage ? (
                  <Image
                    src={event.featuredImage}
                    alt={event.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-300">
                    <Calendar className="w-12 h-12 stroke-[1.5]" />
                  </div>
                )}
                {event.location && (
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-orange-400" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {event.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#1E6BB8]" />
                    <span>{event.dates}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    Order: {event.orderIndex || 0}
                  </span>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => openEditModal(event)}
                      className="p-1.5 text-slate-500 hover:text-[#1E6BB8] hover:bg-blue-50 rounded-lg transition"
                      title="Edit Event"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setDeleteConfirmId(event.id)}
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                      title="Delete Event"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create / Edit Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-hidden ">
          <div className="bg-white rounded-3xl max-w-5xl max-h-[90dvh] w-full p-6 md:p-8 shadow-2xl relative my-8 border border-slate-200 animate-in fade-in zoom-in-95 duration-200 overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {editingEvent ? 'Edit Event' : 'Add New Event'}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Fill in the event details and upload a featured image.
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {error && (
              <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-red-700 text-xs font-medium">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Event Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Event Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. HORECA Expo Coimbatore"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E6BB8]/20 focus:border-[#1E6BB8] text-slate-800"
                  required
                />
              </div>

              {/* Dates (Normal text input as requested) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Dates <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1, 2 & 3 July 2026 or 7, 8 & 9 August 2026"
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E6BB8]/20 focus:border-[#1E6BB8] text-slate-800"
                  required
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Enter dates in free-form text format (e.g. "1, 2 & 3 July 2026").
                </p>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Coimbatore, Hyderabad, Goa, or Bharat Mandapam New Delhi"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E6BB8]/20 focus:border-[#1E6BB8] text-slate-800"
                />
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Featured Image
                </label>
                <MediaUploader
                  value={formData.featuredImage}
                  onChange={(url) => setFormData({ ...formData, featuredImage: url })}
                  label="Upload Event Image"
                  customName={formData.name || 'event'}
                  helperText="Upload background image for the event card (WebP, JPG, PNG). Automatically compressed to lossless WebP."
                  height="180px"
                />
              </div>

              {/* Display Order Index */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Display Order
                </label>
                <input
                  type="number"
                  value={formData.orderIndex}
                  onChange={(e) => setFormData({ ...formData, orderIndex: parseInt(e.target.value) || 0 })}
                  className="w-32 px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E6BB8]/20 focus:border-[#1E6BB8]"
                  min="0"
                />
                <span className="text-[11px] text-slate-400 ml-2">Lower numbers appear first.</span>
              </div>

              {/* Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition"
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-[#1E6BB8] hover:bg-[#155393] text-white px-5 py-2 rounded-xl text-sm font-semibold transition shadow-sm disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <span>{editingEvent ? 'Update Event' : 'Create Event'}</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 text-center animate-in fade-in zoom-in-95">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Delete Event?</h3>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              Are you sure you want to delete this event? This action cannot be undone.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="px-4 py-2 text-xs font-semibold bg-red-600 hover:bg-red-700 text-white rounded-xl transition shadow-sm"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
