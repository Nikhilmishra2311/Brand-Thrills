CREATE TABLE public.contact_submissions (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 255),
 phone text NOT NULL DEFAULT '' CHECK (char_length(phone) <= 30),
 company text NOT NULL DEFAULT '' CHECK (char_length(company) <= 150),
 service text NOT NULL CHECK (char_length(service) <= 100),
 message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 3000)
);
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.contact_submissions IS 'Private advertising campaign inquiries. Owner access through Lovable Cloud Database only.';