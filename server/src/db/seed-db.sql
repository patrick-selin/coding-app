-- dev database
\c crm_app_db_dev;

CREATE TABLE IF NOT EXISTS test_items (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    content VARCHAR(255),
    important BOOLEAN
);

INSERT INTO test_items (id, content, important) VALUES
    ('1', 'Test Word 1', true),
    ('2', 'Test Word 2', false),
    ('3', 'Test Word 3', true),
    ('4', 'Test Word 4', false)
ON CONFLICT (id) DO NOTHING;

-- test database
\c crm_app_db_test;

CREATE TABLE IF NOT EXISTS test_items (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    content VARCHAR(255),
    important BOOLEAN
);

INSERT INTO test_items (id, content, important) VALUES
    ('1', 'Test Word 1', true),
    ('2', 'Test Word 2', false),
    ('3', 'Test Word 3', true),
    ('4', 'Test Word 4', false)
ON CONFLICT (id) DO NOTHING;
