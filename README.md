# Tony’s Booking Platform

**A production booking platform built and maintained by Tamer Khatib.**

[Live Platform](https://tonysbooking.app)

> **Production source code is private.**  
> This public repository is a portfolio showcase containing project documentation, architecture notes, visuals, and sanitized example code. It does **not** contain production credentials, customer data, private business logic, database secrets, or the complete production codebase.

---

## Overview

Tony’s Booking Platform is a live booking and operations system built for a real barbershop in Toronto.

The project began as a replacement for a third-party appointment solution and evolved into a full production platform supporting customer bookings, staff scheduling, business administration, authentication, operational workflows, and ongoing production maintenance.

The system is actively being expanded toward a reusable white-label architecture for additional barbershops and service-based businesses.

## What I Built

I designed and developed the platform end to end, including:

- Customer booking flow
- Real-time staff availability
- SMS OTP authentication
- Individual and group bookings
- Appointment rescheduling and cancellation
- Barber schedules, breaks, days off, and time off
- Customer and appointment management
- Dedicated Admin and Barber interfaces
- Operational statistics and business tools
- Role-based access control
- Database security and Row Level Security
- Production deployment and ongoing maintenance
- Responsive mobile-first booking experience
- Live debugging and iterative improvements based on real business feedback

## Tech Stack

**Frontend**
- Next.js
- TypeScript
- React

**Backend & Data**
- Supabase
- PostgreSQL
- Row Level Security
- Server-side APIs / RPC workflows

**Infrastructure & Integrations**
- Vercel
- Twilio
- GitHub
- Supabase Edge Functions

## Why This Project Matters

This is not a classroom demo or static portfolio project.

Tony’s Booking Platform is a live system built around real operational requirements. Changes have to account for existing appointments, real customers, staff workflows, security, reliability, and the daily needs of the business.

That experience has required work across the full software lifecycle:

**requirements → architecture → implementation → testing → deployment → production debugging → iteration**

## Product Direction

The current production system is being used as the foundation for a broader booking platform.

The long-term architecture is being designed so additional businesses can have:

- Their own branding
- Their own staff
- Their own services and pricing
- Their own schedules and availability
- Their own administration
- Their own customer base
- Business-specific configuration
- A shared, maintainable platform underneath

## Architecture

A high-level architecture overview is available in:

[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)

## Security

The production application includes role-based authorization and database-level security controls.

For security reasons, the complete production security implementation, credentials, database policies, internal operational logic, and infrastructure configuration are not published here.

See:

[`docs/SECURITY.md`](docs/SECURITY.md)

## Sanitized Code Examples

The `demo/` directory contains small, intentionally simplified examples showing the type of application logic used in the platform.

These files are **not copied production modules** and cannot be used to reconstruct the private application.

## About the Developer

**Tamer Khatib**  
Computer Science B.Sc. Candidate | Full-Stack Developer

I built Tony’s Booking Platform while completing my Computer Science degree, taking responsibility for both the technical implementation and the product decisions required to run a real production system.

- Live project: https://tonysbooking.app
- GitHub: https://github.com/TamerKh2

## Repository Notice

This repository is provided for portfolio and evaluation purposes only.

The full production repository remains private.

### Copyright

**© 2026 Tamer Khatib. All rights reserved.**

No permission is granted to copy, reproduce, distribute, modify, sublicense, sell, or use the contents of this repository for commercial or production purposes except with prior written permission from Tamer Khatib.

See [`LICENSE.md`](LICENSE.md) for full terms.
