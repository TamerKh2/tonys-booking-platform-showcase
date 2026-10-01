# Architecture Overview

This document intentionally describes the platform at a high level. Production implementation details remain private.

## High-Level Flow

```text
Customer / Barber / Admin
          |
          v
     Next.js UI
          |
          v
 Application / API Layer
          |
          +------------------+
          |                  |
          v                  v
      Supabase            Twilio
  Auth + PostgreSQL       OTP / SMS
          |
          v
 Database Functions / RLS
          |
          v
 Business Data + Scheduling
          |
          v
     Vercel Production
```

## Main Application Areas

### Customer Experience
Customers move through a guided booking flow that evaluates services, staff availability, dates, and time slots before creating an appointment.

### Admin Operations
Administrative users can manage staff, appointments, services, schedules, customers, and business-level operational information.

### Barber Operations
Barber-facing workflows focus on appointments, working schedules, breaks, time off, and day-to-day availability.

### Authentication
Customer authentication uses phone-based OTP flows. Administrative access is separated from the customer experience.

### Data Layer
PostgreSQL is used for relational application data. Supabase provides the hosted database, authentication services, API layer, storage, and database security controls.

### Deployment
The web application is deployed through Vercel and connected to the production Supabase environment.

## Production Design Principles

- Preserve existing appointments during feature changes
- Enforce authorization at both application and database layers
- Prefer explicit scheduling rules over UI-only validation
- Keep customer booking flows simple
- Separate customer, barber, and administrative responsibilities
- Design new features with future multi-business support in mind

## White-Label Direction

The architecture is being evolved so business-specific data and presentation can be separated from shared platform functionality.

The goal is to support multiple independent service businesses while keeping the core booking engine maintainable and reusable.

## What Is Intentionally Not Published

- Complete production database schema
- Production RLS policies
- Internal RPC implementations
- Authentication secrets
- Deployment secrets
- Customer information
- Complete scheduling algorithms
- Production source code
- Business-sensitive operational logic
