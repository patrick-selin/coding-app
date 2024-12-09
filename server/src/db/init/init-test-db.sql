DO
$$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_catalog.pg_database WHERE datname = 'coding-app-db-test') THEN
      PERFORM pg_catalog.create_database('coding-app-db-test');
   END IF;
END
$$