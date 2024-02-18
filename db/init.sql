CREATE TYPE status AS ENUM (
    'active',
    'inactive',
    'deleted',
    'pending_validation',
    'pending_password_reset'
);

CREATE TABLE IF NOT EXISTS users (
    id serial primary key,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    hash varchar(255) NOT NULL,
    status status NOT NULL default 'pending_validation',
    created_at timestamp NOT NULL default now(),
    updated_at timestamp NOT NULL default now()
);

CREATE TYPE appointment_status AS ENUM (
    'accepted',
    'canceled',
    'pending_validation'
);

CREATE TABLE IF NOT EXISTS appointment (
    id serial primary key,
    client_email text NOT NULL,
    client_name text NOT NULL,
    client_phone text NOT NULL,
    message text NOT NULL,
    status appointment_status NOT NULL default 'pending_validation',
    date string NOT NULL,
    created_at timestamp NOT NULL default now(),
    updated_at timestamp NOT NULL default now()
)