import { NextResponse } from 'next/server';
import { getAllEvents, createEvent } from '@/lib/db';

// GET /api/events - Get all events
export async function GET() {
  try {
    const events = getAllEvents();
    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}

// POST /api/events - Create a new event
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, dates } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Event name is required.' },
        { status: 400 }
      );
    }

    if (!dates || !dates.trim()) {
      return NextResponse.json(
        { error: 'Event dates are required.' },
        { status: 400 }
      );
    }

    const newEvent = createEvent(body);
    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    );
  }
}
