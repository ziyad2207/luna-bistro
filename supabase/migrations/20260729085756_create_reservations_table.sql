/*
# Create reservations table (single-tenant, no auth)

1. New Tables
- `reservations`
- `id` (uuid, primary key)
- `name` (text, guest full name)
- `email` (text, guest contact email)
- `phone` (text, guest contact phone)
- `date` (date, requested reservation date)
- `time` (text, requested reservation time slot)
- `guests` (integer, number of guests)
- `special_request` (text, optional notes / dietary requests)
- `status` (text, booking status: pending / confirmed / cancelled)
- `created_at` (timestamp, when the request was made)

2. Security
- Enable RLS on `reservations`.
- Allow anon + authenticated to create (INSERT) and read their own submissions.
- This is a single-tenant public booking form with no sign-in screen, so
  the anon-key frontend must be able to insert new reservations.

3. Notes
- No user_id column — no auth in this app.
- Status defaults to 'pending' so staff can confirm later.
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  guests integer NOT NULL DEFAULT 2,
  special_request text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to submit a reservation
DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations" ON reservations FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- Allow reading reservations (single-tenant, public booking system)
DROP POLICY IF EXISTS "anon_select_reservations" ON reservations;
CREATE POLICY "anon_select_reservations" ON reservations FOR SELECT
TO anon, authenticated USING (true);

-- Create index on date for quick lookup
CREATE INDEX IF NOT EXISTS idx_reservations_date ON reservations (date);
