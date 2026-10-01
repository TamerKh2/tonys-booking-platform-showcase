# Security Overview

Security is treated as part of the application architecture rather than only as a frontend concern.

## Areas Used in Production

- Role-based application access
- PostgreSQL Row Level Security
- Server-side validation
- Protected administrative workflows
- Controlled use of privileged database operations
- Environment-based secret management
- Production configuration separated from source control
- Private production repository
- Backup and recovery procedures

## Repository Safety

This public repository intentionally excludes:

- `.env` files
- service-role keys
- Twilio credentials
- database passwords
- production API secrets
- customer records
- private operational data
- complete production RLS policies
- complete production source code

## Reporting

If you believe you have found a security issue in the live platform, please do not publish exploit details in a public GitHub issue.

Contact the repository owner privately through GitHub.
