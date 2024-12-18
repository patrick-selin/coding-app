#!/bin/sh
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE IF NOT EXISTS crm_app_db_dev;
    GRANT ALL PRIVILEGES ON DATABASE crm_app_db_dev TO $POSTGRES_USER;
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE IF NOT EXISTS crm_app_db_test;
    GRANT ALL PRIVILEGES ON DATABASE crm_app_db_test TO $POSTGRES_USER;
EOSQL