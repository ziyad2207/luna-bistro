import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
  Calendar,
  Clock,
  Users,
  User,
  Mail,
  Phone,
  MessageSquare,
  Check,
  Loader2,
  AlertCircle,
  type LucideIcon,
} from 'lucide-react';

const timeSlots = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Reservation() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const today = new Date().toISOString().split('T')[0];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      date: String(formData.get('date') ?? ''),
      time: String(formData.get('time') ?? ''),
      guests: Number(formData.get('guests') ?? 2),
      special_request: String(formData.get('special_request') ?? '') || null,
    };

    try {
      const { error } = await supabase.from('reservations').insert(payload);
      if (error) throw error;
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  }

  return (
    <section
      id="reservation"
      className="relative overflow-hidden bg-ink-900 py-32 lg:py-40"
    >
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-12">
        <div className="mb-12 text-center">
          <p className="eyebrow mb-6" data-reveal>
            <span>Reservations</span>
          </p>
          <h2 className="section-title" data-title-reveal>
            Reserve Your <span className="italic text-gold-gradient">Evening</span>
          </h2>
          <p className="body-serif mx-auto mt-6 max-w-2xl" data-reveal data-reveal-delay="150">
            Secure your table at Luna Bistro. We welcome parties of up to eight
            guests. For larger bookings, please call us directly.
          </p>
        </div>

        {/* Form card */}
        <div
          className="glass rounded-3xl p-8 md:p-12"
          data-reveal
          data-reveal-delay="200"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center py-12 text-center">
              <div className="glass-gold mb-6 rounded-full p-5">
                <Check size={40} className="text-gold" />
              </div>
              <h3 className="font-display text-3xl text-white">
                Reservation Requested
              </h3>
              <p className="body-serif mt-4 max-w-md">
                Thank you. Our team will confirm your booking by email within
                two hours. We look forward to welcoming you to Luna Bistro.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-luxury mt-8"
              >
                <span>Make Another Reservation</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="grid gap-6 md:grid-cols-2">
                <Field icon={User} label="Full Name" name="name" required placeholder="John Doe" />
                <Field
                  icon={Phone}
                  label="Phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+44 20 7946 0958"
                />
              </div>

              {/* Email */}
              <Field
                icon={Mail}
                label="Email Address"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
              />

              {/* Date / Time / Guests */}
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide-lg text-white/60">
                    <Calendar size={14} className="text-gold/70" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    min={today}
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 focus:border-gold/40 [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide-lg text-white/60">
                    <Clock size={14} className="text-gold/70" />
                    Time
                  </label>
                  <select
                    name="time"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 focus:border-gold/40"
                  >
                    <option value="" disabled className="bg-ink-700">
                      Select time
                    </option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-ink-700">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide-lg text-white/60">
                    <Users size={14} className="text-gold/70" />
                    Guests
                  </label>
                  <select
                    name="guests"
                    required
                    defaultValue="2"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 focus:border-gold/40"
                  >
                    {guestOptions.map((n) => (
                      <option key={n} value={n} className="bg-ink-700">
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                    <option value="8" className="bg-ink-700">
                      8+ (call us)
                    </option>
                  </select>
                </div>
              </div>

              {/* Special requests */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide-lg text-white/60">
                  <MessageSquare size={14} className="text-gold/70" />
                  Special Requests
                </label>
                <textarea
                  name="special_request"
                  rows={3}
                  placeholder="Dietary requirements, allergies, occasion, seating preference..."
                  className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-gold/40"
                />
              </div>

              {/* Error */}
              {status === 'error' && (
                <div className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/[0.08] px-4 py-3 text-sm text-red-300">
                  <AlertCircle size={16} className="shrink-0" />
                  {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold w-full disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="relative z-10 animate-spin" />
                    <span>Sending Request...</span>
                  </>
                ) : (
                  <span>Confirm Reservation</span>
                )}
              </button>

              <p className="text-center text-xs text-white/40">
                By submitting, you agree to our cancellation policy. A deposit
                may be required for parties of five or more.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  icon: LucideIcon;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide-lg text-white/60">
        <Icon size={14} className="text-gold/70" />
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-gold/40 focus:bg-white/[0.05]"
      />
    </div>
  );
}
